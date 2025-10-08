import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RoomCodeDisplay from "@/components/RoomCodeDisplay";
import ConnectionStatus from "@/components/ConnectionStatus";
import ActiveSpeakerBanner from "@/components/ActiveSpeakerBanner";
import DelegateForm from "@/components/DelegateForm";
import QueueList from "@/components/QueueList";
import { ArrowLeft, LogOut } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { getCommitteeById } from "@shared/committees";
import { getSocket } from "@/lib/socket";

interface Speaker {
  id: string;
  name: string;
  representation: string;
}

export default function DelegateRoom() {
  const [, params] = useRoute("/committee/:committeeId/room/:roomCode");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const committeeId = params?.committeeId || "";
  const roomCode = params?.roomCode || "";
  const committee = getCommitteeById(committeeId);

  const [queue, setQueue] = useState<Speaker[]>([]);
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!committee || !roomCode) {
      setLocation("/");
      return;
    }

    const socket = getSocket();

    socket.on("connect", () => {
      setIsConnected(true);
      socket.emit("joinRoom", { roomCode, committeeId });
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("queueUpdated", ({ queue: newQueue, activeSpeaker: newActiveSpeaker }: { queue: Speaker[]; activeSpeaker: Speaker | null }) => {
      setQueue(newQueue);
      setActiveSpeaker(newActiveSpeaker);
    });

    socket.on("nextSpeaker", (speaker: Speaker) => {
      if (speaker.id === currentUserId) {
        toast({
          title: "You're Up!",
          description: "You have been called to speak",
        });
      }
    });

    if (socket.connected) {
      socket.emit("joinRoom", { roomCode, committeeId });
      setIsConnected(true);
    }

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("queueUpdated");
      socket.off("nextSpeaker");
    };
  }, [committeeId, roomCode, committee, setLocation, currentUserId, toast]);

  if (!committee) {
    return null;
  }

  const handleEnterQueue = (data: { name: string; representation: string }) => {
    const socket = getSocket();
    const newSpeaker: Speaker = {
      id: socket.id || Date.now().toString(),
      ...data,
    };
    
    socket.emit("enterQueue", { roomCode, speaker: newSpeaker });
    setCurrentUserId(newSpeaker.id);
    
    toast({
      title: "Joined Queue",
      description: "You have entered the speaking queue",
    });
  };

  const handleLeaveQueue = () => {
    if (!currentUserId) return;
    
    const socket = getSocket();
    socket.emit("leaveQueue", { roomCode, speakerId: currentUserId });
    setCurrentUserId(null);
    
    toast({
      title: "Left Queue",
      description: "You have been removed from the queue",
    });
  };

  const isInQueue = currentUserId !== null;
  const memberLabel = committeeId === 'loksabha' ? 'Member' : 'Country/Organization';

  return (
    <div className="min-h-screen pb-8">
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-md mx-auto p-4 flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation(`/committee/${committeeId}`)}
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1 text-center">
            <p className="text-sm font-medium">{committee.name}</p>
            <p className="text-xs text-muted-foreground truncate">{committee.agenda}</p>
          </div>
          <ConnectionStatus isConnected={isConnected} />
        </div>
      </header>

      <ActiveSpeakerBanner speaker={activeSpeaker} />

      <div className="max-w-md mx-auto p-4 space-y-6 mt-4">
        <RoomCodeDisplay roomCode={roomCode} />

        {!isInQueue ? (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Enter Queue</h2>
            <DelegateForm 
              onSubmit={handleEnterQueue} 
              members={committee.members}
              memberLabel={memberLabel}
            />
          </Card>
        ) : (
          <Card className="p-6">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                You are in the queue. Your position will update in real-time.
              </p>
              <Button
                variant="outline"
                onClick={handleLeaveQueue}
                className="w-full h-12"
                data-testid="button-leave-queue"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Leave Queue
              </Button>
            </div>
          </Card>
        )}

        <div>
          <h2 className="text-xl font-semibold mb-4">Speaking Queue</h2>
          <QueueList queue={queue} currentUserId={currentUserId || undefined} />
        </div>
      </div>
    </div>
  );
}

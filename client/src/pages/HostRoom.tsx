import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RoomCodeDisplay from "@/components/RoomCodeDisplay";
import ConnectionStatus from "@/components/ConnectionStatus";
import ActiveSpeakerBanner from "@/components/ActiveSpeakerBanner";
import HostControls from "@/components/HostControls";
import QueueList from "@/components/QueueList";
import { ArrowLeft } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { getCommitteeById } from "@shared/committees";
import { getSocket } from "@/lib/socket";

interface Speaker {
  id: string;
  name: string;
  representation: string;
}

export default function HostRoom() {
  const [, params] = useRoute("/committee/:committeeId/host/:roomCode");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const committeeId = params?.committeeId || "";
  const roomCode = params?.roomCode || "";
  const committee = getCommitteeById(committeeId);

  const [queue, setQueue] = useState<Speaker[]>([]);
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  if (!committee) {
    setLocation("/");
    return null;
  }

  useEffect(() => {
    if (!roomCode) {
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
      toast({
        title: "Speaker Called",
        description: `${speaker.name} representing ${speaker.representation}`,
      });
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
  }, [committeeId, roomCode, setLocation, toast]);

  const handleCallNext = () => {
    const socket = getSocket();
    socket.emit("callNext", { roomCode });
  };

  const handleRemove = (id: string) => {
    const socket = getSocket();
    socket.emit("removeSpeaker", { roomCode, speakerId: id });
    toast({
      title: "Delegate Removed",
      description: "Delegate removed from queue",
    });
  };

  const handleMove = (fromIndex: number, toIndex: number) => {
    const socket = getSocket();
    socket.emit("moveSpeaker", { roomCode, fromIndex, toIndex });
  };

  const handleReset = () => {
    const socket = getSocket();
    socket.emit("resetQueue", { roomCode });
    toast({
      title: "Queue Reset",
      description: "All delegates have been removed from the queue",
    });
  };

  return (
    <div className="min-h-screen pb-8">
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto p-4 flex items-center justify-between gap-4">
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
            <p className="text-xs text-muted-foreground">{committee.agenda}</p>
          </div>
          <ConnectionStatus isConnected={isConnected} />
        </div>
      </header>

      <ActiveSpeakerBanner speaker={activeSpeaker} />

      <div className="max-w-4xl mx-auto p-4 space-y-6 mt-4">
        <RoomCodeDisplay roomCode={roomCode} />

        <HostControls
          queueCount={queue.length}
          onCallNext={handleCallNext}
          onReset={handleReset}
          isCallNextDisabled={queue.length === 0}
        />

        <QueueList
          queue={queue}
          isHost={true}
          onRemove={handleRemove}
          onMove={handleMove}
        />
      </div>
    </div>
  );
}

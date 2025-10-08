import { useState } from "react";
import { Button } from "@/components/ui/button";
import RoomCodeDisplay from "@/components/RoomCodeDisplay";
import ConnectionStatus from "@/components/ConnectionStatus";
import ActiveSpeakerBanner from "@/components/ActiveSpeakerBanner";
import HostControls from "@/components/HostControls";
import QueueList from "@/components/QueueList";
import { ArrowLeft } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { useToast } from "@/hooks/use-toast";

interface Speaker {
  id: string;
  name: string;
  country: string;
  portfolio?: string;
}

export default function HostRoom() {
  const [, params] = useRoute("/host/:roomCode");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const roomCode = params?.roomCode || "A7B9C2";

  //todo: remove mock functionality - Replace with real Socket.IO integration
  const [queue, setQueue] = useState<Speaker[]>([
    { id: "1", name: "John Smith", country: "United States", portfolio: "Economic Affairs" },
    { id: "2", name: "Maria Garcia", country: "Spain" },
    { id: "3", name: "Ahmed Hassan", country: "Egypt", portfolio: "Security Council" },
  ]);
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);
  const [isConnected] = useState(true);

  const handleCallNext = () => {
    if (queue.length > 0) {
      const next = queue[0];
      setActiveSpeaker(next);
      setQueue(queue.slice(1));
      toast({
        title: "Speaker Called",
        description: `${next.name} from ${next.country}`,
      });
    }
  };

  const handleRemove = (id: string) => {
    setQueue(queue.filter((s) => s.id !== id));
    toast({
      title: "Delegate Removed",
      description: "Delegate removed from queue",
    });
  };

  const handleMove = (fromIndex: number, toIndex: number) => {
    const newQueue = [...queue];
    const [moved] = newQueue.splice(fromIndex, 1);
    newQueue.splice(toIndex, 0, moved);
    setQueue(newQueue);
  };

  const handleReset = () => {
    setQueue([]);
    setActiveSpeaker(null);
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
            onClick={() => setLocation("/")}
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
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

import QueueItem from "./QueueItem";
import { Users } from "lucide-react";

interface Speaker {
  id: string;
  name: string;
  representation: string;
}

interface QueueListProps {
  queue: Speaker[];
  isHost?: boolean;
  currentUserId?: string;
  onRemove?: (id: string) => void;
  onMove?: (fromIndex: number, toIndex: number) => void;
}

export default function QueueList({
  queue,
  isHost = false,
  currentUserId,
  onRemove,
  onMove,
}: QueueListProps) {
  if (queue.length === 0) {
    return (
      <div className="p-12 text-center" data-testid="empty-queue">
        <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
          <Users className="h-8 w-8 text-muted-foreground" />
        </div>
        <p className="text-lg font-medium text-muted-foreground">
          Queue is empty
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {isHost
            ? "Waiting for delegates to join the queue"
            : "Be the first to enter the queue"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {queue.map((speaker, index) => (
        <QueueItem
          key={speaker.id}
          speaker={speaker}
          position={index + 1}
          isHost={isHost}
          isYou={currentUserId === speaker.id}
          onRemove={() => onRemove?.(speaker.id)}
          onMoveUp={() => onMove?.(index, index - 1)}
          onMoveDown={() => onMove?.(index, index + 1)}
          canMoveUp={index > 0}
          canMoveDown={index < queue.length - 1}
        />
      ))}
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, ChevronUp, ChevronDown } from "lucide-react";

interface Speaker {
  id: string;
  name: string;
  representation: string;
}

interface QueueItemProps {
  speaker: Speaker;
  position: number;
  isHost?: boolean;
  isYou?: boolean;
  onRemove?: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  canMoveUp?: boolean;
  canMoveDown?: boolean;
}

export default function QueueItem({
  speaker,
  position,
  isHost = false,
  isYou = false,
  onRemove,
  onMoveUp,
  onMoveDown,
  canMoveUp = true,
  canMoveDown = true,
}: QueueItemProps) {
  return (
    <div
      className={`p-4 rounded-lg bg-card border border-card-border flex items-center gap-4 ${
        isYou ? "ring-2 ring-primary" : ""
      }`}
      data-testid={`queue-item-${speaker.id}`}
    >
      <div className="h-8 w-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center flex-shrink-0">
        {position}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-lg font-medium truncate" data-testid="text-speaker-name">
            {speaker.name}
          </p>
          {isYou && (
            <Badge variant="secondary" className="text-xs">
              You
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground truncate" data-testid="text-speaker-info">
          {speaker.representation}
        </p>
      </div>
      {isHost && (
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={onMoveUp}
            disabled={!canMoveUp}
            className="h-9 w-9"
            data-testid="button-move-up"
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={onMoveDown}
            disabled={!canMoveDown}
            className="h-9 w-9"
            data-testid="button-move-down"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={onRemove}
            className="h-9 w-9 text-destructive"
            data-testid="button-remove"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

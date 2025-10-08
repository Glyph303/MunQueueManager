import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface RoomCodeDisplayProps {
  roomCode: string;
}

export default function RoomCodeDisplay({ roomCode }: RoomCodeDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 rounded-xl bg-card border border-card-border">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-2">
            Room Code
          </p>
          <p className="text-4xl font-bold tracking-tight" data-testid="text-room-code">
            {roomCode}
          </p>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={handleCopy}
          className="h-12 w-12"
          data-testid="button-copy-code"
        >
          {copied ? (
            <Check className="h-5 w-5" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
}

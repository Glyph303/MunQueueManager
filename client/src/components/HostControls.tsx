import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, RotateCcw } from "lucide-react";

interface HostControlsProps {
  queueCount: number;
  onCallNext: () => void;
  onReset: () => void;
  isCallNextDisabled?: boolean;
}

export default function HostControls({
  queueCount,
  onCallNext,
  onReset,
  isCallNextDisabled = false,
}: HostControlsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">Speaking Queue</h2>
          <Badge variant="secondary" className="h-7 px-3" data-testid="badge-queue-count">
            {queueCount} {queueCount === 1 ? "delegate" : "delegates"}
          </Badge>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="h-9"
          data-testid="button-reset-queue"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      <Button
        className="w-full h-12"
        onClick={onCallNext}
        disabled={isCallNextDisabled}
        data-testid="button-call-next"
      >
        <Phone className="h-5 w-5 mr-2" />
        Call Next Speaker
      </Button>
    </div>
  );
}

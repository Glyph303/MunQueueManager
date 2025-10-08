import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RoomJoinForm from "@/components/RoomJoinForm";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function DelegateSetup() {
  const [, setLocation] = useLocation();

  const handleJoin = (code: string) => {
    setLocation(`/room/${code}`);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-md mx-auto pt-8 space-y-6">
        <Button
          variant="ghost"
          onClick={() => setLocation("/")}
          className="mb-4"
          data-testid="button-back"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">Join Queue</h1>
          <p className="text-muted-foreground">
            Enter the room code provided by your host
          </p>
        </div>

        <Card className="p-6">
          <RoomJoinForm onJoin={handleJoin} />
        </Card>
      </div>
    </div>
  );
}

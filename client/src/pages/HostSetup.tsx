import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RoomJoinForm from "@/components/RoomJoinForm";
import { ArrowLeft } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { getCommitteeById } from "@shared/committees";

export default function HostSetup() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/committee/:committeeId/host");
  const committeeId = params?.committeeId || "";
  const committee = getCommitteeById(committeeId);

  if (!committee) {
    setLocation("/");
    return null;
  }

  const generateRoomCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleCreateNew = () => {
    const code = generateRoomCode();
    setLocation(`/committee/${committeeId}/host/${code}`);
  };

  const handleJoin = (code: string) => {
    setLocation(`/committee/${committeeId}/host/${code}`);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-md mx-auto pt-8 space-y-6">
        <Button
          variant="ghost"
          onClick={() => setLocation(`/committee/${committeeId}`)}
          className="mb-4"
          data-testid="button-back"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">Host Setup</h1>
          <p className="text-sm text-muted-foreground mb-1">
            {committee.name} - {committee.agenda}
          </p>
          <p className="text-muted-foreground">
            Create a new room or join an existing one
          </p>
        </div>

        <Card className="p-6">
          <RoomJoinForm
            isHost={true}
            onJoin={handleJoin}
            onCreateNew={handleCreateNew}
          />
        </Card>
      </div>
    </div>
  );
}

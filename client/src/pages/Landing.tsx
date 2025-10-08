import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, UserCheck, ArrowLeft } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { getCommitteeById } from "@shared/committees";

export default function Landing() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/committee/:committeeId");
  const committeeId = params?.committeeId || "";
  const committee = getCommitteeById(committeeId);

  if (!committee) {
    setLocation("/");
    return null;
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-sm mx-auto pt-8 space-y-8">
        <Button
          variant="ghost"
          onClick={() => setLocation("/")}
          className="mb-4"
          data-testid="button-back"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Committees
        </Button>

        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-1">
            {committee.name}
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            {committee.fullName}
          </p>
          <div className="p-4 rounded-lg bg-card border border-card-border">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
              Agenda
            </p>
            <p className="text-sm font-medium">
              {committee.agenda}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Card
            className="p-8 hover-elevate active-elevate-2 cursor-pointer transition-all"
            onClick={() => setLocation(`/committee/${committeeId}/host`)}
            data-testid="card-host"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Host (EB)</h2>
                <p className="text-sm text-muted-foreground">
                  Create and manage speaking queues, control the flow of debate
                </p>
              </div>
            </div>
          </Card>

          <Card
            className="p-8 hover-elevate active-elevate-2 cursor-pointer transition-all"
            onClick={() => setLocation(`/committee/${committeeId}/delegate`)}
            data-testid="card-delegate"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Delegate</h2>
                <p className="text-sm text-muted-foreground">
                  Join a room and enter the speaking queue for your turn
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

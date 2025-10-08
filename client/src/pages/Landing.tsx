import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, UserCheck } from "lucide-react";
import { useLocation } from "wouter";

export default function Landing() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            MunQueue
          </h1>
          <p className="text-muted-foreground">
            Real-time speaking queue management for MUN committees
          </p>
        </div>

        <div className="space-y-4">
          <Card
            className="p-8 hover-elevate active-elevate-2 cursor-pointer transition-all"
            onClick={() => setLocation("/host")}
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
            onClick={() => setLocation("/delegate")}
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

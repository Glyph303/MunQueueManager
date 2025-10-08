import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { COMMITTEES } from "@shared/committees";

export default function CommitteeSelection() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto pt-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            MunQueue
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Real-time speaking queue management for MUN committees
          </p>
          <p className="text-sm text-muted-foreground">
            Select a committee to get started
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {COMMITTEES.map((committee) => (
            <Card
              key={committee.id}
              className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all"
              onClick={() => setLocation(`/committee/${committee.id}`)}
              data-testid={`card-committee-${committee.id}`}
            >
              <div className="space-y-3">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{committee.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {committee.fullName}
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
                    Agenda
                  </p>
                  <p className="text-sm font-medium">
                    {committee.agenda}
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground">
                    {committee.members.length} members
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Users } from "lucide-react";

interface Speaker {
  id: string;
  name: string;
  country: string;
  portfolio?: string;
}

interface ActiveSpeakerBannerProps {
  speaker: Speaker | null;
}

export default function ActiveSpeakerBanner({ speaker }: ActiveSpeakerBannerProps) {
  if (!speaker) return null;

  return (
    <div
      className="sticky top-0 z-10 p-4 bg-success/10 border-l-4 border-success backdrop-blur-md"
      data-testid="banner-active-speaker"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center">
          <Users className="h-5 w-5 text-success" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-success mb-1">Active Speaker</p>
          <p className="text-lg font-semibold" data-testid="text-speaker-name">
            {speaker.name}
          </p>
          <p className="text-sm text-muted-foreground" data-testid="text-speaker-country">
            {speaker.country}
            {speaker.portfolio && ` • ${speaker.portfolio}`}
          </p>
        </div>
      </div>
    </div>
  );
}

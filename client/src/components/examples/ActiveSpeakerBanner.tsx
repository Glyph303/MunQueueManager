import ActiveSpeakerBanner from '../ActiveSpeakerBanner';

export default function ActiveSpeakerBannerExample() {
  const speaker = {
    id: "1",
    name: "John Smith",
    country: "United States",
    portfolio: "Economic Affairs"
  };

  return (
    <div className="space-y-4">
      <ActiveSpeakerBanner speaker={speaker} />
      <ActiveSpeakerBanner speaker={null} />
    </div>
  );
}

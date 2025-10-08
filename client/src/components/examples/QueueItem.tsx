import QueueItem from '../QueueItem';

export default function QueueItemExample() {
  const speaker = {
    id: "1",
    name: "John Smith",
    country: "United States",
    portfolio: "Economic Affairs"
  };

  return (
    <div className="space-y-4 max-w-2xl">
      <QueueItem
        speaker={speaker}
        position={1}
        isHost={true}
        onRemove={() => console.log('Remove clicked')}
        onMoveUp={() => console.log('Move up clicked')}
        onMoveDown={() => console.log('Move down clicked')}
        canMoveUp={false}
      />
      <QueueItem
        speaker={speaker}
        position={2}
        isYou={true}
      />
    </div>
  );
}

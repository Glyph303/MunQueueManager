import QueueList from '../QueueList';

export default function QueueListExample() {
  const queue = [
    {
      id: "1",
      name: "John Smith",
      country: "United States",
      portfolio: "Economic Affairs"
    },
    {
      id: "2",
      name: "Maria Garcia",
      country: "Spain",
    },
    {
      id: "3",
      name: "Ahmed Hassan",
      country: "Egypt",
      portfolio: "Security Council"
    }
  ];

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Host View</h3>
        <QueueList
          queue={queue}
          isHost={true}
          onRemove={(id) => console.log('Remove', id)}
          onMove={(from, to) => console.log('Move', from, to)}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Delegate View</h3>
        <QueueList
          queue={queue}
          currentUserId="2"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Empty Queue</h3>
        <QueueList queue={[]} />
      </div>
    </div>
  );
}

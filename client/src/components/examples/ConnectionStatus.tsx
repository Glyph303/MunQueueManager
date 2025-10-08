import ConnectionStatus from '../ConnectionStatus';

export default function ConnectionStatusExample() {
  return (
    <div className="space-y-4">
      <ConnectionStatus isConnected={true} />
      <ConnectionStatus isConnected={false} />
    </div>
  );
}

import HostControls from '../HostControls';

export default function HostControlsExample() {
  return (
    <div className="max-w-2xl">
      <HostControls
        queueCount={5}
        onCallNext={() => console.log('Call next')}
        onReset={() => console.log('Reset queue')}
      />
    </div>
  );
}

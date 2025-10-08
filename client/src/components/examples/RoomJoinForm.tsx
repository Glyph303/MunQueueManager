import RoomJoinForm from '../RoomJoinForm';

export default function RoomJoinFormExample() {
  return (
    <div className="space-y-8 max-w-md">
      <div>
        <h3 className="text-lg font-semibold mb-4">Host Form</h3>
        <RoomJoinForm
          isHost={true}
          onJoin={(code) => console.log('Join:', code)}
          onCreateNew={() => console.log('Create new room')}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Delegate Form</h3>
        <RoomJoinForm
          onJoin={(code) => console.log('Join:', code)}
        />
      </div>
    </div>
  );
}

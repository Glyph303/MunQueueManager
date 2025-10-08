import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface RoomJoinFormProps {
  onJoin: (roomCode: string) => void;
  onCreateNew?: () => void;
  isHost?: boolean;
}

export default function RoomJoinForm({ onJoin, onCreateNew, isHost = false }: RoomJoinFormProps) {
  const [roomCode, setRoomCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomCode.trim()) {
      onJoin(roomCode.toUpperCase());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (value.length <= 6) {
      setRoomCode(value);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="roomCode">Room Code</Label>
          <Input
            id="roomCode"
            value={roomCode}
            onChange={handleInputChange}
            placeholder="Enter 6-character code"
            className="h-12 text-center text-2xl font-bold tracking-widest"
            maxLength={6}
            data-testid="input-room-code"
          />
        </div>
        <Button
          type="submit"
          className="w-full h-12"
          disabled={roomCode.length !== 6}
          data-testid="button-join-room"
        >
          Join Room
        </Button>
      </form>

      {isHost && onCreateNew && (
        <>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full h-12"
            onClick={onCreateNew}
            data-testid="button-create-room"
          >
            Create New Room
          </Button>
        </>
      )}
    </div>
  );
}

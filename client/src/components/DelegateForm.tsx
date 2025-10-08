import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface DelegateFormProps {
  onSubmit: (data: { name: string; representation: string }) => void;
  disabled?: boolean;
  members: string[];
  memberLabel?: string;
}

export default function DelegateForm({ 
  onSubmit, 
  disabled = false, 
  members,
  memberLabel = "Country/Organization"
}: DelegateFormProps) {
  const [name, setName] = useState("");
  const [representation, setRepresentation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && representation) {
      onSubmit({ name, representation });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="h-12"
          disabled={disabled}
          data-testid="input-name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="representation">{memberLabel}</Label>
        <Select value={representation} onValueChange={setRepresentation} disabled={disabled}>
          <SelectTrigger className="h-12" data-testid="select-representation">
            <SelectValue placeholder={`Select ${memberLabel.toLowerCase()}`} />
          </SelectTrigger>
          <SelectContent>
            {members.map((member) => (
              <SelectItem key={member} value={member}>
                {member}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        className="w-full h-12"
        disabled={!name || !representation || disabled}
        data-testid="button-enter-queue"
      >
        Enter Queue
      </Button>
    </form>
  );
}

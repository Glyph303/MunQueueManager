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
  onSubmit: (data: { name: string; country: string; portfolio?: string }) => void;
  disabled?: boolean;
}

const COUNTRIES = [
  "United States", "United Kingdom", "China", "Russia", "France", 
  "Germany", "Japan", "India", "Brazil", "Canada", "Australia",
  "Spain", "Italy", "Mexico", "South Korea", "Egypt", "Saudi Arabia"
];

const PORTFOLIOS = [
  "Security Council", "Economic Affairs", "Human Rights", 
  "Environmental Issues", "Disarmament", "Legal Affairs"
];

export default function DelegateForm({ onSubmit, disabled = false }: DelegateFormProps) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && country) {
      onSubmit({ name, country, portfolio: portfolio || undefined });
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
        <Label htmlFor="country">Country</Label>
        <Select value={country} onValueChange={setCountry} disabled={disabled}>
          <SelectTrigger className="h-12" data-testid="select-country">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="portfolio">Portfolio (Optional)</Label>
        <Select value={portfolio} onValueChange={setPortfolio} disabled={disabled}>
          <SelectTrigger className="h-12" data-testid="select-portfolio">
            <SelectValue placeholder="Select portfolio" />
          </SelectTrigger>
          <SelectContent>
            {PORTFOLIOS.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        className="w-full h-12"
        disabled={!name || !country || disabled}
        data-testid="button-enter-queue"
      >
        Enter Queue
      </Button>
    </form>
  );
}

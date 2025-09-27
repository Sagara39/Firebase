import { UtensilsCrossed } from "lucide-react";

export default function GlobalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary-foreground/10 p-2 rounded-lg">
            <UtensilsCrossed className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-primary-foreground">
            Canteen Ordering
          </h1>
        </div>
      </div>
    </header>
  );
}

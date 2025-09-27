import { Utensils } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Utensils className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-foreground">
          Canteen Ordering
        </h1>
      </div>
      <p className="text-muted-foreground">
        Select items from the menu below and proceed to checkout in your cart.
      </p>
    </header>
  );
}

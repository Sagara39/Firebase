'use client';

import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Wifi } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CheckoutPage() {
  const { cartItems, total, itemCount, checkout } = useCart();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if cart is empty after a brief moment
    if (itemCount === 0) {
      const timer = setTimeout(() => router.replace('/'), 50); // Small delay to prevent flash
      return () => clearTimeout(timer);
    }
  }, [itemCount, router]);


  if (itemCount === 0) {
    // Render a loading/redirecting state to avoid showing an empty checkout page
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Your cart is empty. Redirecting...</p>
        </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Checkout</CardTitle>
          <CardDescription>Review your order and tap your RFID card to pay.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <div className="max-h-48 overflow-y-auto rounded-md border p-2 space-y-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="rounded-md object-cover"
                    data-ai-hint={item.imageHint}
                  />
                  <div className="flex-grow">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total ({itemCount} {itemCount > 1 ? 'items' : 'item'})</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Separator />

          <div className="text-center py-4">
            <div className="flex justify-center mb-4">
              <div className="relative flex items-center justify-center w-36 h-36 bg-muted rounded-full animate-pulse">
                <Wifi className="w-20 h-20 text-muted-foreground/50" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary">
              Tap Your RFID Card to Pay
            </h3>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
            <Button
                onClick={() => router.push('/')}
                variant="outline"
                className="w-full sm:w-auto"
            >
                Cancel
            </Button>
            <Button
                onClick={checkout}
                className="w-full sm:flex-grow h-12 text-lg font-bold bg-accent text-accent-foreground hover:bg-accent/90"
            >
                Simulate Payment
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

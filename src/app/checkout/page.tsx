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
    // Redirect to home if cart is empty
    if (itemCount === 0) {
      router.replace('/');
    }
  }, [itemCount, router]);


  if (itemCount === 0) {
    // Render nothing or a loading state while redirecting
    return null; 
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Checkout</CardTitle>
          <CardDescription>Review your order and tap your RFID card to pay.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <div className="flex flex-col gap-4 max-h-[30vh] overflow-y-auto p-1 rounded-md border">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
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

          <div className="flex justify-between items-center font-bold text-xl">
            <span>Total ({itemCount} {itemCount > 1 ? 'items' : 'item'})</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Separator />

          <div className="text-center py-8">
            <p className="text-lg font-medium text-muted-foreground mb-4">
              Ready to Pay?
            </p>
            <div className="flex justify-center mb-6">
              <div className="relative flex items-center justify-center w-48 h-48 bg-muted rounded-full animate-pulse">
                <Wifi className="w-24 h-24 text-muted-foreground/50" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary">
              Tap Your RFID Card to Complete Purchase
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

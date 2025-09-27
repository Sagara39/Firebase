import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const order = await request.json();
    console.log("Order received:", order);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate a random success/failure for demonstration purposes
    if (Math.random() > 0.2) {
      // 80% success rate
      return NextResponse.json(
        { message: "Your order has been received and is being prepared!" },
        { status: 200 }
      );
    } else {
      // 20% failure rate
      return NextResponse.json(
        { message: "Could not connect to the kitchen. Please try again." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing order:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred on the server." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { menuItems } from "@/lib/data";

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500)); 
  
  // In a real app, you'd fetch this from a database or a real backend service.
  return NextResponse.json(menuItems);
}

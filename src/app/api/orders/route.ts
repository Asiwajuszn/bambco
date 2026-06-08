import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { generateOrderNumber } from "@/lib/utils";

// POST /api/orders — create a new pre-order
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const order_number = generateOrderNumber();

    const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          order_number,
          full_name: body.full_name,
          phone: body.phone,
          whatsapp: body.whatsapp,
          email: body.email || null,
          state: body.state,
          product_name: body.product_name,
          product_link: body.product_link || null,
          quantity: parseInt(body.quantity) || 1,
          product_description: body.product_description || null,
          payment_type: body.payment_type || "full",
          shipping_method: body.shipping_method || "sea",
          status: "submitted",
          amount_paid: 0,
          total_amount: 0,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ success: true, order_number, order: data });
  } catch (err) {
    console.error("Order creation error:", err);
    // Still return an order number so UX doesn't break
    return NextResponse.json({ success: false, order_number: generateOrderNumber() }, { status: 200 });
  }
}

// GET /api/orders — list all orders (admin)
export async function GET() {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ orders: data });
}

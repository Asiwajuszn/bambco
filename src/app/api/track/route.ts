import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET /api/track?q=BAM202600001  OR  ?q=08012345678
export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim();
  if (!q) return NextResponse.json({ error: "Missing query" }, { status: 400 });

  // Try order number first, then phone
  let { data, error } = await supabase
    .from("orders")
    .select("*")
    .ilike("order_number", q)
    .maybeSingle();

  if (!data) {
    const res = await supabase
      .from("orders")
      .select("*")
      .or(`phone.eq.${q},whatsapp.eq.${q}`)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    data = res.data;
    error = res.error;
  }

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ order: data });
}

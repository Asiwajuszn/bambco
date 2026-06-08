-- ===========================================
-- BAM-B & CO — Supabase Database Schema
-- Run this in your Supabase SQL Editor
-- ===========================================

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number    TEXT UNIQUE NOT NULL,
  full_name       TEXT NOT NULL,
  phone           TEXT NOT NULL,
  whatsapp        TEXT NOT NULL,
  email           TEXT,
  state           TEXT NOT NULL,
  product_name    TEXT NOT NULL,
  product_link    TEXT,
  quantity        INTEGER DEFAULT 1,
  product_description TEXT,
  payment_type    TEXT CHECK (payment_type IN ('full', 'installment')) DEFAULT 'full',
  shipping_method TEXT CHECK (shipping_method IN ('sea', 'air')) DEFAULT 'sea',
  status          TEXT CHECK (status IN (
                    'submitted', 'confirmed', 'ordered',
                    'in_transit', 'arrived_nigeria',
                    'ready_for_delivery', 'delivered'
                  )) DEFAULT 'submitted',
  amount_paid     NUMERIC(12, 2) DEFAULT 0,
  total_amount    NUMERIC(12, 2) DEFAULT 0,
  shipping_fee    NUMERIC(12, 2),
  estimated_arrival TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Payment history table
CREATE TABLE IF NOT EXISTS payments (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id    UUID REFERENCES orders(id) ON DELETE CASCADE,
  amount      NUMERIC(12, 2) NOT NULL,
  paid_at     TIMESTAMPTZ DEFAULT NOW(),
  note        TEXT
);

-- Auto-update updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Allow public to insert orders (pre-order form)
CREATE POLICY "Allow public insert" ON orders FOR INSERT WITH CHECK (true);

-- Allow public to read own order by order_number or phone
CREATE POLICY "Allow read by order number or phone" ON orders FOR SELECT
  USING (true);  -- Tighten this in production with auth

-- Allow public to read payments for their order
CREATE POLICY "Allow read payments" ON payments FOR SELECT USING (true);

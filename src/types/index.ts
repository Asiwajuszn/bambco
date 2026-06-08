export type OrderStatus =
  | "submitted"
  | "confirmed"
  | "ordered"
  | "in_transit"
  | "arrived_nigeria"
  | "ready_for_delivery"
  | "delivered";

export type PaymentType = "full" | "installment";
export type ShippingMethod = "sea" | "air";

export interface Order {
  id: string;
  order_number: string;
  full_name: string;
  phone: string;
  whatsapp: string;
  email?: string;
  state: string;
  product_name: string;
  product_link?: string;
  quantity: number;
  product_description?: string;
  payment_type: PaymentType;
  shipping_method: ShippingMethod;
  status: OrderStatus;
  amount_paid: number;
  total_amount: number;
  shipping_fee?: number;
  created_at: string;
  updated_at: string;
  estimated_arrival?: string;
}

export interface PaymentRecord {
  id: string;
  order_id: string;
  amount: number;
  paid_at: string;
  note?: string;
}

export const STATUS_LABELS: Record<OrderStatus, string> = {
  submitted: "Submitted",
  confirmed: "Confirmed",
  ordered: "Ordered from Supplier",
  in_transit: "In Transit",
  arrived_nigeria: "Arrived Nigeria",
  ready_for_delivery: "Ready for Delivery",
  delivered: "Delivered",
};

export const STATUS_COLORS: Record<OrderStatus, string> = {
  submitted: "bg-gray-100 text-gray-700",
  confirmed: "bg-blue-100 text-blue-700",
  ordered: "bg-purple-100 text-purple-700",
  in_transit: "bg-yellow-100 text-yellow-700",
  arrived_nigeria: "bg-orange-100 text-orange-700",
  ready_for_delivery: "bg-teal-100 text-teal-700",
  delivered: "bg-green-100 text-green-700",
};

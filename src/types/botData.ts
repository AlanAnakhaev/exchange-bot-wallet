export interface Bot {
  id: string;
  name: string;
  exchange: string;
  symbol: string;
  amount: number;
  grid_length: number;
  first_order_offset: number;
  num_orders: number;
  partial_num_orders: number;
  next_order_volume: number;
  profit_percentage: number;
  price_change_percentage: number;
  log_coefficient: number;
  profit_capitalization: number;
  upper_price_limit: number;
  status: string;
  is_active: boolean;
  user_id: string;
  exchange_key_id: string;
  created_at: string;
  updated_at: string;
}

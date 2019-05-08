export interface AdvancedMatching {
  ct: string;
  country: string;
  db: string;
  em: string;
  fn: string;
  ge: string;
  ln: string;
  ph: string;
  st: string;
  zp: string;
}

export interface Options {
  autoConfig: boolean;
  debug: boolean;
}

export interface ViewContentPayload {
  content_ids?: string[];
  content_type?: "product" | "product_group";
  content_name?: string;
  contents?: { id: string; quantity: number }[];
  value?: number;
  currency?: string;
}

export interface AddToCartPayload {
  content_ids?: string[];
  content_type?: "product" | "product_group";
  content_name?: string;
  contents?: { id: string; quantity: number }[];
  value?: number;
  currency?: string;
}

export function init(
  pixelId: string,
  advancedMatching?: AdvancedMatching,
  options?: Options
): void;
export function pageView(): void;
export function track(
  title: string,
  data: ViewContentPayload | AddToCartPayload
): void;

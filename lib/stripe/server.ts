import Stripe from "stripe";

let stripeSingleton: Stripe | null | undefined;

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  if (stripeSingleton === undefined) {
    stripeSingleton = new Stripe(key);
  }
  return stripeSingleton;
}

export function stripePublishableConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim());
}

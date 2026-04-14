"use client";

/** Decorative marks for card + wallet methods shown next to Stripe. */
export function PaymentBrandIcons({ className = "" }: { className?: string }) {
  const pill =
    "inline-flex h-7 items-center justify-center rounded border border-white/15 bg-white/5 px-2 text-[8px] font-bold tracking-wide text-white uppercase";
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`} aria-hidden>
      <span className={pill}>Visa</span>
      <span className={pill}>Mastercard</span>
      <span className={pill}>Amex</span>
      <span className={`${pill} bg-black normal-case tracking-tight`}>Apple Pay</span>
      <span className={`${pill} bg-white text-black normal-case tracking-tight`}>
        Google Pay
      </span>
    </div>
  );
}

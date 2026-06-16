"use client";

import { useMemo, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import type { StripeElementsOptions } from "@stripe/stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Loader2 } from "lucide-react";

type InnerProps = {
  orderTotalLabel: string;
  payLabel: string;
  processingLabel: string;
  returnPath: string;
  onSuccess: (paymentIntentId: string) => void;
};

function InnerForm({
  orderTotalLabel,
  payLabel,
  processingLabel,
  returnPath,
  onSuccess,
}: InnerProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setBusy(true);
    setMsg(null);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}${returnPath}`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMsg(error.message ?? "Payment failed");
      setBusy(false);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      onSuccess(paymentIntent.id);
      setBusy(false);
      return;
    }

    if (paymentIntent?.status === "processing") {
      setMsg("Payment is processing. Please wait…");
      setBusy(false);
      return;
    }

    setMsg("Payment could not be completed. Please try again.");
    setBusy(false);
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <PaymentElement />
      {msg && (
        <p className="text-sm text-[#8C080C] border border-[#8C080C]/30 bg-[#8C080C]/10 px-3 py-2">
          {msg}
        </p>
      )}
      <button
        type="submit"
        disabled={busy || !stripe || !elements}
        className="bg-[#8C080C] hover:bg-[#a0090e] text-white py-3.5 text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {busy ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {processingLabel}
          </>
        ) : (
          <>
            {payLabel} ({orderTotalLabel})
          </>
        )}
      </button>
    </form>
  );
}

type Props = InnerProps & {
  clientSecret: string;
  publishableKey: string;
};

const appearance: StripeElementsOptions["appearance"] = {
  theme: "night",
  variables: {
    colorPrimary: "#C0A07B",
    colorBackground: "#141414",
    colorText: "#f5f5f5",
    colorDanger: "#8C080C",
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
    borderRadius: "2px",
    spacingUnit: "3px",
  },
};

export function StripePaymentForm({
  clientSecret,
  publishableKey,
  ...inner
}: Props) {
  const stripePromise = useMemo(
    () => loadStripe(publishableKey),
    [publishableKey]
  );

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <Elements key={clientSecret} stripe={stripePromise} options={options}>
      <InnerForm {...inner} />
    </Elements>
  );
}

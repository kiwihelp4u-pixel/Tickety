"use client";

import { useRouter } from "next/navigation";

type Props = {
  slug: string;
  quantity: number;
  total: number;
};

export default function MobileCheckoutBar({
  slug,
  quantity,
  total,
}: Props) {
  const router = useRouter();

  const handleContinue = () => {
    if (!slug || quantity <= 0) {
      return;
    }

    // Always pass BOTH params
    router.push(
      `/checkout/payment?event=${slug}&qty=${quantity}`
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-4">
      <div className="mx-auto flex max-w-md items-center justify-between">
        <div>
          <div className="text-sm text-gray-600">
            {quantity} ticket{quantity > 1 ? "s" : ""}
          </div>
          <div className="text-lg font-semibold">
            ${total.toFixed(2)}
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={quantity <= 0}
          className="rounded-lg bg-green-600 px-6 py-3 text-white disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

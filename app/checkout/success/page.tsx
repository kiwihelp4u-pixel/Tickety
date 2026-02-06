"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const params = useSearchParams();
  const qty = params.get("qty");

  return (
    <main className="mx-auto max-w-md p-6 text-center">
      <div className="rounded-xl bg-white p-6 shadow">
        <h1 className="text-xl font-semibold text-green-600">
          Order confirmed
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          {qty} ticket(s) successfully booked.
        </p>

        <p className="mt-4 text-xs text-gray-500">
          A confirmation email will be sent shortly.
        </p>
      </div>
    </main>
  );
}

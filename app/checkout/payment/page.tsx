import { Suspense } from "react";
import PaymentClient from "./PaymentClient";

export default function PaymentPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PaymentClient />
    </Suspense>
  );
}

function Loading() {
  return (
    <main className="mx-auto max-w-md p-6">
      <div className="rounded-xl border bg-white p-6 text-center text-sm text-gray-600">
        Loading payment…
      </div>
    </main>
  );
}

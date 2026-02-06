import { Suspense } from "react";
import CheckoutClient from "./CheckoutClient";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<Loading />}>
      <CheckoutClient />
    </Suspense>
  );
}

function Loading() {
  return (
    <main className="mx-auto max-w-md p-6">
      <div className="rounded-xl border bg-white p-6 text-center text-sm text-gray-600">
        Loading checkout…
      </div>
    </main>
  );
}

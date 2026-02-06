import { Suspense } from "react";
import SuccessClient from "./SuccessClient";

export default function SuccessPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SuccessClient />
    </Suspense>
  );
}

function Loading() {
  return (
    <main className="mx-auto max-w-md p-6">
      <div className="rounded-xl border bg-white p-6 text-center text-sm text-gray-600">
        Loading confirmation…
      </div>
    </main>
  );
}

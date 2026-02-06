"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const params = useSearchParams();
  const event = params.get("event") || "your event";

  return (
    <main className="mx-auto max-w-md p-6">
      <div className="rounded-xl border bg-white p-6 text-center">
        <h1 className="text-xl font-semibold text-green-700">
          Booking confirmed
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Your ticket for <strong>{event}</strong> has been successfully booked.
        </p>

        <Link
          href="/events"
          className="mt-6 inline-block rounded-md bg-green-600 px-5 py-3 text-sm font-medium text-white"
        >
          Browse more events
        </Link>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type TicketType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type EventData = {
  slug: string;
  title: string;
  date: string;
  location: string;
  ticket: TicketType;
};

const EVENTS: EventData[] = [
  {
    slug: "auckland-music-night",
    title: "Auckland Music Night",
    date: "20 April 2026",
    location: "Auckland",
    ticket: {
      id: "ga",
      name: "General Admission",
      description: "Standard entry",
      price: 25,
    },
  },
  {
    slug: "wellington-tech-meetup",
    title: "Wellington Tech Meetup",
    date: "5 May 2026",
    location: "Wellington",
    ticket: {
      id: "free",
      name: "Free Ticket",
      description: "Community event",
      price: 0,
    },
  },
  {
    slug: "christchurch-food-festival",
    title: "Christchurch Food Festival",
    date: "18 May 2026",
    location: "Christchurch",
    ticket: {
      id: "entry",
      name: "Entry Pass",
      description: "Food festival access",
      price: 15,
    },
  },
];

function money(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function PaymentPage() {
  const sp = useSearchParams();
  const router = useRouter();

  const event = sp.get("event") || "";
  const qty = Number(sp.get("qty") || "0");

  const eventData = useMemo(
    () => EVENTS.find((e) => e.slug === event),
    [event]
  );

  if (!eventData || !Number.isFinite(qty) || qty <= 0) {
    return (
      <main className="mx-auto max-w-5xl p-6">
        <div className="mx-auto max-w-md rounded-xl border bg-white p-6">
          <h1 className="text-lg font-semibold">Invalid payment</h1>
          <p className="mt-2 text-sm text-gray-600">
            Missing event or quantity.
          </p>

          <Link
            href="/events"
            className="mt-5 inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white"
          >
            Back to events
          </Link>
        </div>
      </main>
    );
  }

  const subtotal = qty * eventData.ticket.price;
  const bookingFee = subtotal > 0 ? 3.5 : 0;
  const total = subtotal + bookingFee;

  return (
    <main className="mx-auto max-w-5xl p-6">
      <div className="mx-auto max-w-md rounded-xl border bg-white">
        <div className="border-b p-5">
          <h1 className="text-lg font-semibold">Payment</h1>
          <div className="mt-1 text-sm text-gray-600">
            {eventData.title} · {eventData.date} · {eventData.location}
          </div>
        </div>

        <div className="space-y-4 p-5">
          <div className="rounded-xl border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold">{eventData.ticket.name}</div>
                <div className="text-sm text-gray-600">
                  {eventData.ticket.description}
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">x{qty}</div>
                <div className="text-sm text-gray-700">
                  {money(eventData.ticket.price)}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gray-50 p-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-semibold">{money(subtotal)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-gray-700">Booking fee</span>
              <span className="font-semibold">{money(bookingFee)}</span>
            </div>
            <div className="mt-3 flex items-center justify-between border-t pt-3">
              <span className="font-semibold">Total</span>
              <span className="text-base font-semibold">{money(total)}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => router.push(`/checkout/success?event=${event}`)}
            className="w-full rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            Pay now (mock)
          </button>

          <button
            type="button"
            onClick={() => router.push(`/checkout/cancel?event=${event}`)}
            className="w-full rounded-lg border px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}

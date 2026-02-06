"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

/**
 * MUST match the same data used in events/[slug]
 * No magic. No missing slugs.
 */
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

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const slug = searchParams.get("event") || "";
  const qty = Number(searchParams.get("qty") || 0);

  const event = useMemo(
    () => EVENTS.find((e) => e.slug === slug),
    [slug]
  );

  /**
   * ✅ ONLY invalid conditions
   * Free events are VALID
   */
  if (!event || qty <= 0) {
    return (
      <main className="mx-auto max-w-md p-6">
        <h1 className="text-lg font-semibold">Invalid checkout</h1>
      </main>
    );
  }

  const subtotal = event.ticket.price * qty;
  const bookingFee = subtotal > 0 ? 3.5 : 0;
  const total = subtotal + bookingFee;
  const isFreeOrder = total === 0;

  return (
    <main className="mx-auto max-w-md p-6">
      <div className="rounded-xl border bg-white p-5">
        <h1 className="text-lg font-semibold">Review your order</h1>

        <p className="mt-1 text-sm text-gray-600">
          {event.title} · {event.date} · {event.location}
        </p>

        <div className="mt-4 rounded-lg border p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold">{event.ticket.name}</div>
              <div className="text-sm text-gray-600">
                {event.ticket.description}
              </div>
            </div>

            <div className="text-right">
              <div className="font-semibold">x{qty}</div>
              <div className="text-sm">{money(event.ticket.price)}</div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{money(subtotal)}</span>
          </div>

          <div className="mt-1 flex justify-between">
            <span>Booking fee</span>
            <span>{money(bookingFee)}</span>
          </div>

          <div className="mt-2 flex justify-between border-t pt-2 font-semibold">
            <span>Total</span>
            <span>{money(total)}</span>
          </div>
        </div>

        <button
          className="mt-5 w-full rounded-md bg-green-600 py-3 text-white font-medium"
          onClick={() => {
            if (isFreeOrder) {
              router.push("/checkout/success");
            } else {
              router.push("/checkout/payment");
            }
          }}
        >
          {isFreeOrder ? "Confirm booking" : "Proceed to payment"}
        </button>
      </div>
    </main>
  );
}

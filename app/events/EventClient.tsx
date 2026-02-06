"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EventCard from "@/components/EventCard";
import MobileCheckoutBar from "@/components/MobileCheckoutBar";

type TicketType = {
  id: string;
  name: string;
  description: string;
  price: number;
  maxPerOrder: number;
  remaining: number;
};

type EventData = {
  title: string;
  date: string;
  venue: string;
  tickets: TicketType[];
};

const EVENT_DATA: Record<string, EventData> = {
  "auckland-music-night": {
    title: "Auckland Music Night",
    date: "20 April 2026",
    venue: "Auckland",
    tickets: [
      {
        id: "ga",
        name: "General Admission",
        description: "Standard entry",
        price: 25,
        maxPerOrder: 6,
        remaining: 100,
      },
    ],
  },
  "wellington-tech-meetup": {
    title: "Wellington Tech Meetup",
    date: "5 May 2026",
    venue: "Wellington",
    tickets: [
      {
        id: "free",
        name: "Free Ticket",
        description: "Community event",
        price: 0,
        maxPerOrder: 1,
        remaining: 200,
      },
    ],
  },
  "christchurch-food-festival": {
    title: "Christchurch Food Festival",
    date: "18 May 2026",
    venue: "Christchurch",
    tickets: [
      {
        id: "entry",
        name: "Entry Pass",
        description: "Food festival access",
        price: 15,
        maxPerOrder: 4,
        remaining: 80,
      },
    ],
  },
};

export default function EventClient({ slug }: { slug: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const event = EVENT_DATA[slug];
  const ticket = event?.tickets[0];

  const clamp = (n: number) =>
    Math.min(
      Math.max(n, 0),
      Math.min(ticket!.maxPerOrder, ticket!.remaining)
    );

  const [qty, setQty] = useState(0);

  // READ qty from URL on load
  useEffect(() => {
    if (!ticket) return;
    const q = Number(searchParams.get("qty") ?? 0);
    if (!Number.isNaN(q)) setQty(clamp(q));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticket]);

  // WRITE qty to URL on change (replace, no history spam)
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (qty > 0) params.set("qty", String(qty));
    else params.delete("qty");
    router.replace(`?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty]);

  if (!event || !ticket) {
    return (
      <main className="p-6">
        <h1 className="text-lg font-semibold">Event not found</h1>
      </main>
    );
  }

  const total = qty * ticket.price;

  return (
    <main className="min-h-screen bg-gray-100 p-6 pb-24">
      <EventCard
        slug={slug}
        title={event.title}
        location={event.venue}
        date={event.date}
        tickets={event.tickets}
        quantity={qty}
        onQuantityChange={(v) => setQty(clamp(v))}
      />

      <MobileCheckoutBar
        slug={slug}
        quantity={qty}
        total={total}
      />
    </main>
  );
}

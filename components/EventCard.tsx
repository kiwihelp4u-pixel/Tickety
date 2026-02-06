"use client";

import TicketSelector from "@/components/TicketSelector";

type TicketType = {
  id: string;
  name: string;
  description: string;
  price: number;
  maxPerOrder: number;
  remaining: number;
};

type Props = {
  slug: string;
  title: string;
  location: string;
  date: string;
  tickets: TicketType[];
  quantity: number;
  onQuantityChange: (qty: number) => void;
};

export default function EventCard({
  title,
  location,
  date,
  tickets,
  quantity,
  onQuantityChange,
}: Props) {
  const ticket = tickets[0];

  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-5 shadow">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="mt-1 text-sm text-gray-600">
        {date} · {location}
      </p>

      <div className="mt-6 rounded-lg border p-4">
        <TicketSelector
          price={ticket.price}
          quantity={quantity}
          onChange={(val) =>
            onQuantityChange(
              Math.min(
                Math.max(val, 0),
                Math.min(ticket.maxPerOrder, ticket.remaining)
              )
            )
          }
        />

        <div className="mt-2 text-xs text-gray-500">
          {ticket.remaining} left · max {ticket.maxPerOrder} per order
        </div>
      </div>
    </div>
  );
}

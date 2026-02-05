"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"

type TicketType = {
  id: string
  name: string
  description: string
  price: number
  maxPerOrder: number
  remaining: number
}

const BOOKING_FEE = 3.5

export default function CheckoutClient() {
  const params = useSearchParams()

  const eventTitle = params.get("title") || "Event"
  const eventDate = params.get("date") || ""

  const tickets: TicketType[] = useMemo(
    () => [
      {
        id: "ga",
        name: "General Admission",
        description: "Standing · All access",
        price: 79,
        maxPerOrder: 6,
        remaining: 120,
      },
      {
        id: "vip",
        name: "VIP",
        description: "Early entry · Premium view",
        price: 149,
        maxPerOrder: 2,
        remaining: 30,
      },
    ],
    []
  )

  const [quantities, setQuantities] = useState<Record<string, number>>({
    ga: 1,
    vip: 0,
  })

  const subtotal = tickets.reduce(
    (sum, t) => sum + t.price * (quantities[t.id] || 0),
    0
  )

  const totalTickets = Object.values(quantities).reduce(
    (a, b) => a + b,
    0
  )

  const fees = totalTickets > 0 ? BOOKING_FEE : 0
  const total = subtotal + fees

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen shadow-sm">
        <header className="border-b px-5 py-4 space-y-1">
          <h1 className="text-lg font-semibold">Select tickets</h1>
          <p className="text-sm text-gray-600">
            {eventTitle} · {eventDate}
          </p>
        </header>

        <section className="px-5 py-6 space-y-6">
          {tickets.map((ticket) => {
            const qty = quantities[ticket.id] || 0
            const soldOut = ticket.remaining === 0

            return (
              <div
                key={ticket.id}
                className={`rounded-xl border p-4 space-y-4 ${
                  soldOut ? "opacity-50" : ""
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-base font-semibold">
                      {ticket.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {ticket.description}
                    </p>
                  </div>

                  <span className="text-sm font-semibold">
                    ${ticket.price}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Quantity
                  </span>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        setQuantities((q) => ({
                          ...q,
                          [ticket.id]: Math.max(q[ticket.id] - 1, 0),
                        }))
                      }
                      className="h-9 w-9 rounded-full border text-lg"
                    >
                      −
                    </button>

                    <span className="text-sm font-medium w-4 text-center">
                      {qty}
                    </span>

                    <button
                      onClick={() =>
                        setQuantities((q) => ({
                          ...q,
                          [ticket.id]: q[ticket.id] + 1,
                        }))
                      }
                      className="h-9 w-9 rounded-full border text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="rounded-lg bg-gray-50 p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Booking fee</span>
              <span>${fees}</span>
            </div>

            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

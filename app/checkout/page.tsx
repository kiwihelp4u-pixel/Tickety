"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type TicketType = {
  id: string
  name: string
  description: string
  price: number
  maxPerOrder: number
  remaining: number
}

const BOOKING_FEE = 3.5

export default function Checkout() {
  const params = useSearchParams()

  const eventTitle = params.get("title") || "Event"
  const eventDate = params.get("date") || ""

  const rawTickets = params.get("tickets")
  const tickets: TicketType[] = rawTickets ? JSON.parse(rawTickets) : []

  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // initialise quantities dynamically
  useEffect(() => {
    const initial: Record<string, number> = {}
    tickets.forEach((t) => {
      initial[t.id] = 0
    })
    setQuantities(initial)
  }, [tickets])

  const updateQty = (ticket: TicketType, delta: number) => {
    setQuantities((prev) => {
      const current = prev[ticket.id] || 0
      const next = current + delta

      if (next < 0) return prev
      if (next > ticket.maxPerOrder) return prev
      if (next > ticket.remaining) return prev

      return { ...prev, [ticket.id]: next }
    })
  }

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

  const onContinue = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const items = tickets
        .map((t) => ({
          id: t.id,
          name: t.name,
          description: t.description,
          unitAmount: t.price,
          quantity: quantities[t.id] || 0,
        }))
        .filter((i) => i.quantity > 0)

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventTitle,
          eventDate,
          items,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Checkout failed")

      window.location.href = data.url
    } catch (e: any) {
      setError(e?.message || "Something went wrong")
      setIsLoading(false)
    }
  }

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

                    {soldOut ? (
                      <p className="mt-1 text-xs font-medium text-red-600">
                        Sold out
                      </p>
                    ) : (
                      <p className="mt-1 text-xs text-gray-500">
                        Max {ticket.maxPerOrder} per order ·{" "}
                        {ticket.remaining} left
                      </p>
                    )}
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
                      onClick={() => updateQty(ticket, -1)}
                      disabled={qty === 0 || soldOut || isLoading}
                      className="h-9 w-9 rounded-full border text-lg disabled:opacity-40"
                    >
                      −
                    </button>

                    <span className="text-sm font-medium w-4 text-center">
                      {qty}
                    </span>

                    <button
                      onClick={() => updateQty(ticket, 1)}
                      disabled={
                        soldOut ||
                        qty >= ticket.maxPerOrder ||
                        qty >= ticket.remaining ||
                        isLoading
                      }
                      className="h-9 w-9 rounded-full border text-lg disabled:opacity-40"
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

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}
        </section>

        <footer className="sticky bottom-0 bg-white border-t px-5 py-4">
          <button
            onClick={onContinue}
            disabled={totalTickets === 0 || isLoading}
            className="w-full rounded-xl bg-black py-3 text-sm font-medium text-white disabled:opacity-40"
          >
            {isLoading ? "Redirecting…" : "Continue to payment"}
          </button>
        </footer>

      </div>
    </main>
  )
}

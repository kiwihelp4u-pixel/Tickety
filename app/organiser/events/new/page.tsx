"use client"

import { useState } from "react"

type TicketInput = {
  id: string
  name: string
  price: string
  maxPerOrder: string
  quantity: string
}

export default function CreateEventPage() {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [venue, setVenue] = useState("")

  const [tickets, setTickets] = useState<TicketInput[]>([
    {
      id: crypto.randomUUID(),
      name: "General Admission",
      price: "",
      maxPerOrder: "6",
      quantity: "",
    },
  ])

  const addTicket = () => {
    setTickets((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: "",
        price: "",
        maxPerOrder: "4",
        quantity: "",
      },
    ])
  }

  const updateTicket = (
    id: string,
    field: keyof TicketInput,
    value: string
  ) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, [field]: value } : t
      )
    )
  }

  const removeTicket = (id: string) => {
    setTickets((prev) => prev.filter((t) => t.id !== id))
  }

  const onSaveDraft = () => {
    const payload = {
      title,
      date,
      venue,
      tickets,
      status: "draft",
    }

    console.log("DRAFT EVENT", payload)
    alert("Draft saved (console only for now)")
  }

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-xl bg-white min-h-screen px-6 py-6 space-y-8">

        <header>
          <h1 className="text-xl font-semibold">
            Create event
          </h1>
          <p className="text-sm text-gray-600">
            Event details and ticket setup
          </p>
        </header>

        {/* Event details */}
        <section className="space-y-4">
          <div>
            <label className="text-sm font-medium">
              Event title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="Arijit Singh Live in Auckland"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Date
            </label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="12 Feb 2026"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Venue
            </label>
            <input
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="Spark Arena"
            />
          </div>
        </section>

        {/* Tickets */}
        <section className="space-y-6">
          <h2 className="text-base font-semibold">
            Ticket types
          </h2>

          {tickets.map((ticket, index) => (
            <div
              key={ticket.id}
              className="rounded-xl border p-4 space-y-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">
                  Ticket {index + 1}
                </h3>

                {tickets.length > 1 && (
                  <button
                    onClick={() => removeTicket(ticket.id)}
                    className="text-xs text-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div>
                <label className="text-xs font-medium">
                  Name
                </label>
                <input
                  value={ticket.name}
                  onChange={(e) =>
                    updateTicket(
                      ticket.id,
                      "name",
                      e.target.value
                    )
                  }
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                  placeholder="General Admission"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium">
                    Price ($)
                  </label>
                  <input
                    value={ticket.price}
                    onChange={(e) =>
                      updateTicket(
                        ticket.id,
                        "price",
                        e.target.value
                      )
                    }
                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                    placeholder="49"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium">
                    Max per order
                  </label>
                  <input
                    value={ticket.maxPerOrder}
                    onChange={(e) =>
                      updateTicket(
                        ticket.id,
                        "maxPerOrder",
                        e.target.value
                      )
                    }
                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium">
                    Quantity
                  </label>
                  <input
                    value={ticket.quantity}
                    onChange={(e) =>
                      updateTicket(
                        ticket.id,
                        "quantity",
                        e.target.value
                      )
                    }
                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                    placeholder="120"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addTicket}
            className="text-sm underline"
          >
            + Add another ticket type
          </button>
        </section>

        {/* Actions */}
        <footer className="pt-4 border-t flex gap-3">
          <button
            onClick={onSaveDraft}
            className="rounded-xl border px-4 py-2 text-sm"
          >
            Save draft
          </button>

          <button
            className="rounded-xl bg-black px-4 py-2 text-sm text-white"
          >
            Publish event
          </button>
        </footer>

      </div>
    </main>
  )
}

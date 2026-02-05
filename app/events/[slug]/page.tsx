import EventCard from "@/components/EventCard"

type TicketType = {
  id: string
  name: string
  description: string
  price: number
  maxPerOrder: number
  remaining: number
}

type EventData = {
  title: string
  date: string
  venue: string
  tickets: TicketType[]
}

// TEMP MOCK DATA (will be replaced by organiser UI / DB)
const EVENT_DATA: Record<string, EventData> = {
  "arijit-singh-auckland": {
    title: "Arijit Singh Live in Auckland",
    date: "12 Feb 2026",
    venue: "Spark Arena",
    tickets: [
      {
        id: "ga",
        name: "General Admission",
        description: "Standing · All access",
        price: 49,
        maxPerOrder: 6,
        remaining: 120,
      },
      {
        id: "vip",
        name: "VIP",
        description: "Early entry · Premium view",
        price: 99,
        maxPerOrder: 2,
        remaining: 30,
      },
    ],
  },
}

export default function EventPage({
  params,
}: {
  params: { slug: string }
}) {
  const event = EVENT_DATA[params.slug]

  if (!event) {
    return (
      <main className="p-6">
        <h1 className="text-lg font-semibold">
          Event not found
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <EventCard
        slug={params.slug}
        title={event.title}
        location={event.venue}
        date={event.date}
        tickets={event.tickets}
      />
    </main>
  )
}

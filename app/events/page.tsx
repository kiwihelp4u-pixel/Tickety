import { events } from "@/data/events"
import EventListCard from "@/components/EventListCard"

export default function EventsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-bold">Find events</h1>
        <p className="mt-2 text-gray-600">
          Discover events happening across New Zealand.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventListCard
              key={event.id}
              slug={event.slug}
              title={event.title}
              date={event.date}
              location={event.location}
              priceLabel={
                event.price === 0 ? "Free" : `From $${event.price}`
              }
            />
          ))}
        </div>
      </div>
    </main>
  )
}

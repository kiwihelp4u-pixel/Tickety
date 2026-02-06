import EventListCard from "@/components/EventListCard"
import { supabaseServer } from "@/lib/supabase/server"

export default async function EventsPage() {
  const { data: events, error } = await supabaseServer
    .from("events")
    .select(`
      id,
      title,
      slug,
      location,
      event_date,
      tickets: tickets_event_id_fkey (
        price
      )
    `)
    .eq("status", "live")
    .order("event_date", { ascending: true })

  if (error) {
    console.error("Supabase error:", error)
    return (
      <main className="bg-gray-50 min-h-screen py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-red-600">Failed to load events</p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-gray-50 min-h-screen py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-bold">Find events</h1>
        <p className="mt-2 text-gray-600">
          Discover events happening across New Zealand.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events?.map((event) => {
            const prices =
              event.tickets?.map((t: { price: number }) => Number(t.price)) || []

            const minPrice =
              prices.length === 0 ? 0 : Math.min(...prices)

            return (
              <EventListCard
                key={event.id}
                slug={event.slug}
                title={event.title}
                date={new Date(event.event_date).toDateString()}
                location={event.location}
                priceLabel={
                  minPrice === 0 ? "Free" : `From $${minPrice}`
                }
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

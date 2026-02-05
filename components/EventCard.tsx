import Link from "next/link"

type TicketType = {
  id: string
  name: string
  description: string
  price: number
  maxPerOrder: number
  remaining: number
}

type EventCardProps = {
  slug: string
  title: string
  location: string
  date: string
  tickets?: TicketType[] // optional, defensive
}

export default function EventCard({
  slug,
  title,
  location,
  date,
  tickets = [],
}: EventCardProps) {
  const lowestPrice =
    tickets.length > 0
      ? Math.min(...tickets.map((t) => t.price))
      : null

  return (
    <Link
      href={{
        pathname: "/checkout",
        query: {
          title,
          date,
          tickets: JSON.stringify(tickets),
        },
      }}
      className="block"
    >
      <div className="rounded-2xl bg-white shadow-sm overflow-hidden">
        <div className="h-40 bg-gray-200" />

        <div className="p-4 space-y-1">
          <h2 className="text-sm font-semibold leading-snug">
            {title}
          </h2>

          <p className="text-xs text-gray-600">
            {location} · {date}
          </p>

          {lowestPrice !== null && (
            <p className="text-sm font-medium text-gray-900 pt-1">
              From ${lowestPrice}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

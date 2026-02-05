import EventCard from "@/components/EventCard"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen px-5 py-6 space-y-4">
        <h1 className="text-xl font-semibold">Upcoming events</h1>

        <EventCard
          slug="arijit-singh-auckland"
          title="Arijit Singh Live in Auckland"
          location="Auckland"
          date="12 Feb 2026"
          tickets={[
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
          ]}
        />
      </div>
    </main>
  )
}

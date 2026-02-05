import Link from "next/link"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen px-5 py-6">
        <h1 className="text-xl font-semibold mb-4">All events</h1>

        <ul className="space-y-4">
          <li>
            <Link
              href="/events/arijit-singh-auckland"
              className="block rounded-lg border p-4 hover:bg-gray-50"
            >
              <h2 className="font-medium">Arijit Singh Live in Auckland</h2>
              <p className="text-sm text-gray-600">12 Feb 2026 · Auckland</p>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

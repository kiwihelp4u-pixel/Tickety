import Link from "next/link"

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HEADER */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
         <Link href="/" className="flex items-center gap-3">
  <img
    src="/images/\tickety-logo.png"
    className="h-16 w-auto"
    alt="Tickety"
  />
</Link>


          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <Link href="/how-it-works">How it works</Link>
            <Link href="/benefits">Benefits</Link>
            <Link href="/faq">FAQ</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-700">
              Login / Sign Up
            </Link>
            <Link
              href="/organiser"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Create Event
            </Link>
            <Link
              href="/events"
              className="border px-4 py-2 rounded-lg text-sm font-medium"
            >
              Find Events
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0B132B] to-[#0F1C3F] text-white">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Ready to get started?
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Join hundreds of New Zealand event organisers who trust Tickety
            to handle their ticketing.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/organiser"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              Start selling tickets today
            </Link>

            <Link
              href="/events"
              className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg font-medium"
            >
              Explore events near you
            </Link>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            No credit card required to list your first event.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            How Tickety works
          </h2>

          <p className="text-center text-gray-600 mt-2">
            Whether you are organising an event or looking for tickets,
            we have made it straightforward.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-emerald-600 font-bold text-xl">01</div>
              <h3 className="mt-2 font-semibold text-lg">
                Create your event
              </h3>
              <p className="text-gray-600 mt-2">
                Add event details, dates, and ticket types in minutes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-emerald-600 font-bold text-xl">02</div>
              <h3 className="mt-2 font-semibold text-lg">
                Set your prices
              </h3>
              <p className="text-gray-600 mt-2">
                Choose your ticket prices. We handle secure payments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-emerald-600 font-bold text-xl">03</div>
              <h3 className="mt-2 font-semibold text-lg">
                Get paid
              </h3>
              <p className="text-gray-600 mt-2">
                Funds are deposited directly to your account after the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Why choose Tickety
          </h2>

          <p className="text-center text-gray-600 mt-2">
            Built with simplicity in mind. Everything you need, nothing you do not.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:bg-white">

              <h3 className="font-semibold">Easy event creation</h3>
              <p className="text-gray-600 mt-2">
                Create your event page in minutes using a simple form.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:bg-white">

              <h3 className="font-semibold">Simple ticket purchase</h3>
              <p className="text-gray-600 mt-2">
                Attendees can buy tickets in just a few clicks.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:bg-white">

              <h3 className="font-semibold">Transparent fees</h3>
              <p className="text-gray-600 mt-2">
                No hidden charges. You see exactly what you pay.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:bg-white">

              <h3 className="font-semibold">Mobile-friendly</h3>
              <p className="text-gray-600 mt-2">
                Works perfectly on any device.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:bg-white">

              <h3 className="font-semibold">Reliable checkout</h3>
              <p className="text-gray-600 mt-2">
                Secure, fast, and dependable payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Frequently asked questions
          </h2>

          <p className="text-center text-gray-600 mt-2">
            Quick answers to common questions.
          </p>

          <div className="mt-12 space-y-4">
            {[
              "Is Tickety free to list events?",
              "How do payments work?",
              "Are refunds allowed?",
              "Can I use this for community events?",
            ].map((q) => (
              <div
                key={q}
                className="bg-white border rounded-lg px-4 py-3"
              >
                {q}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <img
              src="/images/Tickety logo.png"
              alt="Tickety"
              className="h-6 w-auto"
            />
            <span>© 2026 Tickety</span>
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="mt-4 md:mt-0">
            Made in New Zealand
          </div>
        </div>
      </footer>
    </main>
  )
}

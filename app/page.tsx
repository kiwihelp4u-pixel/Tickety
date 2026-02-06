import Link from "next/link"

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0B132B] to-[#0F1C3F] text-white">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Ready to get started?
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Join hundreds of New Zealand event organisers who trust Tickety
            to handle their ticketing.
          </p>

          <div className="mt-8 flex justify-center gap-4">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            How Tickety works
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Whether you are organising an event or looking for tickets,
            we have made it straightforward.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-emerald-600 font-bold text-xl">01</div>
              <h3 className="mt-2 font-semibold text-lg">
                Create your event
              </h3>
              <p className="text-gray-600 mt-2">
                Add event details, dates, and ticket types in minutes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-emerald-600 font-bold text-xl">02</div>
              <h3 className="mt-2 font-semibold text-lg">
                Set your prices
              </h3>
              <p className="text-gray-600 mt-2">
                Choose your ticket prices. We handle secure payments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
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
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Why choose Tickety
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Built with simplicity in mind. Everything you need,
            nothing you do not.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold">Easy event creation</h3>
              <p className="text-gray-600 mt-2">
                Create your event page in minutes with a simple form.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold">Simple ticket purchase</h3>
              <p className="text-gray-600 mt-2">
                Buy tickets in just a few clicks. No account required.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold">Transparent fees</h3>
              <p className="text-gray-600 mt-2">
                No hidden charges. You see exactly what you pay.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold">Mobile-friendly</h3>
              <p className="text-gray-600 mt-2">
                Works perfectly on any device.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold">Reliable checkout</h3>
              <p className="text-gray-600 mt-2">
                Secure, fast, and dependable payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Frequently asked questions
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Quick answers to common questions.
          </p>

          <div className="mt-10 space-y-4">
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
      <footer className="py-8 text-center text-sm text-gray-500">
        © 2026 Tickety. All rights reserved. Made in New Zealand
        Powered by Webfitt.com
      </footer>
    </main>
  )
}

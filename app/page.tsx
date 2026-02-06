import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0B132B] to-[#0F1C3F] text-white">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Ready to get started?</h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Join hundreds of New Zealand event organisers who trust Tickety to handle their
            ticketing.
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

          <p className="mt-4 text-sm text-gray-400">No credit card required to list your first event.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* WHY CHOOSE */}
      <section id="benefits" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Why choose Tickety</h2>

          <p className="text-center text-gray-600 mt-2">
            Built with simplicity in mind. Everything you need, nothing you do not.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["Easy event creation", "Create your event page in minutes using a simple form."],
              ["Simple ticket purchase", "Attendees can buy tickets in just a few clicks."],
              ["Transparent fees", "No hidden charges. You see exactly what you pay."],
              ["Mobile-friendly", "Works perfectly on any device."],
              ["Reliable checkout", "Secure, fast, and dependable payments."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-gray-50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:bg-white"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="text-gray-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Frequently asked questions</h2>

          <p className="text-center text-gray-600 mt-2">Quick answers to common questions.</p>

          <div className="mt-12 space-y-4">
            {[
              "Is Tickety free to list events?",
              "How do payments work?",
              "Are refunds allowed?",
              "Can I use this for community events?",
            ].map((q) => (
              <div key={q} className="bg-white border rounded-lg px-4 py-3">
                {q}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

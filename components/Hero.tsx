export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h1 className="text-4xl font-semibold">
          Ready to get started?
        </h1>

        <p className="mt-4 text-gray-300">
          Join New Zealand event organisers who trust Tickety
          to handle their ticketing.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/create"
            className="rounded-md bg-emerald-600 px-6 py-3 text-sm text-white"
          >
            Start selling tickets today
          </a>

          <a
            href="/events"
            className="rounded-md border border-gray-500 px-6 py-3 text-sm"
          >
            Explore events near you
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          No credit card required to list your first event.
        </p>
      </div>
    </section>
  );
}

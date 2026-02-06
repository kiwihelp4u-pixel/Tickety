export default function WhyTickety() {
  return (
    <section id="benefits" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">Why choose Tickety</h2>
        <p className="mt-2 text-gray-600">
          Built with simplicity in mind. Everything you need,
          nothing you do not.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-6">
            <h3 className="font-medium">Easy event creation</h3>
            <p className="mt-2 text-sm text-gray-600">
              Create your event page in minutes.
            </p>
          </div>

          <div className="rounded-lg border bg-white p-6">
            <h3 className="font-medium">Simple ticket purchase</h3>
            <p className="mt-2 text-sm text-gray-600">
              Attendees can buy tickets in just a few clicks.
            </p>
          </div>

          <div className="rounded-lg border bg-white p-6">
            <h3 className="font-medium">Transparent fees</h3>
            <p className="mt-2 text-sm text-gray-600">
              No hidden charges. You see exactly what you earn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">How Tickety works</h2>
        <p className="mt-2 text-gray-600">
          Whether you are organising an event or looking for tickets,
          we have made it straightforward.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <span className="text-emerald-600 font-semibold">01</span>
            <h3 className="mt-2 font-medium">Create your event</h3>
            <p className="mt-2 text-sm text-gray-600">
              Add event details, dates, and ticket types in minutes.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <span className="text-emerald-600 font-semibold">02</span>
            <h3 className="mt-2 font-medium">Set your prices</h3>
            <p className="mt-2 text-sm text-gray-600">
              Choose your ticket prices. We handle secure payments.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <span className="text-emerald-600 font-semibold">03</span>
            <h3 className="mt-2 font-medium">Get paid</h3>
            <p className="mt-2 text-sm text-gray-600">
              Funds are deposited directly to your account after the event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

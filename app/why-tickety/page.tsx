export default function WhyTicketyPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen px-5 py-6 space-y-5">
        <h1 className="text-xl font-semibold">Why Tickety</h1>

        <ul className="space-y-4 text-sm text-gray-700 list-disc list-inside">
          <li>
            Built for mobile first. No clutter, no confusion.
          </li>
          <li>
            Transparent pricing. No surprise fees.
          </li>
          <li>
            Fast checkout powered by Stripe.
          </li>
          <li>
            Designed for both organisers and attendees.
          </li>
          <li>
            No refunds or cancellations. Clear rules upfront.
          </li>
        </ul>
      </div>
    </main>
  )
}

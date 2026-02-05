export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen px-5 py-6 space-y-5">
        <h1 className="text-xl font-semibold">How it works</h1>

        <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
          <li>
            Discover events listed by verified organisers.
          </li>
          <li>
            Select your tickets and quantities.
          </li>
          <li>
            Pay securely using Stripe.
          </li>
          <li>
            Receive your tickets instantly by email.
          </li>
        </ol>
      </div>
    </main>
  )
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen px-5 py-6 space-y-4">
        <h1 className="text-xl font-semibold">FAQ</h1>

        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <strong>Are tickets refundable?</strong><br />
            No. All ticket sales are final.
          </p>

          <p>
            <strong>Can I change attendee details?</strong><br />
            Yes, until the event starts.
          </p>

          <p>
            <strong>How do I receive my tickets?</strong><br />
            Tickets are emailed after successful payment.
          </p>
        </div>
      </div>
    </main>
  )
}

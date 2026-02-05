import Link from "next/link"

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen px-5 py-10 space-y-4">
        <h1 className="text-xl font-semibold">Payment successful</h1>
        <p className="text-sm text-gray-600">
          This is a placeholder. Next we will generate tickets and send email.
        </p>
        <Link className="text-sm underline" href="/">
          Back to home
        </Link>
      </div>
    </main>
  )
}

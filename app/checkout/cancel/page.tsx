import Link from "next/link"

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen px-5 py-10 space-y-4">
        <h1 className="text-xl font-semibold">Checkout cancelled</h1>
        <p className="text-sm text-gray-600">
          No payment was taken. You can try again anytime.
        </p>
        <Link className="text-sm underline" href="/checkout">
          Back to checkout
        </Link>
      </div>
    </main>
  )
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isCheckout = pathname.startsWith("/checkout");

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/tickety-logo.png"
            alt="Tickety"
            className="h-12 w-auto"
          />
        </Link>

        {!isCheckout && (
          <>
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              <Link href="/#how-it-works">How it works</Link>
              <Link href="/#benefits">Benefits</Link>
              <Link href="/#faq">FAQ</Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link href="/login" className="text-sm text-gray-700">
                Login / Sign Up
              </Link>

              <Link
                href="/organiser"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Create Event
              </Link>

              <Link
                href="/events"
                className="border px-4 py-2 rounded-lg text-sm font-medium"
              >
                Find Events
              </Link>
            </div>
          </>
        )}

        {isCheckout && (
          <Link
            href="/events"
            className="text-sm text-emerald-600 font-medium"
          >
            Find Events
          </Link>
        )}
      </div>
    </header>
  );
}

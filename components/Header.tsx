import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/tickety-logo.png"
            alt="Tickety"
            width={140}
            height={40}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <Link href="#how">How it works</Link>
          <Link href="#benefits">Benefits</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm">
            Login / Sign Up
          </Link>
          <Link
            href="/create"
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm text-white"
          >
            Create Event
          </Link>
          <Link
            href="/events"
            className="rounded-md border px-4 py-2 text-sm"
          >
            Find Events
          </Link>
        </div>
      </div>
    </header>
  );
}

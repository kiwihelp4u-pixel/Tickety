"use client";

import { useState } from "react";

export default function HowItWorks() {
  const [mode, setMode] = useState<"organisers" | "attendees">("organisers");

  return (
    <section id="how" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">How Tickety works</h2>
        <p className="mt-2 text-gray-600">
          Whether you are organising an event or looking for tickets,
          we have made it straightforward.
        </p>

        {/* TOGGLE */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setMode("organisers")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                mode === "organisers"
                  ? "bg-emerald-600 text-white"
                  : "text-gray-600"
              }`}
            >
              For Organisers
            </button>

            <button
              onClick={() => setMode("attendees")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                mode === "attendees"
                  ? "bg-emerald-600 text-white"
                  : "text-gray-600"
              }`}
            >
              For Attendees
            </button>
          </div>
        </div>

        {/* CARDS */}
        {mode === "organisers" && (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-md transition">
              <span className="text-emerald-600 font-semibold">01</span>
              <h3 className="mt-2 font-medium">Create your event</h3>
              <p className="mt-2 text-sm text-gray-600">
                Add event details, dates, and ticket types in minutes.
              </p>
            </div>

            <div className="rounded-lg border p-6 hover:shadow-md transition">
              <span className="text-emerald-600 font-semibold">02</span>
              <h3 className="mt-2 font-medium">Set your prices</h3>
              <p className="mt-2 text-sm text-gray-600">
                Choose your ticket prices. We handle secure payments.
              </p>
            </div>

            <div className="rounded-lg border p-6 hover:shadow-md transition">
              <span className="text-emerald-600 font-semibold">03</span>
              <h3 className="mt-2 font-medium">Get paid</h3>
              <p className="mt-2 text-sm text-gray-600">
                Funds are deposited directly to your account after the event.
              </p>
            </div>
          </div>
        )}

        {mode === "attendees" && (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-md transition">
              <span className="text-emerald-600 font-semibold">01</span>
              <h3 className="mt-2 font-medium">Discover events</h3>
              <p className="mt-2 text-sm text-gray-600">
                Find events happening near you.
              </p>
            </div>

            <div className="rounded-lg border p-6 hover:shadow-md transition">
              <span className="text-emerald-600 font-semibold">02</span>
              <h3 className="mt-2 font-medium">Buy tickets</h3>
              <p className="mt-2 text-sm text-gray-600">
                Purchase tickets in just a few clicks.
              </p>
            </div>

            <div className="rounded-lg border p-6 hover:shadow-md transition">
              <span className="text-emerald-600 font-semibold">03</span>
              <h3 className="mt-2 font-medium">Attend</h3>
              <p className="mt-2 text-sm text-gray-600">
                Show your ticket and enjoy the event.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

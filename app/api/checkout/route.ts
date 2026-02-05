import Stripe from "stripe"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

type IncomingItem = {
  id: string
  name: string
  description?: string
  unitAmount: number
  quantity: number
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "")

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY in .env.local" },
        { status: 500 }
      )
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

    const body = (await req.json()) as {
      eventTitle?: string
      eventDate?: string
      items?: IncomingItem[]
    }

    const items = Array.isArray(body.items) ? body.items : []

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
      items
        .filter((i) => i.quantity > 0)
        .map((i) => ({
          quantity: i.quantity,
          price_data: {
            currency: "nzd",
            unit_amount: Math.round(i.unitAmount * 100),
            product_data: {
              name: i.name,
              description: i.description,
            },
          },
        }))

    if (line_items.length === 0) {
      return NextResponse.json(
        { error: "No ticket quantities selected" },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${baseUrl}/checkout/success`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      metadata: {
        eventTitle: body.eventTitle || "",
        eventDate: body.eventDate || "",
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Stripe checkout failed" },
      { status: 500 }
    )
  }
}

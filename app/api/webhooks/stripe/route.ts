import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return new NextResponse("Missing stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const body = await req.text();

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed", err.message);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // ONLY handle successful checkout
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Use metadata ONLY (webhooks do not include line_items by default)
    const priceId = session.metadata?.price_id;
    const quantity = Number(session.metadata?.quantity || 1);

    if (!priceId) {
      console.error("No price_id found in session metadata");
      return NextResponse.json({ received: true });
    }

    const { error } = await supabase
      .from("events")
      .update({
        tickets_sold: supabase.rpc("increment", {
          x: quantity,
        }),
      })
      .eq("stripe_price_id", priceId);

    if (error) {
      console.error("DB update failed", error);
    } else {
      console.log("Tickets updated for price:", priceId);
    }
  }

  return NextResponse.json({ received: true });
}

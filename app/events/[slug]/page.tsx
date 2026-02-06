import EventClient from "../EventClient";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <EventClient slug={slug} />;
}

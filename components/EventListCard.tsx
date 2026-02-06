import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  date: string;
  location: string;
  priceLabel: string;
};

export default function EventListCard({
  slug,
  title,
  date,
  location,
  priceLabel,
}: Props) {
  return (
    <Link href={`/events/${slug}`}>
      <div className="cursor-pointer rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <h3 className="font-semibold text-lg">{title}</h3>

        <p className="mt-1 text-sm text-gray-600">
          {date} · {location}
        </p>

        <p className="mt-4 font-semibold text-emerald-600">
          {priceLabel}
        </p>
      </div>
    </Link>
  );
}

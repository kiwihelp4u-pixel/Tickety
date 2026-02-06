"use client";

type Props = {
  price: number;
  quantity: number;
  onChange: (qty: number) => void;
};

export default function TicketSelector({ price, quantity, onChange }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">General Admission</p>
        <p className="text-sm text-gray-500">Standard entry</p>
      </div>

      {quantity === 0 ? (
        <button
          onClick={() => onChange(1)}
          className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white"
        >
          Add · ${price}
        </button>
      ) : (
        <div className="flex items-center gap-3">
          <button
            onClick={() => onChange(quantity - 1)}
            className="h-9 w-9 rounded-full border"
          >
            −
          </button>

          <span className="w-6 text-center">{quantity}</span>

          <button
            onClick={() => onChange(quantity + 1)}
            className="h-9 w-9 rounded-full border"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

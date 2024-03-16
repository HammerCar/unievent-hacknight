import clsx from "clsx";
import { type ReactNode } from "react";

interface ChipProps {
  text: ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export default function Chip(props: ChipProps) {
  const { text, selected, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={clsx(
        "border-secondarysecondary text-secondarysecondary rounded-full border px-3 py-1",
        selected && "bg-primary text-white",
      )}
    >
      {text}
    </button>
  );
}

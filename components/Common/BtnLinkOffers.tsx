import Link from "next/link";

export default function BtnLinkOffers() {
  return (
    <Link href="/offers">
      <button
        className={`h-[58px] w-[314px] rounded-2xl bg-yellow text-2xl font-extrabold text-black hover:bg-hoverYellow dark:text-white `}
      >
        إحجز الأن
      </button>
    </Link>
  );
}

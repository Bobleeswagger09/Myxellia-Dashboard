"use client";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IconType } from "react-icons";

type Stat = {
  label: string;
  value: string | number;
};

interface OverviewSectionProps {
  title: string;
  icon: IconType;
  stats: Stat[];
  linkHref: string;
  linkText?: string;
  iconColor?: string;
}

export default function OverviewSection({
  title,
  icon: Icon,
  stats,
  linkHref,
  linkText = "View all",
  iconColor = "#4545FE",
}: OverviewSectionProps) {
  return (
    <section className="flex-1 flex flex-col border border-[#E4E4E4] rounded-2xl">
      <div className="flex justify-between items-center px-4 py-3 bg-[#F7F7F7] border-b border-[#E4E4E4]">
        <div className="flex items-center gap-2">
          <Icon size={22} className="shrink-0" style={{ color: iconColor }} />
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
        <Link
          href={linkHref}
          className="flex items-center gap-1 text-sm font-semibold text-[#4545FE] hover:underline"
        >
          {linkText} <IoIosArrowForward />
        </Link>
      </div>

      <div className="grid grid-cols-3 ">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center py-5"
          >
            <p className="text-sm text-[#525252] font-semibold">{item.label}</p>
            <p className="text-2xl font-bold text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

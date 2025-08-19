import { GiHouse } from "react-icons/gi";
import OverviewSection from "./OverviewSection";
import { FaRegUser } from "react-icons/fa";

export default function ListingsOverview() {
  return (
    <div className="flex  lg:flex-col gap-5 lg:w-[30%]">
      <OverviewSection
        title="Listings Overview"
        icon={GiHouse}
        stats={[
          { label: "Total", value: "1.8k" },
          { label: "Active", value: "80" },
          { label: "Archived", value: "1k" },
        ]}
        linkHref="/listings"
      />
      <OverviewSection
        title="Users Overview"
        icon={FaRegUser}
        stats={[
          { label: "Total", value: "20.7k" },
          { label: "Riders", value: "8.5k" },
          { label: "Subscribers", value: "7.5k" },
        ]}
        linkHref="/users"
      />
    </div>
  );
}

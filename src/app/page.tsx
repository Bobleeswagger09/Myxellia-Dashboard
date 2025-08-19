"use client";

import ListingsOverview from "@/component/ListingsOverview";
import SalesOverview from "@/component/SalesOverview";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const user = {
  name: "Ahmed",
};

export default function DashboardPage() {
  return (
    <main className="h-full p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Welcome, {user.name}</h1>
      </header>

      <section className="flex flex-col xl:flex-row w-full gap-4">
        <SalesOverview />
        <ListingsOverview />
      </section>
      <section className="h-76 grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card className="relative rounded-2xl overflow-hidden ">
          <Image
            src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
            alt="Most Clicked"
            fill
            className="object-cover"
          />

          <CardContent className="absolute bottom-0 bg-black/60 text-white p-3 w-full">
            <p className="text-xs">MOST CLICKED</p>
            <h4 className="font-semibold">Urban Prime Plaza Premiere</h4>
          </CardContent>
        </Card>
        <Card className="relative rounded-2xl overflow-hidden ">
          <Image
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
            alt="Most Watched"
            fill
            className="object-cover"
          />
          <CardContent className="absolute bottom-0 bg-black/60 text-white p-3 w-full">
            <p className="text-xs">MOST WATCHLISTED</p>
            <h4 className="font-semibold">Urban Prime Plaza Premiere</h4>
          </CardContent>
        </Card>
        <Card className="relative rounded-2xl overflow-hidden ">
          <Image
            src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"
            alt="Hottest Listing"
            fill
            className="object-cover"
          />
          <CardContent className="absolute bottom-0 bg-black/60 text-white p-3 w-full">
            <p className="text-xs">HOTTEST LISTING</p>
            <h4 className="font-semibold">Urban Prime Plaza Premiere</h4>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

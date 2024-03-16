import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { LuMoreHorizontal, LuSearch } from "react-icons/lu";
import Chip from "~/components/Chip";
import NavBar from "~/components/NavBar";

import sweetMeet from "~/assets/sweet-meet.jpg";

export default function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [organizers, setOrganizers] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  const toggleOrganizer = (organizer: string) => {
    if (organizers.includes(organizer)) {
      setOrganizers(organizers.filter((o) => o !== organizer));
    } else {
      setOrganizers([...organizers, organizer]);
    }
  };

  return (
    <>
      <Head>
        <title>UniEvent</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-svh">
        <NavBar route={0} />

        <div className="flex flex-col gap-4 px-4 py-8">
          <div className="border-secondarysecondary flex w-full items-center gap-2 overflow-hidden rounded-full border-2 px-3">
            <LuSearch className="text-secondarysecondary" />
            <input
              type="text"
              className="w-full py-1 focus:outline-none"
              placeholder="Search for events"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Categories</h2>
            <div className="flex gap-2">
              <Chip
                text="Sitsit"
                selected={categories.includes("Sitsit")}
                onClick={() => toggleCategory("Sitsit")}
              />
              <Chip
                text="Sports"
                selected={categories.includes("Sports")}
                onClick={() => toggleCategory("Sports")}
              />
              <Chip
                text="Free food"
                selected={categories.includes("Free food")}
                onClick={() => toggleCategory("Free food")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Organizers</h2>
            <div className="flex flex-wrap gap-2">
              <Chip
                text="TiTe"
                selected={organizers.includes("TiTe")}
                onClick={() => toggleOrganizer("TiTe")}
              />
              <Chip
                text="Boomi"
                selected={organizers.includes("Boomi")}
                onClick={() => toggleOrganizer("Boomi")}
              />
              <Chip
                text="Luuppi"
                selected={organizers.includes("Luuppi")}
                onClick={() => toggleOrganizer("Luuppi")}
              />
              <Chip
                text="Indecs"
                selected={organizers.includes("Indecs")}
                onClick={() => toggleOrganizer("Indecs")}
              />
              <Chip
                text="Kasvo Ry"
                selected={organizers.includes("Kasvo Ry")}
                onClick={() => toggleOrganizer("Kasvo Ry")}
              />
              <Chip
                text="Hiki-Hockey"
                selected={organizers.includes("Hiki-Hockey")}
                onClick={() => toggleOrganizer("Hiki-Hockey")}
              />
              <Chip
                text={<LuMoreHorizontal />}
                selected={organizers.includes("More")}
                onClick={() => toggleOrganizer("More")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Results</h2>
            <div className="flex flex-col gap-1">
              <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-xl text-white">
                <Image
                  src={sweetMeet}
                  className="absolute z-10 h-full w-full object-cover brightness-50"
                  alt={""}
                />
                <div className="z-10 p-2">
                  <div className="flex w-full justify-between">
                    <p className="font-bold">
                      Thursday, March 21
                      <br />
                      12.00
                    </p>
                    <p>Indecs</p>
                  </div>

                  <div className="h-10"></div>

                  <h3 className="font-bold">Sweet meet</h3>
                  <p>Monthly meet up with free pastries!</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-xl text-white">
                <Image
                  src={sweetMeet}
                  className="absolute z-10 h-full w-full object-cover brightness-50"
                  alt={""}
                />
                <div className="z-10 p-2">
                  <div className="flex w-full justify-between">
                    <p className="font-bold">
                      Thursday, March 21
                      <br />
                      12.00
                    </p>
                    <p>Indecs</p>
                  </div>

                  <div className="h-10"></div>

                  <h3 className="font-bold">Sweet meet</h3>
                  <p>Monthly meet up with free pastries!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
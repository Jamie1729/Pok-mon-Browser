import { Button }  from "@/components/shadcn/button"
import {Separator} from "@/components/shadcn/separator";

import {SearchBar} from "@/components/custom/SearchBar"
import {PetCard}   from "@/components/custom/PetCard"
import Link from "next/link"
import Browser from "@/components/custom/Browser";


export default async function Home() {
    return (
      <main className="font-sans p-8">
          <header className="h-1/5 content-center pt-[3%] pb-[3%]">
              <h1 className="text-6xl font-semibold text-center">Pokémon Browser</h1>
              <h3 className="text-2xl font-semibold text-gray-500 text-center">Search and find Pokémon</h3>
          </header>
          <Separator />
          <div className="inline-flex items-center content-center justify-between w-full pt-5">
              <b>Explore Pokémon</b>
              <div className="inline-flex items-center" id="search_bar">
                <SearchBar placeholder={"Find Pokémon"}></SearchBar>
              </div>
          </div>

          <Browser></Browser>

      </main>
  );
}



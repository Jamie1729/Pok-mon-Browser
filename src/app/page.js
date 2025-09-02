import { Button }  from "@/components/shadcn/button"
import {Separator} from "@/components/shadcn/separator";

import {SearchBar} from "@/components/custom/SearchBar"
import {PetCard}   from "@/components/custom/PetCard"
import Link from "next/link"
import Browser from "@/components/custom/Browser";


export default async function Home() {
    return (
      <main className="font-sans p-8">
          <div className="inline-flex items-center content-center justify-between w-full">
              <b>Explore Pokémon</b>
              <div className="inline-flex items-center" id="search_bar">
                <SearchBar placeholder={"Find Pokémon"}></SearchBar>
              </div>
          </div>

          <Browser></Browser>

      </main>
  );
}



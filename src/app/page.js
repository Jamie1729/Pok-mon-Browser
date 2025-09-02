import { Button }  from "@/components/shadcn/button"
import {Separator} from "@/components/shadcn/separator";

import {SearchBar} from "@/components/custom/SearchBar"
import {PetCard}   from "@/components/custom/PetCard"
import Image from "next/image";

import pikachu from "../../public/pikachu.png";


export default function Home() {
    return (
      <main className="font-sans p-8">
          <div className="inline-flex items-center content-center justify-between w-full">
              <b>Explore Pokémon</b>
              <div className="inline-flex items-center" id="search_bar">
                <SearchBar placeholder={"Find Pokémon"}></SearchBar>
              </div>
          </div>
          <div className="grid-rows-3 grid-cols-4 w-full h-full 0 p-4 justify-center" id="browser">
              <div className="flex items-center w-full h-full">
              </div>
          </div>

          <div className="inline-flex justify-center w-full p-5" id="nav_buttons">
            <Button className="mr-2" id="back_button"> &lt;- Back</Button> <Button className="ml-2" id="next_button">Next -&gt;</Button>
          </div>
      </main>
  );
}


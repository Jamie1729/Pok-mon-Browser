import { Button }  from "@/components/ui/button"
import { Input  }  from "@/components/ui/input"
import { Form   }  from "@/components/ui/form"
import {Separator} from "@/components/ui/separator";
import {Search}    from "@/components/ui/search"

export default function Home() {

    return (
      <main className="font-sans p-8">
          <div className="inline-flex items-center content-center justify-between w-full">
              <b>Explore Pokémon</b>
              <div className="inline-flex items-center" id="search_bar">
                <Search placeholder={"Find Pokémon"}></Search>
              </div>
          </div>
          <Separator/>
          <div className="grid-rows-3 grid-cols-4 w-screen p-5 justify-center" id="browser">
          </div>
          <Separator/>
          <div className="inline-flex justify-center w-full p-5" id="nav_buttons">
            <Button className="mr-2" id="back_button">Back</Button> <Button className="ml-2" id="next_button">Next</Button>
          </div>
      </main>
  );
}

function getPokemonData(){
    return fetch("https://pokeapi.co/api/v2/pokemon")
}
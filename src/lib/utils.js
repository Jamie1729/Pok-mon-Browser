import {clsx} from "clsx";
import {twMerge} from "tailwind-merge"
import {Badge} from "@/components/shadcn/badge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function padId(id, digits){
  let newId = ''
  for (let i = 0; i < digits; i++){newId += '0'}
  return (newId + id).slice(-digits)
}

export function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function cleanText(text){
  return text.replace("\f"," ").replace("POKéMON","Pokémon")
}

export const renderTypes = (types) => {
  return types.map((type) => {
    return <Badge className="mr-2" key={type.type.name}>{type.type.name}</Badge>
  })
}
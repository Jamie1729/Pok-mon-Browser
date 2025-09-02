import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

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
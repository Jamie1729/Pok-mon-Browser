'use client'
import "../globals.css"
import {useSearchParams} from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    return(
        <div>
            <header>
                <h1 className="text-1xl font-semibold content-center pl-10">Pokémon Browser</h1>
                <div className="w-full h-[110] bg-gray-200"></div>
            </header>
            <main id="details">
                <h1></h1>
            </main>
        </div>
    )

}
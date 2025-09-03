'use client'
import "../globals.css"
import {padId, capFirst, cleanText, calculateWeaknesses} from "@/lib/utils"
import { useEffect, useState } from "react";
import { useSearchParams }     from "next/navigation";
import Image                   from "next/image";
import { Skeleton }            from "@/components/shadcn/skeleton";
import { Card }                from "@/components/shadcn/card";
import { StatBar }             from "@/components/custom/StatBar";
import getMultipliers from "@/lib/getMultipliers";
import {Badge} from "@/components/shadcn/badge";

const all_types = ["bug","dark","dragon","electric","fire","flying","fairy","fighting","ghost","grass","ground","ice","normal","poison","psychic","rock","steel","water"]

export default function Page() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const [petData, setPetData] = useState(null)
    const [petText, setPetText] = useState(null)
    const [petAbilities, setPetAbilities] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const pet_res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
                const pet_json = await pet_res.json();
                setPetData(pet_json);

                const species_res = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + id);
                const species_json = await species_res.json();
                setPetText(cleanText(species_json['flavor_text_entries'][0]['flavor_text']));

            } catch (err) {
                console.error("Error fetching data:", err);
                setPetData(null);
                setPetData(null)
            } finally {
                setLoading(false);
            }
        };
        if (id !== null) fetchData();
    }, [id]);
    return (
        <div className="w-full">
            <header>
                <h1 className="text-1l font-semibold content-center pl-10 pt-4 pb-4">Pokémon Browser</h1>
                <div className="w-full h-[110] bg-[#d1d1d1]"></div>
            </header>
            {loading || !petData ? (<Skeleton></Skeleton>) :
                (<div className="w-full h-auto flex flex-col justify-center items-center pb-10">

                    <div className="flex justify-center w-full">
                        <Image src={petData['sprites']['front_default']} width={600} height={600}
                               className="flex-row bg-[#f4f4f5] rounded-full border-[#f6f6f6] border-3 size-40 mt-[-30]"
                               alt={"Image of " + petData['name']}/>
                    </div>

                    <div className={"flex justify-center content-center mt-1 "}>
                        <h1 className="text-2xl font-semibold pr-1">{capFirst(petData['name'])}</h1>
                        <p className="text-2xl text-[#71717a] font-semibold pl-1">#{padId(petData['id'], 4)}</p>
                    </div>

                    <div className="relative w-4/5 flex float-left items-center h-full rounded-xl bg-[#f5f4f4] pl-10 pt-5 pb-5 mt-5">
                        {/* White Circle with the red-ball image */}
                        <div
                            className="flex shrink-0 justify-center items-center bg-white rounded-full size-16 shadow-lg">
                            <Image src="/red-ball.png" width={223} height={226} alt="Red Pokéball"
                                   className="object-contain p-2"/>
                        </div>
                        <p className="pl-4 pr-4">{petText}</p>
                    </div>

                    <div className=" flex gap-4 mt-5 w-4/5 h-125 justify-center">
                        <Card id="biology" className="w-1/3 p-6">
                            <div className="inline-block">
                                <h1 className="text-1xl font-semibold pb-1">Height</h1>
                                <p>{petData['height']/10}m</p>
                            </div>
                            <div className="inline-block">
                                <h1 className="text-1xl font-semibold pb-1">Category</h1>
                                <p>{}</p>
                            </div>
                            <div className="inline-block">
                                <h1 className="text-1xl font-semibold pb-1">Weight</h1>
                                <p>{petData['weight']/10}kg</p>
                            </div>
                            <div className="inline-block">
                                <h1 className="text-1xl font-semibold pb-1">Gender</h1>
                                <p>{}</p>
                            </div>
                        </Card>
                        <div className="grid grid-rows-2 w-2/3">
                            <div className="flex gap-4 row-span-1 mb-2">
                                <Card id="types" className="w-1/2 p-6">
                                    <div id="types_top" className="block w-full">
                                        <h1 className="text-1xl font-semibold pb-1">Type(s)</h1>
                                        {renderTypes(petData['types'].map((type) => type['type']['name']))}
                                    </div>
                                    <div id="types_bot" className="block w-full">
                                        <h1 className="text-1xl font-semibold pb-1">Weaknesses</h1>
                                        {calcWeaknesses((petData['types'].map((type) => type['type']['name'])))}
                                    </div>
                                </Card>

                                <Card id="abilities" className="w-1/2 p-6">
                                    <h1 className="text-1xl font-semibold">Ability</h1>
                                    {renderAbilities(petData['abilities'])}
                                </Card>

                            </div>
                            <Card id="stats" className="flex w-full row-span-1 pt-6 mt-2">
                                <div className="h-full ">{renderStatBars(petData['stats'])}</div>
                            </Card>
                        </div>
                    </div>
                </div>)

            }
        </div>
    )
}
function renderStatBars(stats){
    return stats.map((stat) => {
        return <StatBar key={stat['stat']['name']} name={stat['stat']['name']} value={stat['base_stat']}></StatBar>
    })
}
function renderAbilities(abilities){
    return null
}
function calcWeaknesses(types){
    const multipliers = getMultipliers(types)
    console.log(multipliers)
    let weaknesses = []
    all_types.forEach((type) =>{
        const atk = multipliers['attack'][type]
        const def = multipliers['defense'][type]
        if (def !== null && def > 1){weaknesses.push(type)}
    })
    return renderTypes(weaknesses)
}
function renderTypes(types){
    return types.map((type) => {
        return <Badge className="mr-2 items-center" key={type}>{type}</Badge>
    })
}
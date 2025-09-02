'use client'
import { Card } from "@/components/shadcn/card"
import { Badge } from "@/components/shadcn/badge"
import { useEffect, useState } from "react";

import Image from "next/image"

export function PetCard({id}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res  = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error("Error fetching data:", err);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        if (id !== null) fetchData();
    }, [id]);

    return (
        <div className="w-1/4 h-full p-5">
            <Card id={"card-"+{id}}>
                <div className="bg-gray-100" id="img">
                    {loading || !data ? (<Image src="/loading.png" width={600} height={600} alt="Loading..." />) :
                                        (<Image src={data['sprites']['front_default']} width={600} height={600} alt={"Image of "+data['name']}/>)
                    }
                </div>
                <div className="pl-2 pr-2 pb-2">
                    <div id="details">
                        {loading || !data ? (
                            <>
                                <h1>Loading...</h1>
                                <p>#N/A</p>
                            </>) : (
                            <>
                                <h1>{data['name']}</h1>
                                <p>#{data['id']}</p>
                                <div id="types">{renderTypes(data['types'])}</div>
                            </>
                        )}
                    </div>
                </div>
            </Card>
        </div>

    )
}
const renderTypes = (types) => {
    return types.map((type) => {
        return <Badge className="ml-1 mr-1" key={type.type.name}>{type.type.name}</Badge>
    })
}
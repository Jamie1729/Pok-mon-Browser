'use client'
import {capFirst, renderTypes} from "@/lib/utils";
import {Card} from "@/components/shadcn/card"
import {useEffect, useState} from "react";

import Link from "next/link";
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
            <Link href={ {pathname: "/detail-page", query: {id: id}} }>
            <Card id={"card-"+{id}}>
                <div className="bg-gray-100" id="img">
                    {loading || !data ?
                            (<div className="flex justify-center items-center w-full h-64">
                                <span className="animate-spin w-10 h-10 border-4 border-t-transparent border-gray-600 rounded-full"></span>
                            </div>) :
                            (<Image src={data['sprites']['front_default']} width={600} height={600} alt={"Image of "+capFirst(data['name'])}/>)
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
                                <h1>{capFirst(data['name'])}</h1>
                                <p>#{data['id']}</p>
                                <div id="types">{renderTypes(data['types'])}</div>
                            </>
                        )}
                    </div>
                </div>
            </Card>
            </Link>
        </div>

    )
}


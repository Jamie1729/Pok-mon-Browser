import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/card"
import Image from "next/image"

export async function PetCard({id}) {
    const res =await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    const data = await res.json()

    const src = data['sprites']['front_default']
    const name = data['name']
    const tags = data['types']

    return (
        <div className="w-1/4 h-full p-5">
            <Card>
                <div className="bg-gray-200" id="img">
                    <Image src={src} width={600} height={600} alt={"Picture of " + name}></Image>
                </div>

                <div id="details">
                    <div id="id">
                        <h1>{name}</h1>
                        <p>#{id}</p>
                    </div>
                    <div id="tags">
                    </div>
                </div>
            </Card>
        </div>
    )
}
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
import { Badge } from "@/components/shadcn/badge"

export async function PetCard({id}) {
    const res =await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    const data = await res.json()

    const src = data['sprites']['front_default']
    const name = data['name']
    const types = data['types']

    return (
        <div className="w-1/4 h-full p-5">
            <Card id={"card-"+id}>
                <div className="bg-gray-100" id="img">
                    <Image src={src} width={600} height={600} alt={"Picture of " + name}></Image>
                </div>
                <div className="pl-2 pr-2 pb-2">
                    <div id="details">
                        <div id="id">
                            <h1>{name}</h1>
                            <p>#{id}</p>
                        </div>
                        <div id="types">
                            {renderTypes(types)}
                        </div>
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
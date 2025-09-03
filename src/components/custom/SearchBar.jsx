'use client'
import { Button } from "@/components/shadcn/button"
import { Input }  from "@/components/shadcn/input"
import { Form}    from "@/components/shadcn/form"

export function SearchBar({placeholder}) {
    return (
        <div className="inline-flex items-center content-center justify-between w-full pt-5 pl-5 pr-5">
            <b>Explore Pokémon</b>
            <div className="flex items-center gap-2">
            <Form className="flex items-center">
                <Input className="w-full" type="search" placeholder={placeholder} />
                <Button className=""type="submit">
                    Search
                </Button>
            </Form>
            </div>
        </div>

    )
}
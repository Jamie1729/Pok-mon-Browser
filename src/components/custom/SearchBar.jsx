import { Button } from "@/components/shadcn/button"
import { Input } from "@/components/shadcn/input"

export function SearchBar({placeholder}) {
    return (
        <div className="flex items-center gap-2">
            <Input type="search" placeholder={placeholder} />
            <Button type="submit">
                Search
            </Button>
        </div>
    )
}
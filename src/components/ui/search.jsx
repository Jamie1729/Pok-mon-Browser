import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export function Search({placeholder}) {
    return (
        <div className="flex items-center gap-2">
            <Input type="search" placeholder={placeholder} />
            <Button type="submit">
                Search
            </Button>
        </div>
    )
}
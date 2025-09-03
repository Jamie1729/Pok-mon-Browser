import {Progress} from "@/components/shadcn/progress"

export function StatBar({name, value}){
    return (
        <div className="flex-row p-3">
            <p className="text-semibold float-left">{name}</p>
            <Progress className="float-right" value={value} min={0} max={100} />
        </div>
    )
}
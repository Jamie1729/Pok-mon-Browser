import {Progress} from "@/components/shadcn/progress"

export function StatBar({name, value}){
    return (
        <div className="flex pl-4 pr-4 h-1/7 items-center justify-between">
            <h1 className="text-sm font-bold w-2/5">{name}</h1>
            <Progress className="w-3/5" value={value} min={0} max={100} />
        </div>
    )
}
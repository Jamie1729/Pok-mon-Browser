'use client'
import {PetCard} from "@/components/custom/PetCard";
import {useState} from "react";
import {Button} from "@/components/shadcn/button";

const MAX_PAGE = 85

export default function Browser() {
    const [pageNum, setPageNum] = useState(0)
    const nextPage = () => setPageNum((prev) => Math.min(prev+1,MAX_PAGE))
    const prevPage = () => setPageNum((prev) => Math.max(0,pageNum-1))
    return(
        <div className="grid-rows-3 grid-cols-4 w-full h-full 0 p-4 justify-center" id="browser">
            <div className="flex items-center w-full h-full" id="row-1">
                <PetCard id={pageNum*12+1}></PetCard>
                <PetCard id={pageNum*12+2}></PetCard>
                <PetCard id={pageNum*12+3}></PetCard>
                <PetCard id={pageNum*12+4}></PetCard>
            </div>
            <div className="flex items-center w-full h-full" id="row-2">
                <PetCard id={pageNum*12+5}></PetCard>
                <PetCard id={pageNum*12+6}></PetCard>
                <PetCard id={pageNum*12+7}></PetCard>
                <PetCard id={pageNum*12+8}></PetCard>
            </div>
            <div className="flex items-center w-full h-full" id="row-3">
                <PetCard id={pageNum*12+9}></PetCard>
                <PetCard id={pageNum*12+10}></PetCard>
                <PetCard id={pageNum*12+11}></PetCard>
                <PetCard id={pageNum*12+12}></PetCard>
            </div>

            <div className="inline-flex justify-center w-full p-5" id="nav_buttons">
                <Button className="mr-2" onClick={prevPage} id="back_button"> &lt;- Back</Button>
                <Button className="ml-2" onClick={nextPage} id="next_button"> Next -&gt;</Button>
            </div>
        </div>
    )
}
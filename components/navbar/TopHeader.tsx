'use client';

import Image from "next/image";
import { Button } from "../ui/button"; 
import { Input } from "../ui/input";
import { Mail } from "lucide-react";
import { Fragment } from "react";


const TopHeader = () => {
    return ( 
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        
        {/* left */}
            <div className=" flex items-center h-10 my-auto">
                <Image
                    alt="Logo"
                    className="hidden md:block cursor-pointer"
                    height="30"
                    width="30" 
                    src="/images/hlogo.png"
                    objectFit="contain" 
                    objectPosition="left"
                />
                <Button variant={"miss"} className=" w-full md:w-auto py-2 rounded-md cursor-pointer flex-row items-center text-xl font-exo font-semibold">
                    PERTANIAN.MY
                </Button>
            </div>

         {/* Middle    */}
            <div className=" flex my-auto w-full gap-1">
                <Input type="search" placeholder="Search" />
                <Button type="submit" className="hidden md:inline-flex">
                    Search
                </Button>
            </div>

        {/* right */}
            

        </header>
     );
}
 
export default TopHeader;


{/* <div className="flex items-center justify-end ">
                <Button variant={"outline"}>
                    <Mail className=" mr-2 h-4 w-4"/> Login With Email
                </Button>
            </div> */}
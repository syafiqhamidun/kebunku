'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const Logo = () => {
    const router = useRouter();

    return ( 
       <div className="flex items-center">
        <Image
           alt="Logo"
           className="hidden md:block cursor-pointer"
           height="100"
           width="100" 
           src="/images/logo.jpeg"
        />

        <Button
            variant={"miss"}
            className="
                    w-full
                    md:w-auto
                    py-2
                    rounded-md
                    cursor-pointer
                    flew-row
                    items-center
                    justify-between
                    text-2xl
                    font-exo
                "
        >
            PERTANIAN.MY
        </Button>
       </div> 
        
     );
}
 
export default Logo;
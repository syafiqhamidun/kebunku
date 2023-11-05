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
           width="80" 
           src="/images/hlogo.png"
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
                    text-xl
                    font-exo
                    font-semibold
                "
        >
            PERTANIAN.MY
        </Button>
       </div> 
        
     );
}
 
export default Logo;
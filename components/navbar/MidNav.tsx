'use client';
import { Button } from "../ui/button";

const MidNav = () => {
    return ( 
        <div className="flex gap-4">
            <Button
                variant={"miss"}
                className="
                    border-[1px]
                    w-full
                    md:w-auto
                    py-2
                    rounded-full
                    shadow-sm
                    hover:shadow-md
                    transition
                    cursor-pointer
                "
            >
                <div
                 className="
                 flex
                 flew-row
                 items-center
                 justify-between
                 "
                >
                    <div
                        className="
                            text-sm
                            font-semibold
                            px-6
                        "
                    >
                        About Us
                    </div>
                </div>
                    
            </Button>
            <Button
                variant={"miss"}
                className="
                    border-[1px]
                    w-full
                    md:w-auto
                    py-2
                    rounded-full
                    shadow-sm
                    hover:shadow-md
                    transition
                    cursor-pointer
                    gap-x-4
                "
            >
                <div
                 className="
                 flex
                 flew-row
                 items-center
                 justify-between
                 "
                >
                    <div
                        className="
                            text-sm
                            font-semibold
                            px-6
                        "
                    >
                        Contact Us
                    </div>
                </div>
                    
            </Button>
        </div>
     );
}
 
export default MidNav;
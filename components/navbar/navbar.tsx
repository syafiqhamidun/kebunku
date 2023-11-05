import Container from "../ Container";
import Logo from "./Logo";
import MidNav from "./MidNav";

const Navbar = () => {
    return ( 
        <div className="fixed w-full z-10 shadow-sm">
            <div 
                className="
                    py-4
                    border-b-[1px]
                    bg-white
                "
            >
                <Container>
                    <div 
                        className="
                            flex
                            flew-row
                            items-center
                            justify justify-between
                            gap-3
                            md:gap-0
                        "
                    >
                        <Logo/>
                        <MidNav/>
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default Navbar;
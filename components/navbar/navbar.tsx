import Container from "../ Container";
import Logo from "./Logo";
import MidNav from "./MidNav";
import LoginButton from "./Login";

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
                            items-center
                            gap-3
                            justify-between
                        "
                    >
                        <Logo/>
                        <MidNav/>
                        <LoginButton/>
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default Navbar;
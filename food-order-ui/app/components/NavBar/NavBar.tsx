'use client';

import Container from "../Container";
import Logo from "./Logo";


const NavBar = () => {
    return ( 
        <div
            className="
            relative 
            w-full 
            bg-sky-200	
            hover:bg-sky-300 
            z-10 
            shadow-sm"
        >
            <div 
                className="
                    py-4
                    border-b-[1px]
                "
            >
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                        "
                    >
                        <Logo/>
                        <div>Yeah</div>
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default NavBar;

'use client';

import Container from "../Container";
import Logo from "./Logo";


const NavBar = () => {
    return ( 
        <div
            className="
            relative 
            w-full 
            bg-sky-300	
            z-10 
            shadow-sm
            "
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
                            h-4
                            md:gap-0
                        "
                    >
                        <div
                            className="
                               px-4
                               py-3
                               text-emerald-950
                               hover:text-red-800
                               font-semibold
                               cursor-pointer
                            "
                        >Our Story</div>
                        <div
                            className="
                                px-4
                                py-3
                                text-emerald-950
                                hover:text-red-800
                                font-semibold
                                cursor-pointer
                            "
                        >Menu</div>
                        <Logo/>
                        <div
                            className="
                                px-4
                                py-3
                                text-emerald-950
                                hover:text-red-800
                                font-semibold
                                cursor-pointer
                            "
                        >Franchising</div>
                        <div
                            className="
                                px-4
                                py-3
                                text-emerald-950
                                hover:text-red-800
                                font-semibold
                                cursor-pointer
                            "
                        >Feedback</div>
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default NavBar;

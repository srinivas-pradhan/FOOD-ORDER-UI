'use client';

import Container from "../Container";
import Logo from "./Logo";


const NavBar = () => {
    return ( 
        <div
            className="
            relative 
            w-full 
            bg-slate-100	
            shadow-sm
            "
        >
            <div
                className="
                    py-auto
                    border-b-[1px]
                    bg-stone-400
                    hover:bg-stone-600
                    text-emerald-950
                    hover:text-zinc-50
                    text-center
                "
            >
                Location and Information Here
            </div>
            <div 
                className="
                    py-20
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

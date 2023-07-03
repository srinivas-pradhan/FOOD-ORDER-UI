'use client';

import Container from "../Container";
import Logo from "./Logo";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';



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
                    flex
                    items-center
                    py-2
                    border-b-[1px]
                    bg-orange-100
                "
            >
                <div className="
                    px-60 
                    cursor-pointer
                    text-emerald-950
                    hover:text-red-800
                    "
                >
                    Location Information Here
                </div>
                <div
                    className="
                        px-40 
                        flex
                        flex-grow
                        justify-end
                        gap-2
                    "
                >
                    <a className="text-emerald-950 hover:text-red-800"
                        href="https://www.facebook.com/">
                        <FaFacebookF size="1.5rem"/>
                    </a>
                    <a className="text-emerald-950 hover:text-red-800"
                        href="https://www.instagram.com/x">
                        <FaInstagram size="1.5rem"/>
                    </a>
                    <a className="text-emerald-950 hover:text-red-800"
                        href="https://www.tiktok.com">
                        <FaTiktok size="1.5rem"/>
                    </a>
                </div>
            </div>
            <div 
                className="
                    py-16
                    border-b-[1px]
                "
            >
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            sticky
                            items-center
                            justify-center
                            gap-3
                            h-4
                            space-x-6
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
                        <div
                            className="
                                px-4
                                py-3
                                text-emerald-950
                                hover:text-red-800
                                font-semibold
                                cursor-pointer
                            "
                        >Catering</div>
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

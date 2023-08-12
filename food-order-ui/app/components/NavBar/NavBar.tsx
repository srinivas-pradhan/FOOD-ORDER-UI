'use client';

import Container from "../Container";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import OrderButton from "./OrderButton";
import SocialIcons from "./SocialIcons";
import CallMe from "./CallMe";
import Cart from "./Cart";
import UserAuth from "./UserAuth";
import LocationSelect from './LocationSelect';
import UserMgmt from "./UserMgmt";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const NavBar = () => {
    const [menuOpen, setmenuOpen] = useState(false);

    const  handleNav = () => {
        setmenuOpen(!menuOpen)
    }

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
                    flex-row
                    items-center
                    py-2
                    border-b-[1px]
                    bg-orange-200
                "
            >
                <LocationSelect 
                    label="Location"
                    onClick={ ()=> {} }
                />
                <SocialIcons />
            </div>
            <div 
                className="
                    py-8
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
                            justify-between
                            gap-3
                            h-4
                            space-x-6
                            md:space-x-2
                            lg:gap-0
                            text-lg
                        "
                    >
                        <Logo 
                            height="100"
                            width="100"
                        />
                        <div className="hidden lg:flex">
                            <ul className="
                                hidden 
                                lg:flex
                                xl:text-lg
                                lg:text-md
                                md:text-sm
                                sm:text-lg
                                "
                                >
                                <MenuItem 
                                    onClick={() => {}}
                                    label="Menu"
                                />
                                <MenuItem 
                                    onClick={() => {}}
                                    label="Locations"
                                />
                                <MenuItem 
                                    onClick={() => {}}
                                    label="Franchising"
                                />
                                <MenuItem 
                                    onClick={() => {}}
                                    label="Feedback"
                                />
                                <div className="
                                    xl:text-lg
                                    lg:text-md
                                    md:text-sm
                                    sm:text-lg
                                "
                                >
                                    <OrderButton
                                        onClick={() => {}}
                                        label="Order Now"
                                    />
                                </div>
                                <Cart 
                                    onClick={() => {}}
                                />
                                <CallMe
                                    onClick={() => {}}
                                />
                                <div className="
                                    xl:text-lg
                                    lg:text-md
                                    md:text-sm
                                    sm:text-lg
                                "
                                >
                                    <UserAuth
                                        onClick={() => {}}
                                    />
                                    <UserMgmt
                                        onClick={() => {}}
                                    />
                                </div>
                            </ul>
                        </div>
                        <div onClick={handleNav}
                            className="
                                lg:hidden
                                cursor-pointer
                                gap-1
                                transition 
                                ease-in-out 
                                delay-15
                                hover:-translate-y-1 
                                hover:scale-110
                                duration-300
                                "   
                        >
                            <AiOutlineMenu size={35}/>
                        </div>
                    </div>
                </Container>
                <div className={
                        menuOpen
                        ? "fixed w-56 left-0 top-0 lg:hidden h-screen bg-slate-100 p-10 ease-in duration-500"
                        : "fixed w-56 left-[-100%] top-0 p-10 h-screen ease-in duration-500"
                    }
                    >
                    <div className="flex w-full items-center justify-end">
                        <div onClick={handleNav} className="
                            cursor-pointer
                            transition
                            gap-1
                            ease-in-out 
                            delay-15
                            hover:-translate-y-1 
                            hover:scale-110
                            duration-300
                            "
                            >
                            <AiOutlineClose size={35} />
                        </div>
                    </div>
                    <div className="lg:flex">
                        <ul className="lg:flex">
                            <MenuItem 
                                onClick={() => {}}
                                label="Menu"
                            />
                            <MenuItem 
                                onClick={() => {}}
                                label="Locations"
                            />
                            <MenuItem 
                                onClick={() => {}}
                                label="Franchising"
                            />
                            <MenuItem 
                                onClick={() => {}}
                                label="Feedback"
                            />
                            <OrderButton
                                onClick={() => {}}
                                label="Order Now"
                            />  
                            <Cart 
                                onClick={() => {}}
                            />
                            <CallMe
                                onClick={() => {}}
                            />
                            <UserAuth
                                onClick={() => {}}
                            />
                            <UserMgmt
                                onClick={() => {}}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;

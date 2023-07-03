'use client';

import Container from "../Container";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import SocialIcons from "./SocialIcons";
import LocationSelect from './LocationSelect';



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
                    flex-row
                    items-center
                    py-2
                    border-b-[1px]
                    bg-orange-100
                "
            >
                <LocationSelect 
                    label="Location Information Here"
                    onClick={ ()=> {} }
                />
                <SocialIcons />
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
                            justify-between
                            gap-3
                            h-4
                            space-x-6
                            md:gap-0
                        "
                    >
                        <Logo/>
                        <MenuItem 
                            onClick={() => {}}
                            label="Our Story"
                        />
                        <MenuItem 
                            onClick={() => {}}
                            label="Menu"
                        />
                        <MenuItem 
                            onClick={() => {}}
                            label="Catering"
                        />
                        <MenuItem 
                            onClick={() => {}}
                            label="Franchising"
                        />
                        <MenuItem 
                            onClick={() => {}}
                            label="Feedback"
                        />
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default NavBar;

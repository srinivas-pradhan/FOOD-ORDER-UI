'use client';

import SocialIcons from "../NavBar/SocialIcons";
import MenuItem from "../NavBar/MenuItem";
import OrderButton from "../NavBar/OrderButton";
import Logo from "../NavBar/Logo";
import CallMe from "../NavBar/CallMe";
import Cart from "../NavBar/Cart";

const Footer = () => {
    return (  
        <footer className="
            hidden 
            lg:flex
            p-6
            w-full 
            h-6
            bg-slate-100 
            border-t-2 
            border-white
            fixed 
            bottom-0 
            items-center
            justify-between
            text-black 
            text-xs
        "
        >
            <div className="
                flex 
                justify-left 
                items-left
                "
                >
                    <Logo 
                        height="50"
                        width="50"
                    />
                    <SocialIcons />
            </div>
            <div className="
                flex
                justify-center
                items-center
            "
            >
                Subscribe
            </div>
            <div className="
                flex
                justify-right
                items-right
            "
            >
                <Cart 
                    onClick={() => {}}
                />
                <CallMe
                    onClick={() => {}}
                />
                <MenuItem 
                    onClick={() => {}}
                    label="Menu"
                />
                <OrderButton
                    onClick={() => {}}
                    label="Order Now"
                />
            </div>
        </footer>
    );
}
 
export default Footer;

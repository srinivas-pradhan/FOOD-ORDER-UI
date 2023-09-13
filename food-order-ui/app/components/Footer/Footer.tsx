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
                        height="75"
                        width="75"
                    />
                    {/* <SocialIcons /> */}
            </div>
            <div className="
                flex
                justify-center
                items-center
            "
            >
                <form className="
                    m-2 
                    flex
                    space-x-4
                "
                >
                    <input className="
                        rounded-full
                        transition 
                        ease-in-out 
                        delay-15
                        hover:-translate-y-1 
                        hover:scale-110
                        duration-300
                        h-10 
                        px-4
                        m-1
                        md:m-2
                        border-solid
                        border-2
                      border-rose-950
                        text-emerald-950 
                        hover:text-red-800
                        font-semibold
                        cursor-pointer
                        " 
                        placeholder="your@mail.com"
                        />  
                        <button className="
                            px-8 
                            rounded-full
                            transition 
                            ease-in-out 
                            delay-15
                            hover:-translate-y-1 
                            hover:scale-110
                            duration-300
                            h-10 
                            px-4
                            m-1
                            md:m-2
                            border-solid
                            border-2
                        border-rose-950
                            text-emerald-950 
                            hover:text-red-800
                            font-semibold
                            cursor-pointer
                            "
                            >
                                Subscribe
                            </button>

                </form>
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
                {/* <CallMe
                    onClick={() => {}}
                /> */}
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

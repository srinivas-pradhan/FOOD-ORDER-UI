'use client';

import React, { Component } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

class SocialIcons extends Component {
    render() {
        return ( 
            <div
                className="
                    xl:px-40
                    lg:px-20
                    md:px-10
                    px-4
                    gap-8
                    flex
                    flex-grow
                    justify-end
                "    
            >
                <a className="
                    text-emerald-950 
                    hover:text-red-800
                    transition 
                    ease-in-out 
                    delay-15
                    hover:-translate-y-1 
                    hover:scale-110
                    duration-300
                    "
                    href="https://www.facebook.com/">
                    <FaFacebookF size="1rem"/>
                </a>
                <a className="
                    text-emerald-950 
                    hover:text-red-800
                    transition 
                    ease-in-out 
                    delay-15
                    hover:-translate-y-1 
                    hover:scale-110
                    duration-300
                    "
                        href="https://www.instagram.com/">
                    <FaInstagram size="1rem"/>
                </a>
                <a className="
                    text-emerald-950 
                    hover:text-red-800
                    transition 
                    ease-in-out 
                    delay-15
                    hover:-translate-y-1 
                    hover:scale-110
                    duration-300
                    "
                        href="https://www.tiktok.com">
                        <FaTiktok size="1rem"/>
                </a>
            </div>
    )}
}

export default SocialIcons

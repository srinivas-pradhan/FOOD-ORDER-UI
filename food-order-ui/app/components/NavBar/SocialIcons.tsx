'use client';

import React, { Component } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

class SocialIcons extends Component {
    render() {
        return ( 
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
                        href="https://www.instagram.com/">
                    <FaInstagram size="1.5rem"/>
                </a>
                <a className="text-emerald-950 hover:text-red-800"
                        href="https://www.tiktok.com">
                        <FaTiktok size="1.5rem"/>
                </a>
            </div>
    )}
}

export default SocialIcons

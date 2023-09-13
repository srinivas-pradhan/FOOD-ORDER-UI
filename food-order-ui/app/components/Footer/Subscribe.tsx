'use client';

import React from "react";


interface SubscribeProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
};

const Subscribe: React.FC<SubscribeProps> = (
    onClick,
    label
) => {
    return ( 
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
            <button onClick={onClick} className="
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
                {label}
            </button>

        </form>
     );
}
 
export default Subscribe;

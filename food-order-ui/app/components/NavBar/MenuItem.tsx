'use client';
import React from "react";


interface MenuItemProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
};


const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return ( 
        <div
            onClick={onClick}
            className="
                px-4
                py-3
                md:py-4
                transition 
                ease-in-out 
                delay-15
                hover:-translate-y-1 
                hover:scale-110
                duration-300
                text-emerald-950
                hover:text-red-800
                font-semibold
                xl:text-lg
                lg:text-md
                md:text-sm
                sm:text-xl
                cursor-pointer
            "
        >
            {label}
        </div>
     );
}
 
export default MenuItem;

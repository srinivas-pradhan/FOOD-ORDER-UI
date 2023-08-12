'use client';

import { FaPhone } from "react-icons/fa";

interface CallMeProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CallMe: React.FC<CallMeProps> = (
    onClick
) => {
    return ( 
        <button className="
        text-emerald-950 
        hover:text-red-800
        rounded-full
        h-10 
        px-2
        m-2
        transition 
        ease-in-out 
        delay-15
        hover:-translate-y-1 
        hover:scale-110
        duration-300
        cursor-pointer
        "
    >
        <FaPhone size={32}/>
    </button>
    );
}
 
export default CallMe;

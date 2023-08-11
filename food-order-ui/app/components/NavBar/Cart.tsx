'use client';
import { FaCartArrowDown } from "react-icons/fa";

interface CartProps {
    onClick: () => void;
}


const Cart: React.FC<CartProps> = (
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
        <FaCartArrowDown size={35}/>
    </button> 
    );
}
 
export default Cart;

'use client';

interface OrderButtonProps {
    onClick: () => void;
    label : string;
}

const OrderButton:React.FC<OrderButtonProps> = ({
    onClick,
    label
}) => {
    return ( 
        <button 
            className="
                rounded-full
                transition 
                ease-in-out 
                delay-15
                hover:-translate-y-1 
                hover:scale-110
                duration-300
                resize
                h-10 
                px-4
                m-2
                bg-rose-950
                text-neutral-200
                hover:text-neutral-50
                font-semibold
                text-md
                cursor-pointer
            "
        >
            {label}
        </button>
    );
}
 
export default OrderButton;

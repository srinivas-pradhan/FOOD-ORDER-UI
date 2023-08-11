'use client';

interface MenuItemProps {
    onClick: () => void;
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
                transition 
                ease-in-out 
                delay-15
                hover:-translate-y-1 
                hover:scale-110
                duration-300
                text-emerald-950
                hover:text-red-800
                font-semibold
                text-lg
                cursor-pointer
            "
        >
            {label}
        </div>
     );
}
 
export default MenuItem;

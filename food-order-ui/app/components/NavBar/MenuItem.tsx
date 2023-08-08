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
                px-6
                py-4
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

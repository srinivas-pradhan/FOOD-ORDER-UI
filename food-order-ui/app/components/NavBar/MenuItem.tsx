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
                text-emerald-950
                hover:text-red-800
                font-semibold
                cursor-pointer
            "
        >
            {label}
        </div>
     );
}
 
export default MenuItem;

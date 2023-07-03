'use client';
import { ImLocation } from 'react-icons/im';


interface LocationSelectProps {
    onClick: () => void;
    label : string;
}
const LocationSelect: React.FC<LocationSelectProps> = ({
    onClick,
    label
}) => {
    return ( 
        <div
            onClick={onClick}
            className="
                flex
                justify-center
                align-top
                xl:px-60
                lg:px-40
                md:px-20
                px-10
                cursor-pointer
                text-emerald-950
                hover:text-red-800
                transition
                gap-1
            "
        >
            <ImLocation size="1rem" /><span className="text-sm">{label}</span>
        </div>


     );
}
 
export default LocationSelect;

'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
    height: string;
    width: string;
};

const Logo:React.FC<LogoProps> = ({
    height,
    width
}) => {
    const Router = useRouter();
    return ( 
        <Image
            onClick={() => Router.push('/')}
            alt="Logo"
            className="
                md:block 
                cursor-pointer
                transition
                gap-1
                ease-in-out 
                delay-15
                hover:-translate-y-1 
                hover:scale-110
                duration-300
            "
            height={height}
            width={width}
            src="/images/figma.png"
        />
     );
}
 
export default Logo;

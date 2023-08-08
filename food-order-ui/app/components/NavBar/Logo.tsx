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
            className="md:block cursor-pointer"
            height={height}
            width={width}
            src="/images/figma.png"
        />
     );
}
 
export default Logo;

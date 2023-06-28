'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = () => {
    const Router = useRouter();
    return ( 
        <Image
            onClick={() => Router.push('/')}
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src="/images/figma_logo.png"
        />
     );
}
 
export default Logo;

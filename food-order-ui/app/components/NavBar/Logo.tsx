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
            height="200"
            width="200"
            src="/images/figma.png"
        />
     );
}
 
export default Logo;

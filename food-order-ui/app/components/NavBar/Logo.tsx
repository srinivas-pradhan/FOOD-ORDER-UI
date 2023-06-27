'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = () => {
    const Router = useRouter();
    return ( 
        <Image
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="30"
            width="25"
            src="/images/logo.png"
        />
     );
}
 
export default Logo;

'use client';

import Container from "../Container";


const NavBar = () => {
    return ( 
        <div
            className="
            fixed 
            w-full 
            bg-sky-200	
            hover:bg-sky-800 
            z-10 
            shadow-sm"
        >
            <div 
                className="
                    py-4
                    border-b-[1px]
                "
            >
                <Container>

                </Container>
            </div>
        </div>
     );
}
 
export default NavBar;

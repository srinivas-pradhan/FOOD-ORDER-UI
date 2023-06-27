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
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                        "
                    >
                        <div>Hello World</div>
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default NavBar;

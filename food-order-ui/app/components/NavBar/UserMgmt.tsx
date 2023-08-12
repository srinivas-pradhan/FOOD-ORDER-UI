'use client';

interface UserMgmtProps {
    onClick: () => void;
};

const UserMgmt: React.FC<UserMgmtProps> = (
    onClick,
) => {
    return (  
<button onClick={onClick} 
            className="
                text-emerald-950 
                hover:text-red-800
                rounded-full
                h-10 
                px-4
                m-1
                md:m-2
                focus:outline
                transition 
                ease-in-out 
                delay-15
                hover:-translate-y-1 
                hover:scale-110
                duration-300
                cursor-pointer
                items-center
                opacity-75
                space-x-2
                hover:border-solid
                hover:border-2
                hover:border-red-800
                hover:opacity-100
            "
        >
        <span className="
            underline
        "
        >
            Register
        </span>
    </button> 
    );
}
 
export default UserMgmt;

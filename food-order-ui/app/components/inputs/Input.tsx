'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    error: FieldErrors;
    
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type,
    disabled,
    register,
    required,
    error
}) => {
    return ( 
        <div className="w-full relative">
            <input  
                id={id}
                disabled={disabled}
                { ...register(id, { required })}
                type={type}
            />
        </div>
     );
}
 
export default Input;

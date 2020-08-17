import React, { FC, forwardRef, useEffect, useRef, useState } from 'react';
import { Props } from './Input.types';
import { Input as AntdInput } from 'antd';

// const Input = forwardRef<HTMLInputElement, Props>(({ autoFocus = false , onChange, …rest }, ref) => {
//     const localRef = useRef(null);
//     const [value, setValue] = useState('');

//     useEffect(() => {
//         localRef.current && localRef.current.focus();
//     }, []);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setValue(e.target.value);
//         onChange && onChange(e.target.value);
//     };

//     return <AntdInput {...rest} ref={autoFocus ? localRef : ref} onChange={handleChange} />;
// });

// export default Input;

import React, { FC, forwardRef, useEffect, useRef, useState } from 'react';
import {Props} from './Input.types';
import { Input as AntdInput } from 'antd';

// Type 'ForwardRefExoticComponent<Pick<Props, "onChange" | "size" | "prefix" | "type" | "accept" | "alt" | "autoComplete" | "autoFocus" | "capture" | "checked" | "crossOrigin" | "disabled" | "form" | ... 277 more ... | "allowClear"> & RefAttributes<...>>' is not assignable to type 'FC<Props>'.
//   Types of property 'propTypes' are incompatible.
//     Type 'WeakValidationMap<Pick<Props, "onChange" | "size" | "prefix" | "type" | "accept" | "alt" | "autoComplete" | "autoFocus" | "capture" | "checked" | "crossOrigin" | "disabled" | "form" | ... 277 more ... | "allowClear"> & RefAttributes<...>> | undefined' is not assignable to type 'WeakValidationMap<Props> | undefined'.
//       Type 'WeakValidationMap<Pick<Props, "onChange" | "size" | "prefix" | "type" | "accept" | "alt" | "autoComplete" | "autoFocus" | "capture" | "checked" | "crossOrigin" | "disabled" | "form" | ... 277 more ... | "allowClear"> & RefAttributes<...>>' is not assignable to type 'WeakValidationMap<Props>'.
//         Types of property 'ref' are incompatible.
//           Type 'Validator<RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null | undefined> | undefined' is not assignable to type 'Validator<RefObject<HTMLInputElement>> | undefined'.
//             Type 'Validator<RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null | undefined>' is not assignable to type 'Validator<RefObject<HTMLInputElement>>'.
//               Type 'RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null | undefined' is not assignable to type 'RefObject<HTMLInputElement>'.
//                 Type 'undefined' is not assignable to type 'RefObject<HTMLInputElement>'.ts(2322)

// const Input: FC<Props> =  forwardRef<HTMLInputElement,Props>( ( {ref, autoFocus = false , onChange, ...rest }) => {
//     const localRef = useRef(null);
//     const [value, setValue] = useState('');

//     useEffect(() => {
//         localRef.current && localRef.current.focus();
//     }, []);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setValue(e.target.value);
//         onChange && onChange(e.target.value);
//     };

//     return <AntdInput ref={autoFocus ? localRef : ref} onChange={handleChange} {...rest} />;
// });

export default Input;

// const Input = forwardRef(({ref, autoFocus = false , onChange, ...rest }) => {
//     const localRef = useRef(null);
//     const [value, setValue] = useState('');

//     useEffect(() => {
//         localRef.current && localRef.current.focus();
//     }, []);

//     const handleChange = e => {
//         setValue(e.target.value);
//         onChange && onChange(e.target.value);
//     };

//     return <AntdInput ref={autoFocus ? localRef : ref} onChange={handleChange} {...rest} />;
// });
// export default Input;

// onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
//     const newValue = e.target.value;
//  }
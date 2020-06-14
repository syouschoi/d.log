import React, { forwardRef, useRef } from 'react';
import { Input as AntdInput } from 'antd';

// const localRef = useRef(null);

const Input = forwardRef(({ref, autoFocus, ...rest }) => { 
    return <AntdInput ref={ref} {...rest} />;
});
export default Input;

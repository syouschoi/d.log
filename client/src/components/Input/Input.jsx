import React, { forwardRef } from 'react';
import { Input as AntdInput } from 'antd';

const Input = forwardRef(({ref, ...rest }) => { 
    return <AntdInput ref={ref} {...rest} />;
});
export default Input;

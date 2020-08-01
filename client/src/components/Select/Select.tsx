import React from 'react';
import { Props, OptionProps } from './Select.types';
import { Select as AntdSelect } from 'antd';
import { SelectValue } from 'antd/lib/select';

const Option: React.FC<OptionProps> = ({children, value, key, ...rest}) => {
  return <AntdSelect.Option key={key} value={typeof value === 'string' || typeof value === 'number' ? value : ''} {...rest}>{children}</AntdSelect.Option>
};

const Select: React.FC<Props> = ({ data, onChange, ...rest }) => {
  const handleChange = (value: SelectValue, option: any ) => {
    console.log(value);
    
    if (onChange) {
      onChange(value);
    }
  };

  return <AntdSelect {...rest} onChange={handleChange}>
    {data.length &&
      data.map((option) => (
        <Option key={String(option.value)} value={option.value}>
          {option.text}
        </Option>
      ))}
  </AntdSelect>
};

export default Select;
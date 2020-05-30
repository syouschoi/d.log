import React from 'react';
import PropTypes from 'prop-types';
import { Select as AntdSelect } from 'antd';

const { Option } = AntdSelect;

const Select = ({ data, ...rest }) => (
  <AntdSelect {...rest}>
    {data.map((option) => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </AntdSelect>
);

Select.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string.isRequried,
    }),
  ),
};
export default Select;

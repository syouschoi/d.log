import React from 'react';
import PropTypes from 'prop-types';
import { Select as AntdSelect } from 'antd';

const { Option } = AntdSelect;

const Select = ({ optionData, ...props }) => (
  <AntdSelect {...props}>
    {optionData.map((option) => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </AntdSelect>
);

Select.propTypes = {
  // optionData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  // optionData: PropTypes.arrayOf(PropTypes.object).isRequired,
  optionData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string.isRequried,
    }),
  ).isRequired,
};
export default Select;

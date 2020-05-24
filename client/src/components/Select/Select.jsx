import React from 'react';
import PropTypes from 'prop-types';
import { Select as AntdSelect } from 'antd';

const { Option } = AntdSelect;

const Select = ({ optionData, ...rest }) => (
  <AntdSelect>
    {optionData.map((option) => (
      <Option key={option.key}>{option.text}</Option>
    ))}
  </AntdSelect>
);

Select.propTypes = {
  optionData: PropTypes.array.isRequired,
};

export default Select;

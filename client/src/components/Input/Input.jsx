import React from 'react';
import PropTypes from 'prop-types';
import { Input as AntdInput } from 'antd';

const Input = ({ ...props }) => <AntdInput {...props} />;

// const Select = ({ optionData, ...props }) => (
//   <AntdSelect {...props}>
//     {optionData.map((option) => (
//       <Option key={option.value} value={option.value}>
//         {option.text}
//       </Option>
//     ))}
//   </AntdSelect>
// );

// Select.propTypes = {
//   optionData: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.string,
//       text: PropTypes.string.isRequried,
//     }),
//   ).isRequired,
// };
export default Input;

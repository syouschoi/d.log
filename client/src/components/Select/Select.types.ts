import { SelectProps as AntSelectProps, SelectValue } from 'antd/lib/select';
import { OptionProps as AntOptionProps } from 'rc-select/lib/Option';
import { ReactNode } from 'react';

export type SelectData = {
  value?: SelectValue;
  text: string;
};

export type OptionProps = Omit<AntOptionProps, 'value'> & {
  value?: SelectValue;
};

export type CustomProps = {
  data: SelectData[];
  onChange: (value: SelectValue) => void;
};

export type SelectProps = Omit<AntSelectProps<SelectValue>, 'onChange'>;

export type Props = SelectProps & CustomProps;
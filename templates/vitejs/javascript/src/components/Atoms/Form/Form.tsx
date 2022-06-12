import type { FormProps as RcFormProps } from 'rc-field-form';
import FormItem from './FormItem';
import { StyleForm } from './style';

// export interface FormProps extends RcFormProps {}

const Form = (props: RcFormProps) => {
  return <StyleForm {...props} />;
};

Form.Item = FormItem;

export default Form;

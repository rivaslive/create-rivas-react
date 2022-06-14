import FormItem from './FormItem';
import { StyleForm } from './style';

// export interface FormProps extends RcFormProps {}
const Form = ({ name, form, ...props }) => {
  return <StyleForm name={name} form={form} {...props} />;
};

Form.Item = FormItem;

export default Form;

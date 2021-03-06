import { Field } from 'rc-field-form';
import { cloneElement, useMemo } from 'react';

import Text from 'components/Atoms/Text';
import Input from 'components/Atoms/Input';
import { StyleFormItem } from './style';

const FormItem = ({
  children,
  label,
  rules = [],
  isRequired = false,
  ...props
}) => {
  const resolveRules = useMemo(() => {
    return [{ required: isRequired }, ...rules];
  }, [rules, isRequired]);

  // @ts-ignore
  const isInput = useMemo(() => children?.type === Input, [children]);

  return (
    <Field rules={resolveRules} {...props}>
      {(control, meta) => {
        return (
          <StyleFormItem>
            {label && (
              <Text fontSize="12px" fontWeight="500" htmlTag="span">
                {isRequired && (
                  <Text
                    color="$error"
                    fontSize="12px"
                    fontWeight="500"
                    htmlTag="span"
                  >
                    *{' '}
                  </Text>
                )}
                {label}
              </Text>
            )}
            {cloneElement(
              children,
              isInput
                ? {
                    withErrors: meta.errors.length > 0,
                    ...control,
                  }
                : control,
            )}
            {meta.errors.map((error, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Text htmlTag="span" color="error" key={`rc-${index}`}>
                {error}
              </Text>
            ))}
          </StyleFormItem>
        );
      }}
    </Field>
  );
};

export default FormItem;

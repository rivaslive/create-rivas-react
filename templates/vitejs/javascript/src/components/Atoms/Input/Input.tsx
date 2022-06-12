import { ColorType, CSS } from 'styles/stitches.config';

import { InputBaseProps } from './BaseType';
import { StyleInput, StyleLabel, StyleWrapper } from './style';

export interface InputProps extends InputBaseProps {
  isRequired?: boolean;
  labelColor?: ColorType;
  bgColor?: ColorType;
  borderColor?: ColorType;
  withErrors?: boolean;
  css?: CSS;
}

const Input = ({
  isRequired,
  id,
  style,
  className,
  withErrors,
  css = {},
  labelColor = '$text',
  bgColor = '$white',
  borderColor = '$borderColor',
  ...restInputProps
}: InputProps) => {
  return (
    <StyleWrapper
      id={id}
      style={style}
      className={className}
      css={{
        color: labelColor,
        backgroundColor: bgColor,
        borderColor: withErrors ? '$error' : borderColor,
        ...css,
      }}
    >
      <StyleLabel>
        <StyleInput
          // override props
          {...restInputProps}
        />
      </StyleLabel>
    </StyleWrapper>
  );
};

export default Input;

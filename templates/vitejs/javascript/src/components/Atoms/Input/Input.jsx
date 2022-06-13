import { StyleInput, StyleLabel, StyleWrapper } from './style';

const Input = ({
  isRequired,
  id,
  style,
  className,
  withErrors,
  labelColor = 'text',
  bgColor = 'input',
  borderColor = 'borderColor',
  ...restInputProps
}) => {
  return (
    <StyleWrapper
      id={id}
      style={style}
      className={className}
      $color={labelColor}
      $bgColor={bgColor}
      $borderColor={withErrors ? 'error' : borderColor}
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

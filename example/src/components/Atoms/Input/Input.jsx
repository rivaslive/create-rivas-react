import { forwardRef } from 'react';
import { StyleInput, StyleLabel, StyleWrapper } from './style';

const Input = forwardRef(
  (
    {
      isRequired,
      id,
      style,
      className,
      withErrors,
      labelColor = 'text',
      bgColor = 'input',
      borderColor = 'borderColor',
      ...restInputProps
    },
    _ref,
  ) => {
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
            ref={_ref}
            // override props
            {...restInputProps}
          />
        </StyleLabel>
      </StyleWrapper>
    );
  },
);

export default Input;

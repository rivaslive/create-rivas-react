import {
  CSSProperties,
  ReactNode,
  useState,
  ChangeEvent,
  useEffect,
} from 'react';
import { ColorType, CSS } from 'styles/stitches.config';

import { LabelStyle, StyleInputCheck, StyleCheckMark } from './style';

interface CheckboxProps {
  children?: ReactNode;
  color?: ColorType;
  fontWeight?: string;
  fontSize?: string;
  disabled?: boolean;
  value?: boolean;
  onChange?: (e?: any) => void;
  css?: CSS;
  style?: CSSProperties;
  className?: string;
}

const Checkbox = ({
  children,
  disabled,
  value,
  onChange,
  className,
  style,
  fontWeight = '400',
  fontSize = '14px',
  color = '$text',
  css = {},
  ...restProps
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange && onChange(e);
  };

  useEffect(() => {
    if (typeof value === 'boolean') {
      setChecked((prev) => {
        if (prev !== value) return value;
        return prev;
      });
    }
  }, [value]);

  return (
    <LabelStyle
      className={className}
      style={style}
      checked={checked}
      css={{
        fontWeight,
        fontSize,
        color,
        ...css,
      }}
    >
      {children}
      <StyleInputCheck
        checked={checked}
        onChange={onChangeChecked}
        type="checkbox"
        {...restProps}
      />
      <StyleCheckMark />
    </LabelStyle>
  );
};

export default Checkbox;

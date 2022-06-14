import { useState, useEffect } from 'react';

import { LabelStyle, StyleInputCheck, StyleCheckMark } from './style';

const Checkbox = ({
  children,
  disabled,
  value,
  onChange,
  className,
  style,
  fontWeight = '400',
  fontSize = '14px',
  color = 'text',
  css = {},
  ...restProps
}) => {
  const [checked, setChecked] = useState(false);

  const onChangeChecked = (e) => {
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

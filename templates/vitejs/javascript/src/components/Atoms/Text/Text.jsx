import { TextStyle } from './style';

const Text = ({
  children,
  fontStyle = 'normal',
  htmlTag = 'p',
  letterSpacing = '-0.002em',
  fontWeight = 'normal',
  textTransform = 'none',
  margin = '0',
  fontSize = '1rem',
  lineHeight = '1.5',
  color = 'text',
  align = 'left',
  mobileSettings = {
    fontSize,
    lineHeight,
    textTransform
  },
  ...restProps
}) => {
  return (
    <TextStyle
      as={htmlTag}
      $color={color}
      $margin={margin}
      $fontStyle={fontStyle}
      $letterSpacing={letterSpacing}
      $fontWeight={fontWeight}
      $textAlign={align}
      $fontSize={fontSize}
      $textTransform={textTransform}
      $lineHeight={lineHeight}
      $mobileSettings={mobileSettings}
      {...restProps}
    >
      {children}
    </TextStyle>
  );
};

export default Text;

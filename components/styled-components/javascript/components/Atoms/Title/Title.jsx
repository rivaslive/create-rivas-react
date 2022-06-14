import { TitleStyle } from './style';

const Title = ({
  children,
  fontStyle = 'normal',
  htmlTag = 'h2',
  letterSpacing = '-0.005em',
  fontWeight = 'bold',
  textTransform = 'none',
  margin = 'inherit',
  fontSize = '3rem',
  lineHeight = '1.5',
  color = 'text',
  align = 'left',
  mobileSettings = {
    fontSize,
    lineHeight,
    textTransform,
  },
  ...restProps
}) => {
  return (
    <TitleStyle
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
    </TitleStyle>
  );
};

export default Title;

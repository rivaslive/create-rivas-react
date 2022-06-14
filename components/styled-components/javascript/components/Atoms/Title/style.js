import styled, { css } from 'styled-components';
import { mediaQueries } from 'styles/theme';

const cssResponsive = css`
  font-style: ${({ $fontStyle, $mobileSettings }) =>
    $mobileSettings?.fontStyle ?? $fontStyle};

  letter-spacing: ${({ $letterSpacing, $mobileSettings }) =>
    $mobileSettings?.letterSpacing ?? $letterSpacing};

  font-weight: ${({ $fontWeight, $mobileSettings }) =>
    $mobileSettings?.fontWeight ?? $fontWeight};

  text-align: ${({ $textAlign, $mobileSettings }) =>
    $mobileSettings?.textAlign ?? $textAlign};

  font-size: ${({ $fontSize, $mobileSettings }) =>
    $mobileSettings?.fontSize ?? $fontSize};

  text-transform: ${({ $textTransform, $mobileSettings }) =>
    $mobileSettings?.textTransform ?? $textTransform};

  line-height: ${({ $lineHeight, $mobileSettings }) =>
    $mobileSettings?.lineHeight ?? $lineHeight};

  ${mediaQueries.tablet} {
    font-style: ${({ $fontStyle }) => $fontStyle};
    letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
    font-weight: ${({ $fontWeight }) => $fontWeight};
    text-align: ${({ $textAlign }) => $textAlign};
    font-size: ${({ $fontSize }) => $fontSize};
    text-transform: ${({ $textTransform }) => $textTransform};
    line-height: ${({ $lineHeight }) => $lineHeight};
  }
`;

export const TitleStyle = styled.h1`
  word-break: break-word;
  margin: ${({ $margin }) => $margin};
  color: ${({ $color, theme }) => theme.colors[$color]};
  ${cssResponsive}
`;

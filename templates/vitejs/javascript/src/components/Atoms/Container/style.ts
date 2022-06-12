import { styled } from 'styles/stitches.config';

export const StyleContainer = styled('div', {
  display: 'block',
  width: '100%',
  padding: '0 20px',
  margin: '0 auto',
  variants: {
    withPaddingY: {
      true: {
        padding: '50px 20px',
      },
    },
  },
});

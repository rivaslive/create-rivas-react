import { styled } from 'styles/stitches.config';

export const StyleCheckMark = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: 18,
  width: 18,
  borderRadius: 4,
  backgroundColor: '#eee',
  transition: 'background 350ms',

  '&:after': {
    content: '',
    position: 'absolute',
    display: 'none',
    left: 0,
    right: 0,
    top: 3,
    margin: '0 auto',
    width: 5,
    height: 10,
    border: 'solid white',
    borderWidth: '0 3px 3px 0',
    transform: 'rotate(45deg)',
  },
});

export const StyleInputCheck = styled('input', {
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
});

export const LabelStyle = styled('label', {
  display: 'block',
  position: 'relative',
  paddingLeft: 25,
  marginBottom: 12,
  cursor: 'pointer',
  userSelect: 'none',

  variants: {
    checked: {
      true: {
        [`${StyleCheckMark}`]: {
          backgroundColor: '#2196F3',

          '&:after': {
            display: 'block',
          },
        },
      },
      false: {
        '&:hover': {
          [`${StyleCheckMark}`]: {
            backgroundColor: '#ccc',
          },
        },
      },
    },
  },
});

import { styled } from 'styles/stitches.config';
import Button from 'components/Atoms/Button';

export const StyleWrapper = styled('div', {
  position: 'relative',
  height: 'calc(2 * 1.25rem)',
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: '$borderRadius$default',

  '&:hover': {
    boxShadow: `$boxInputShadow`,
  },
});

export const StyleLabel = styled('label', {
  flex: '1 1 0%',
  width: '100%',
  height: '100%',
  position: 'relative',
  borderRadius: '$borderRadius$default',
  display: 'inline-flex',
  verticalAlign: 'middle',
  alignItems: 'center',
  userSelect: 'none',
});

export const StyleInput = styled('input', {
  padding: 0,
  border: 'none',
  background: 'transparent',
  color: 'currentColor',
  borderRadius: '$borderRadius$default',
  outline: 'none',
  width: '100%',
  height: '100%',
  minWidth: 0,
  appearance: 'none',
  margin: '0.25rem 0.625rem',
});

export const StyleButtonSearch = styled(Button, {
  position: 'absolute',
  borderRadius: '$borderRadius$xs',
  padding: '0 12px !important',
  right: 0,
  top: 0,

  '.anticon': {
    marginLeft: 10,
  },
});

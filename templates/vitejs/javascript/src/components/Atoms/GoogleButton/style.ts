import { styled } from 'styles/stitches.config';
import Button from 'components/Atoms/Button';

export const StyleButton = styled(Button, {
  width: '100%',
  minHeight: 48,
  display: 'flex',
  paddingLeft: 45,
  fontSize: 16,
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  backgroundColor: '#eee',
  color: '#444',

  '&:hover': {
    background: '#eee',
  },

  '&:before': {
    content: '',
    position: 'absolute',
    top: 14,
    left: 13,
    width: 20,
    height: 20,
    background:
      'url(https://ir.ebaystatic.com/rs/c/sgninui-src-static-images-google-logo-icon-PNG-Transparent-Background-Z_TFsqo3.png) no-repeat',
    backgroundSize: '100%',
  },
});

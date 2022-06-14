import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const StyleButton = styled(Button)`
  width: 100%;
  min-height: 48px;
  display: flex;
  padding-left: 45px;
  font-size: 16px;
  align-items: center;
  position: relative;
  justify-content: center;
  background-color: #eee;
  color: #444;

  &:hover {
    background: #eee;
  }

  &:before {
    content: '';
    position: absolute;
    top: 14px;
    left: 13px;
    width: 20px;
    height: 20px;
    background: url(https://ir.ebaystatic.com/rs/c/sgninui-src-static-images-google-logo-icon-PNG-Transparent-Background-Z_TFsqo3.png)
      no-repeat;
    background-size: 100%;
  }
`;

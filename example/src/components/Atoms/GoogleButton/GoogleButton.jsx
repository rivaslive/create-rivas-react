import { StyleButton } from './style';

const GoogleButton = ({ onFinish, ...props }) => {
  return (
    <StyleButton
      rounded
      color="text"
      bgColor="transparent"
      borderColor="icon"
      {...props}
    >
      Continues with Google
    </StyleButton>
  );
};

export default GoogleButton;

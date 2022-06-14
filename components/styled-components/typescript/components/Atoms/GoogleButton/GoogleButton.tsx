import { StyleButton } from './style';

type GoogleButtonProps = {
  onFinish?: () => void;
};

const GoogleButton = ({ onFinish, ...props }: GoogleButtonProps) => {
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

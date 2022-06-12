import { StyleButton } from 'components/Atoms/GoogleButton/style';

interface GoogleButtonProps extends BaseComponent {
  onFinish?: () => void;
}

const GoogleButton = ({ onFinish, ...props }: GoogleButtonProps) => {
  return (
    <StyleButton
      rounded
      color="$text"
      bgColor="$transparent"
      borderColor="$icon"
      {...props}
    >
      Continuar con Google
    </StyleButton>
  );
};

export default GoogleButton;

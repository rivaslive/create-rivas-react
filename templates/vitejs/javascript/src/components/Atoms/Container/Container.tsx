import { ReactNode } from 'react';
import { StyleContainer } from './style';
import { getStyleResponsive } from './Config';

interface ContainerProps extends BaseComponent {
  children?: ReactNode;
  withPaddingY?: boolean;
}

const Container = ({
  children,
  withPaddingY,
  css = {},
  ...restProps
}: ContainerProps) => {
  return (
    <StyleContainer
      withPaddingY={withPaddingY}
      css={{
        ...getStyleResponsive(),
        ...css,
      }}
      {...restProps}
    >
      {children}
    </StyleContainer>
  );
};

export default Container;

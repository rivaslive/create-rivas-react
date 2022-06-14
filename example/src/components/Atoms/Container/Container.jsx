import { StyleContainer } from './style';

const Container = ({ children, ...restProps }) => {
  return <StyleContainer {...restProps}>{children}</StyleContainer>;
};

export default Container;

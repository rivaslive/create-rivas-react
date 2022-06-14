import { StyleContainer } from './style';

const Container = ({ children, css = {}, ...restProps }) => {
  return <StyleContainer {...restProps}>{children}</StyleContainer>;
};

export default Container;

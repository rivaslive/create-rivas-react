import styled from 'styled-components';

export const WrapperStyle = styled.div``;

export const ComponentStyle = styled.div`
  position: relative;
  padding: 40px 20px 20px;
  border-radius: 12px;
  margin-bottom: 30px;
  background: ${({ theme }) => theme.colors.bgCard};
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.shadowInput};

  .btn {
    margin-bottom: 10px;
  }

  &:before {
    top: 10px;
    left: -30px;
    content: attr(data-content);
    font-size: 18px;
    position: absolute;
    padding: 3px 50px;
    font-weight: bold;
    border-radius: 12px;
    // background: ${({ theme }) => theme.colors.background};
  }
`;

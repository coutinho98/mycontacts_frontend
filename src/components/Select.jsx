import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  border-radius: 4px;
  border: none;
  border: 2px solid #fff;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.4s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

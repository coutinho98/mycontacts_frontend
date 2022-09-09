import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  padding: 0 16px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  transition: background 0.4s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.light}
  }

  &[disabled] {
    background:   #A9A9A9;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
      background: ${theme.colors.danger.light};

    &:hover {
      background: ${theme.colors.danger.dark};
    }

    &:active {
      background: ${theme.colors.danger.main};
    }
  `}
`;

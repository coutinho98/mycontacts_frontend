import styled from 'styled-components';

export const Container = styled.div`
 & + & {
  margin-top: 18px;
}

  small {
    font-size: 12px;
    display: block;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.danger.main};
  }
`;

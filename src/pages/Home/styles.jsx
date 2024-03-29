import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    background: "#fff";
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      opacity: 0.4;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ hasError }) =>
    (hasError ? "flex-end" : "space-between")};
  margin-top: 25px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

  strong {
    font-size: 20px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 7px 16px;
    border-radius: 4px;
    transition: all 0.4s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 10px;
  margin-bottom: 10px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transform: ${({ orderBy }) =>
    (orderBy === "asc" ? "rotate(180deg)" : "rotate(0deg)")};
      transition: transform 0.3s ease-in;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 18px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  strong {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.danger.main};
    display: block;
    margin-bottom: 20px;
  }
`;

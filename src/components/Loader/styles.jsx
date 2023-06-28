import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(246, 245, 252, 0.7);

  .loader {
    position: relative;
    border: 24px solid ${({ theme }) => theme.colors.primary.light};
    border-radius: 50%;
    box-sizing: border-box;
    animation: eat 1s linear infinite;
  }
  .loader::after,
  .loader::before {
    content: "";
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.primary.light};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    box-sizing: border-box;
    opacity: 0;
    animation: move 2s linear infinite;
  }

  .loader::before {
    animation-delay: 1s;
  }

  @keyframes eat {
    0%,
    49% {
      border-right-color: ${({ theme }) => theme.colors.primary.light};
    }
    50%,
    100% {
      border-right-color: #0000;
    }
  }
  @keyframes move {
    0% {
      left: 75px;
      opacity: 1;
    }
    50% {
      left: 0px;
      opacity: 1;
    }
    52%,
    100% {
      left: -5px;
      opacity: 0;
    }
  }
`;

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
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  color: #FFF;
  left: -100px;
  box-sizing: border-box;
  animation: shadowRolling 2s linear infinite;
}

@keyframes shadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow: 100px 0 ${({ theme }) => theme.colors.primary.main}, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 110px 0 ${({ theme }) => theme.colors.primary.main}, 100px 0 ${({ theme }) => theme.colors.primary.main}, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  36% {
    box-shadow: 120px 0 ${({ theme }) => theme.colors.primary.main}, 110px 0 ${({ theme }) => theme.colors.primary.main}, 100px 0 ${({ theme }) => theme.colors.primary.main}, 0px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 130px 0 ${({ theme }) => theme.colors.primary.main}, 120px 0 ${({ theme }) => theme.colors.primary.main}, 110px 0 ${({ theme }) => theme.colors.primary.main}, 100px 0 ${({ theme }) => theme.colors.primary.main};
  }
  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 ${({ theme }) => theme.colors.primary.main}, 120px 0 ${({ theme }) => theme.colors.primary.main}, 110px 0 ${({ theme }) => theme.colors.primary.main};
  }
  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 ${({ theme }) => theme.colors.primary.main}, 120px 0 ${({ theme }) => theme.colors.primary.main};
  }
  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 ${({ theme }) => theme.colors.primary.main};
  }
  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}
`;

import styled, { keyframes } from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  transform: translateY(-45px);
  color: red;
  animation: ${FadeIn} 0.6s;
`;

import styled from 'styled-components';

import {
  ButtonBase,
  ButtonGoogleSignIn,
  ButtonInverted,
} from '../button/button.styles';

export const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${ButtonBase},
  ${ButtonGoogleSignIn},
  ${ButtonInverted} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-Y: scroll;
  scrollbar-color: #f9f9fd;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #f9f9fd;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 2px;
  }
`;
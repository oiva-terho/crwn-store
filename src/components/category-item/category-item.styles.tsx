import styled from 'styled-components';

export const Container = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    margin-right: 7px;
  }
  &:last-child {
    margin-left: 7px;
  }
`;

type BgImgProps = {
  imageId: string;
};

export const BgImg = styled.div<BgImgProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageId }) =>
    `url(https://i.ibb.co/${imageId}/img.png)`};
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  &:hover {
    opacity: 0.9;
  }
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 2rem;
    color: #4a4a4a;
  }
  p {
    font-weight: lighter;
    font-size: 1rem;
  }
`;

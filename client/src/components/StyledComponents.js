import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  text-align: center;
  width: auto;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  border: none;
  background: transparent;
  text-decoration: underline;
  padding: 7px;
  margin: 2px;
  background: white;
  border-radius: 7px;
  user-select: none;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: rgb(230, 230, 230);
  }
`;

const ButtonImage = styled.img`
  height: 12px;
  width: 12px;
  padding-right: 7px;
  pointer-events: none;
  user-select: none;
`;

const LargeButtonImage = styled.img`
  height: 32px;
  width: 32px;
  padding: 16px;
  margin-right: 7px;
  background-color: black;
  border-radius: 10px;
  user-select: none;
`;

const FavoritesButtonImage = styled.img`
  height: 64px;
  width: 64px;
  margin-top: 7px;
  margin-right: 7px;
  background-color: black;
  border-radius: 10px;
  user-select: none;
`;

const Close = styled(Button)`
  text-decoration: none;
  width: auto;
  border-radius: 7px;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  background: rgb(230, 230, 230);
  padding: 7px;
  margin: 2px;
  user-select: none;
  &:hover {
    background: gray;
  }
`;

const SwitchToMosaic = styled(Close)`
  background: white;
  user-select: none;
  &:hover {
    background: rgb(230, 230, 230);
  }
`;

const ShowAllPhotos = styled(Close)`
  position: absolute;
  right: 13%;
  background: white;
  transform: translateY(-50px);
  user-select: none;
  &:hover {
    background: rgb(230, 230, 230);
  }
`;

const TopRightButtons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  user-select: none;
  top: 2%;
  right: 5%;
`;

const HeartImage = styled.img`
  height: 24px;
  width: 24px;
  background-color: transparent;
  user-select: none;
`;

export default {
  Button,
  ButtonImage,
  ShowAllPhotos,
  SwitchToMosaic,
  Close,
  TopRightButtons,
  LargeButtonImage,
  FavoritesButtonImage,
  HeartImage,
};

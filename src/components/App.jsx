import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFollow, getisActive } from '../redux/follow-selector';
import Statistics from './Statistics/Statistics';
import './App.styled.jsx';
import CountOptions from './CountOptions/CountOptions';
import picture from './img/picture2x.png';
import logo from './img/logo.png';
import Hansel from './img/Hansel2x.png';
import { addFollower, remoweFollower } from '../redux/follow-slice';
import {
  Container,
  Wrapper,
  SectionInfo,
  Tweets,
  SectionHeader,
  Logo,
  Labels,
  Avatar,
  AvatarBorder,
  AvatarContainer,
  Line,
  LineContainer,
} from './App.styled';

export default function App() {
  const follow = useSelector(getFollow);
  const isActive = useSelector(getisActive);
  const dispatch = useDispatch();

  const onBtnFollow = () => {
    if (isActive) {
      dispatch(remoweFollower());
      console.log('on click', isActive);
    }
    dispatch(addFollower());
  };

  return (
    <Container>
      <Wrapper>
        <SectionHeader>
          <Logo src={logo} alt="logo" />
          <Labels src={picture} alt="labels" />
          <AvatarBorder />
          <AvatarContainer>
            <Avatar src={Hansel} alt="Hansel" />
          </AvatarContainer>
        </SectionHeader>
        <LineContainer>
          <Line />
          <Line />
        </LineContainer>
        <SectionInfo>
          <Tweets> 777 tweets</Tweets>
          <Statistics follow={follow} />
          <CountOptions isActive={isActive} onBtnFollow={onBtnFollow} />
        </SectionInfo>
      </Wrapper>
    </Container>
  );
}

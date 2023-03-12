import styled from '@emotion/styled';
import banner from './img/picture2.png';

export const Wrapper = styled.div`
  width: 380px;
  height: 460px;
  margin-top: auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SectionHeader = styled.div`
  position: relative;
  top: 28px;
  left: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${banner});
  width: 308px;
  height: 168px;
  background-repeat: no-repeat;
`;

export const Logo = styled.img`
  position: absolute;
  top: -8px;
  left: -16px;
  width: 76px;
  height: 22px;
`;

export const Labels = styled.img`
  margin-top: 28px;
  width: 308px;
  height: 168px;
  margin-bottom: 18px;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    0px -2.19582px 4.39163px #ae7be3, 0px 4.39163px 3.29372px #fbf8ff;
`;

export const AvatarBorder = styled.div`
  position: relative;
  position: absolute;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 62px;
  background: transparent;
  border: 9px solid #ebd8ff;

  border-radius: 50%;
  box-shadow: groove 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    0px -2.19582px 4.39163px #ae7be3, 0px 4.39163px 3.29372px #fbf8ff;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: none;
  background: transparent;
  z-index: 300;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;

  &:before {
    content: '';
    position: absolute;
    top: 45%;
    height: 8px;
    border: none;
    margin: 0px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    right: 100%;
    left: -187.5%;
  }
  &:after {
    content: '';
    position: absolute;
    top: 45%;
    height: 8px;
    border: none;
    margin: 0px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    left: 100%;
    right: -187.5%;
  }
`;

export const Tweets = styled.span`
  color: #ebd8ff;

  margin-bottom: 16px;
`;

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 116px;
`;

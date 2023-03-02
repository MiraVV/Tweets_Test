import styled from '@emotion/styled';

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

export const Tweets = styled.span`
  color: #ebd8ff;
  margin-bottom: 16px;
`;

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 214px;
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 62px;
`;

export const Line = styled.hr`
  width: 40%;
  height: 8px;
  border: none;
  margin: 0px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
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
top: 178px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 62px;
  background: transparent;
  border: 9px solid #ebd8ff;

  border-radius: 50%;
  box-shadow: groove 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 0px -2.19582px 4.39163px #AE7BE3, 0px 4.39163px 3.29372px #FBF8FF;
}
`;

export const AvatarContainer = styled.div`
position: absolute;
top: 178px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: none;
  background: transparent;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
   inset 0px -2.19582px 4.39163px #AE7BE3,
   inset 0px 4.39163px 3.29372px #FBF8FF;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
`;

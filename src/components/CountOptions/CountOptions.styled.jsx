import styled from '@emotion/styled';

export const FollowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  border: none;

  width: 196px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  background: ${props => (props.isActive ? '#5cd3a8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  color: #373737;
  cursor: pointer;

  :hover {
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3),
      inset 0px -2.19582px 2.39163px rgba(0, 0, 0, 0.3),
      inset 0px 2.39163px 2.39163px rgba(0, 0, 0, 0.3);
  }
`;

import PropTypes from 'prop-types';
import { FollowButton } from './CountOptions.styled';

export default function CountOptions({ isActive, onBtnFollow }) {
  return (
    <FollowButton
      type="button"
      onClick={() => {
        onBtnFollow();
      }}
      isActive={isActive}
    >
      <span>{isActive ? 'Following' : 'Follow'}</span>
    </FollowButton>
  );
}

CountOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onBtnFollow: PropTypes.func.isRequired,
};

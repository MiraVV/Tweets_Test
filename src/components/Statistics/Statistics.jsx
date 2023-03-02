import PropTypes from 'prop-types';
import { StatisticFollowers } from './Statistics.styled';

export default function Statistics({ follow }) {
  const str = `${follow}`;
  const numb = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');

  return <StatisticFollowers>{numb} FOLLOWERS</StatisticFollowers>;
}

Statistics.propTypes = {
  follow: PropTypes.number.isRequired,
};

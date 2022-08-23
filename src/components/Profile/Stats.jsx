import PropTypes from 'prop-types';
import {Info} from './Info';
import { StatsList } from './Stats.styled';


export const Stats = ( {followers, views, likes}) => {
    return <StatsList>
      <Info label={`Followers`} quantity={followers}/>
      <Info label={`Views`} quantity={views}/>
      <Info label={`Likes`} quantity={likes}/>
    </StatsList>
}
Stats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
  })
}
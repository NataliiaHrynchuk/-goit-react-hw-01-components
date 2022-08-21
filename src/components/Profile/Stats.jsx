import PropTypes from 'prop-types';
import css from 'components/Profile/Stats.module.css';
import {Info} from './Info';


export const Stats = ( {followers, views, likes}) => {
    return <ul className={css.stats}>
      <Info label={`Followers`} quantity={followers}/>
      <Info label={`Views`} quantity={views}/>
      <Info label={`Likes`} quantity={likes}/>
    </ul>
}
Stats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
  })
}
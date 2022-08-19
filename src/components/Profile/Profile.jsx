import css from 'components/Profile/Profile.module.css';
import PropTypes from 'prop-types';
import { Avatar } from './Avatar';
import { Stats } from './Stats';



export const Profile = ({user:{avatar, username, tag, location, stats}}) => {
    return <div className={css.profile}>
      <Avatar 
      avatar={avatar}
      username={username}
      tag={tag}
      location={location}
      />
      <Stats followers={stats.followers}
             views={stats.views}
             likes={stats.likes}/>
    
  </div>;
};

Profile.propTypes = {
  user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.shape()
    })
}
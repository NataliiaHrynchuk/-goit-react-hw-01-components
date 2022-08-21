import PropTypes from 'prop-types';
import css from 'components/Profile/Avatar.module.css';

export const Avatar = ({avatar, username, tag, location}) => {
    return <div className={css.description}>
        <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
        // width="200"
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{`@${tag}`}</p>
      <p className={css.location}>{location}</p>
    </div>
}
 Avatar.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
     
 }
import PropTypes from 'prop-types';

export const Avatar = ({avatar, username, tag, location}) => {
    return <div>
        <img
        src={avatar}
        alt="User avatar"
        // width="200"
      />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
}
 Avatar.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
     
 }
import css from 'components/Profile/Profile.module.css';
import PropTypes from 'prop-types';


const Info = ({label, quantity }) => {
  return <div>
    {label}
    {quantity}
  </div>
}

export const Profile = ({user: {avatar, username, tag, location, stats:{followers, views, likes}}}) => {
    return <div className={css.profile}>
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
        // width="200"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <Info label={`Followers`} quantity={followers}/>
      <Info label={`Views`} quantity={views}/>
      <Info label={`Likes`} quantity={likes}/>
    </ul>
  </div>;
};

Profile.propTypes = {
    user: PropTypes.exact({
        avatar: PropTypes.string,
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        stats: PropTypes.exact({
          followers: PropTypes.number,
          views: PropTypes.number,
          likes: PropTypes.number,
    })
})
}
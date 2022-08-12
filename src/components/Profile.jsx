import css from 'components/Profile.module.css';



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
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <Info label={`Followers`} quantity={followers}/>
      <Info label={`Views`} quantity={views}/>
      <Info label={`Likes`} quantity={likes}/>
      {/* <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li> */}
    </ul>
  </div>;
};

// Profile.propTypes = {
//     user: PropTypes.exact({
//         username: PropTypes.string,
//         tag: PropTypes.string,
//     })
// }
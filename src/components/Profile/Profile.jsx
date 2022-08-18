import css from 'components/Profile/Profile.module.css';
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


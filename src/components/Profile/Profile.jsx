import PropTypes from 'prop-types';
import { Avatar } from './Avatar';
import { Stats } from './Stats';
import { Container } from './Profile.styled';



export const Profile = ({user:{avatar, username, tag, location, stats}}) => {
    return <Container>
      <Avatar 
      avatar={avatar}
      username={username}
      tag={tag}
      location={location}
      />
      <Stats followers={stats.followers}
             views={stats.views}
             likes={stats.likes}/>
    
  </Container>;
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
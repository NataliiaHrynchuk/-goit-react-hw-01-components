import PropTypes from 'prop-types';
import {Description, ImageUrl, Name, Tag, Location} from 'components/Profile/Avater.styled';

export const Avatar = ({avatar, username, tag, location}) => {
    return <Description>
        <ImageUrl
        src={avatar}
        alt="User avatar"
        />
      <Name>{username}</Name>
      <Tag>{`@${tag}`}</Tag>
      <Location>{location}</Location>
    </Description>
}
 Avatar.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
     
 }
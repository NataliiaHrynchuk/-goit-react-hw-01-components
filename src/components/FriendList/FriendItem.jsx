import PropTypes from 'prop-types';
import {Container, Status, Name} from 'components/FriendList/FriendItem.styled';

export const FriendItem = ({avatar, name, isOnline}) => {
    
       return <Container>
        <Status status={isOnline}></Status>
        <img src={avatar} 
             alt="User avatar" 
             width="48" />
        <Name>{name}</Name>
        </Container>
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


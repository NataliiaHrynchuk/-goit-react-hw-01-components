import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendItem.module.css';
export const FriendItem = ({avatar, name, isOnline}) => {
    return <div className={css.friend_item}>
        <span>{isOnline}</span>
        <img src={avatar} 
             alt="User avatar" 
             width="48" />
        <p>{name}</p>
    </div>
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
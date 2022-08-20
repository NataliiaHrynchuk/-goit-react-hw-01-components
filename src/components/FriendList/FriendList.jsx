import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';
import { FriendItem } from "./FriendItem";


export const FriendList = ({items}) => {
    return (<ul className={css.friend_list}>
        {items.map(item => (
            <li  key={item.id}>
                <FriendItem avatar={item.avatar}
                            name={item.name}
                            isOnline={item.isOnline}/>
            </li>
        ))
        }
    </ul>);
}
FriendList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
    )
}
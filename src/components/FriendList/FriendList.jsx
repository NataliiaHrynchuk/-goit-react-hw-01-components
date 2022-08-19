import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";


export const FriendList = ({items}) => {
    return <ul>
        {items.map(item => (
            <li key={item.id}>
                <FriendListItem avatar={item.avatar}
                            name={item.name}
                            isOnline={item.isOnline}/>
            </li>
        ))
        }
    </ul>
}
FriendList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
    )
}
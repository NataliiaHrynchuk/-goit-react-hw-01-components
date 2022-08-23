import PropTypes from 'prop-types';
import { FriendItem } from "./FriendItem";
import {List} from 'components/FriendList/FriendList.styled'

export const FriendList = ({items}) => {
    return (<List>
        {items.map(item => (
            <li key={item.id}>
                <FriendItem avatar={item.avatar}
                            name={item.name}
                            isOnline={item.isOnline}/>
            </li>
        ))
        }
    </List>);
}
FriendList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
    )
}
import PropTypes from 'prop-types';
import css from 'components/Statistics/StatList.module.css';
import { StatInfo } from 'components/Statistics/StatInfo';
import {getRandomHexColor} from 'Utils/getRandomHexColor';
const bgColor = getRandomHexColor();
console.log(bgColor);

export const StatList = ({items}) => {
   
return (<ul className={css.stat_list}>
    {items.map(item => ( 
        <li key={item.id} className={css.item} style={{backgroundColor:getRandomHexColor()}}>
            <StatInfo
               label={item.label}
               percentage={item.percentage}/>
        </li>
    ))}
</ul>);
};

StatList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        }),
    )
}
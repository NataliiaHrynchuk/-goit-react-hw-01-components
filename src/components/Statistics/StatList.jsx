import PropTypes from 'prop-types';
import css from 'components/Statistics/StatList.module.css';
import { StatInfo } from 'components/Statistics/StatInfo';

export const StatList = ({items}) => {
return (<ul className={css.stat_list}>
    {items.map(item => ( 
        < li key={item.id}>
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
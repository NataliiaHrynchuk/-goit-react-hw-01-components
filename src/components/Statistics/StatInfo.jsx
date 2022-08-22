import PropTypes from 'prop-types';
import css from 'components/Statistics/StatInfo.module.css';

export const StatInfo = ({label, percentage}) => {
    return( <div className={css.stat_info}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </div>);
};

StatInfo.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
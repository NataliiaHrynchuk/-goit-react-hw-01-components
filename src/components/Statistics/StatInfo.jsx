import PropTypes from 'prop-types';
import css from 'components/Statistics/StatInfo.module.css';
import {getRandomHexColor} from 'Utils/getRandomHexColor';


export const StatInfo = ({label, percentage}) => {
    const bgColor = getRandomHexColor();
        return( <div className={css.stat_info} background-color={bgColor}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </div>);
};

StatInfo.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
import PropTypes from 'prop-types';
export const StatInfo = ({label, percentage}) => {
    return <div>
        <span>{label}</span>
        <span>{percentage}%</span>
    </div>
}

StatInfo.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
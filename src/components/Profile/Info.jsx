import PropTypes from 'prop-types';
export const Info = ({label, quantity }) => {
    return <li>
      <span>{label}</span>
      <span>{quantity}</span>
    </li>
  }

Info.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}
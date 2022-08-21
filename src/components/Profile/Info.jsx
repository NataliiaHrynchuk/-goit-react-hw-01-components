import PropTypes from 'prop-types';
import css from 'components/Profile/Info.module.css';
export const Info = ({label, quantity }) => {
    return <li className={css.stats_item}>
      <span className={css.label}>{label}</span>
      <span className={css.quantity}>{quantity}</span>
    </li>
  }

Info.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}
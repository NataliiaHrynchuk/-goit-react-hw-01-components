import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/Thead.module.css';
export const Thead = ({nameFirstColumn, nameSecondColumn, nameThirdColumn}) => {
    return <thead className={css.thead}>
    <tr>
      <th className={css.th}>{nameFirstColumn}</th>
      <th className={css.th}>{nameSecondColumn}</th>
      <th className={css.th}>{nameThirdColumn}</th>
    </tr>
  </thead>
}
 Thead.propTypes = {
  nameFirstColumn: PropTypes.string.isRequired,
  nameSecondColumn: PropTypes.string.isRequired,
  nameThirdColumn: PropTypes.string.isRequired,
 }
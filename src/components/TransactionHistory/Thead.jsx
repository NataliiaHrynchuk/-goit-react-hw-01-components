import PropTypes from 'prop-types';
export const Thead = ({nameFirstColumn, nameSecondColumn, nameThirdColumn}) => {
    return <thead>
    <tr>
      <th>{nameFirstColumn}</th>
      <th>{nameSecondColumn}</th>
      <th>{nameThirdColumn}</th>
    </tr>
  </thead>
}
 Thead.propTypes = {
  nameFirstColumn: PropTypes.string.isRequired,
  nameSecondColumn: PropTypes.string.isRequired,
  nameThirdColumn: PropTypes.string.isRequired,
 }
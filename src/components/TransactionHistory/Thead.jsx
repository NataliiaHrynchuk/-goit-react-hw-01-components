import PropTypes from 'prop-types';
import { HeaderLine } from './Thead.styled';

export const Thead = ({nameFirstColumn, nameSecondColumn, nameThirdColumn}) => {
    return <HeaderLine>
    <tr>
      <th>{nameFirstColumn}</th>
      <th>{nameSecondColumn}</th>
      <th>{nameThirdColumn}</th>
    </tr>
  </HeaderLine>
}
 Thead.propTypes = {
  nameFirstColumn: PropTypes.string.isRequired,
  nameSecondColumn: PropTypes.string.isRequired,
  nameThirdColumn: PropTypes.string.isRequired,
 }
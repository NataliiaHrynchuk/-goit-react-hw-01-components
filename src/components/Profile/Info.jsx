import PropTypes from 'prop-types';
import { StatsItem, Label, Quantity } from './Info.styled';

export const Info = ({label, quantity }) => {
    return <StatsItem>
      <Label>{label}</Label>
      <Quantity>{quantity}</Quantity>
    </StatsItem>
  }

Info.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}
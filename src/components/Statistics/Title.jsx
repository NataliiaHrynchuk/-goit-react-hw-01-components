import PropTypes from 'prop-types';
import { Heading } from './Title.styled';

export const Title = ({title}) => {
    return <Heading>{title}</Heading>
}

Title.propTytle = {
    title: PropTypes.string,
}
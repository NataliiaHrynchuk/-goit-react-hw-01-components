import PropTypes from 'prop-types';
import css from 'components/Statistics/Title.module.css';
export const Title = ({title}) => {
    return <h2 className={css.title}>{title}</h2>
}

Title.propTytle = {
    title: PropTypes.string,
}
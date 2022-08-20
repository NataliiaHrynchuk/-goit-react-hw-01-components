import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css'
import { Title } from './Title';
import { StatList } from "./StatList";
// import data from 'components/Statistics/data.json';
export const Statistics = ({title, stats}) => {
    return <section className={css.statistics}>
    {title && <Title title={title}/>}
  <StatList items={stats}/>
    
  </section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}
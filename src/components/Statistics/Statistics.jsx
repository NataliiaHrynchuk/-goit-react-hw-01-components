import PropTypes from 'prop-types';
import { StatList } from "./StatList";
// import data from 'components/Statistics/data.json';
export const Statistics = ({title, stats}) => {
    return <div>
    <h2>{title}</h2>
  <StatList items={stats}/>
    
  </div>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
}
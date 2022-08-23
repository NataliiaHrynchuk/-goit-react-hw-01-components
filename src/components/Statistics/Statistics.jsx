import PropTypes from 'prop-types';
import { Title } from './Title';
import { StatList } from "./StatList";
import { StatisticsSection } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return <StatisticsSection>
    {title && <Title title={title}/>}
  <StatList items={stats}/>
  </StatisticsSection>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}
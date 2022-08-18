import { StatList } from "./StatList";
// import data from 'components/Statistics/data.json';
export const Statistics = ({title, stats}) => {
    return <div>
    <h2>{title}</h2>
  <StatList items={stats}/>
    
  </div>
}
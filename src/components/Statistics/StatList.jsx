import { StatInfo } from "components/Statistics/StatInfo";
export const StatList = ({items}) => {
return <ul>
    {items.map(item => ( 
        <li key={item.id}>
            <StatInfo
               label={item.label}
               percentage={item.percentage}/>
        </li>
    ))}
</ul>
}
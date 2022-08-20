import PropTypes from 'prop-types';
import { TbodyList } from "./TbodyList";
import { Thead } from "./Thead";
export const TransactionHistory = ({items}) => {
    return <table>
            <Thead nameFirstColumn='Type'
               nameSecondColumn='Amount'
               nameThirdColumn='Currency'/>
               
            <TbodyList items={items}/>
            
            
    </table>
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          
        }),
    )
}
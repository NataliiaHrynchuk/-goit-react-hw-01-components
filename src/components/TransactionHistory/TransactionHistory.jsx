import PropTypes from 'prop-types';
import { TbodyList } from "./TbodyList";
import { Thead } from "./Thead";
import css from 'components/TransactionHistory/TransactionHistory.module.css';
export const TransactionHistory = ({items}) => {
    return <table className={css.transaction_history}>
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
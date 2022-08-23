import PropTypes from 'prop-types';
import { TbodyList } from "./TbodyList";
import { Thead } from "./Thead";
import { Table } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return <Table>
                <Thead nameFirstColumn='Type'
                    nameSecondColumn='Amount'
                    nameThirdColumn='Currency'/>
                <TbodyList items={items}/>
            </Table>
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          
        }),
    )
}
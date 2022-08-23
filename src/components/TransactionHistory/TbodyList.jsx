import PropTypes from 'prop-types';
import { Tbody, TableRow, TableCell } from './TbodyList.styled';

export const TbodyList = ({items}) => {
    return <Tbody>
        {items.map(item => (
            <TableRow key={item.id}>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.currency}</TableCell>
            </TableRow>
        ))}

    </Tbody>
}

TbodyList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        }),
    )
}
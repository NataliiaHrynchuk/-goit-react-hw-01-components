import PropTypes from 'prop-types';
export const TbodyList = ({items}) => {
    return <tbody>
        {items.map(item => (
            <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
        ))}

    </tbody>
}

TbodyList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        }),
    )
}
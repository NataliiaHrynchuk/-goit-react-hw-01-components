import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TbodyList.module.css';
export const TbodyList = ({items}) => {
    return <tbody className={css.tbody}>
        {items.map(item => (
            <tr key={item.id} className={css.tr}>
                <td className={css.td}>{item.type}</td>
                <td className={css.td}>{item.amount}</td>
                <td className={css.td}>{item.currency}</td>
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
import PropTypes from 'prop-types';
import s from './transactionHistory.module.css';

function capitalizesFirstLetter(word) {
    const capitalizesFirstLetterWord =
        word.split('')[0].toUpperCase() + word.slice(1);
    return capitalizesFirstLetterWord;
}

export default function TransactionHistory({ items }) {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th className={s.head}>Type</th>
                    <th className={s.head}>Amount</th>
                    <th className={s.head}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    const { type, amount, currency, id } = item;

                    return (
                        <tr key={id} className={s.row}>
                            <td className={s.body}>
                                {capitalizesFirstLetter(type)}
                            </td>
                            <td className={s.bodyCentered}>{amount}</td>
                            <td className={s.bodyCentered}>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ),
};

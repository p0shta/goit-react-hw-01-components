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
                    return (
                        <tr key={item.id} className={s.row}>
                            <td className={s.body}>
                                {capitalizesFirstLetter(item.type)}
                            </td>
                            <td className={s.bodyCentered}>{item.amount}</td>
                            <td className={s.bodyCentered}>{item.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
};

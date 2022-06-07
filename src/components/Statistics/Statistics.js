import PropTypes from 'prop-types';
import s from './statistics.module.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, data }) {
    return (
        <>
            <section className={s.statistics}>
                {title && <h2 className={s.title}>{title}</h2>}

                <ul className={s.statList}>
                    {data.map(({ id, label, percentage }) => {
                        return (
                            <li
                                className={s.item}
                                key={id}
                                style={{ backgroundColor: getRandomHexColor() }}
                            >
                                <span className={s.label}>{label}</span>
                                <span className={s.percentage}>
                                    {percentage}%
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

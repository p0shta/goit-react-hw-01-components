import PropTypes from 'prop-types';
import s from './friendListItem.module.css';

export default function FriendListItem({ id, isOnline, avatar, name }) {
    return (
        <li className={s.item} key={id}>
            <span
                className={isOnline ? s.statusOnline : s.statusNotOnline}
            ></span>
            <img
                className={s.avatar}
                src={avatar}
                alt="User avatar"
                width={50}
            />
            <p className={s.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    name: PropTypes.string,
};

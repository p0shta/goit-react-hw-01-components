import PropTypes from 'prop-types';
import s from './friendList.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => {
                return (
                    <li className={s.item} key={friend.id}>
                        <span
                            className={
                                friend.isOnline
                                    ? s.statusOnline
                                    : s.statusNotOnline
                            }
                        ></span>
                        <img
                            className={s.avatar}
                            src={friend.avatar}
                            alt="User avatar"
                            width={50}
                        />
                        <p className={s.name}>{friend.name}</p>
                    </li>
                );
            })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array,
};

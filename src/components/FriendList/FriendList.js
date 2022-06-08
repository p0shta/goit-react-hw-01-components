import PropTypes from 'prop-types';

import FriendListItem from 'components/FriendListItem/FriendListItem';
import s from './friendList.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => {
                const { id, isOnline, avatar, name } = friend;

                return (
                    <FriendListItem
                        key={id}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                    />
                );
            })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
};

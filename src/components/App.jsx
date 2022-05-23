import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
// --------
import user from './user';
import data from './data';
import friends from './friends';
import transactions from './transactions';
// --------

export const App = () => {
    return (
        <div className="app">
            <Profile
                avatar={user.avatar}
                location={user.location}
                stats={user.stats}
                tag={user.tag}
                username={user.username}
            />
            <Statistics title="Upload Stats" data={data} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
};

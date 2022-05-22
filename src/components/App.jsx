import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
// --------
import user from './user';
import data from './data';
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
        </div>
    );
};

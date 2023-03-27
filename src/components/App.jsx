import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendsList from './friendsList/FriendsList';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};

import propTypes from 'prop-types';

import css from './FriendsList.module.css';
import { FriendsListItem } from '../friendsListItem/FriendsListItem';

function FriendsList({ friends }) {
  return (
    <section>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendsListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        ))}
      </ul>
    </section>
  );
}

export default FriendsList;

import PropTypes from 'prop-types';

import css from './FriendsList.module.css';
import { FriendsListItem } from '../friendsListItem/FriendsListItem';

function FriendsList({ friends }) {
  return (
    <section className={css.section}>
      <ul className={css.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendsListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))}
      </ul>
    </section>
  );
}

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

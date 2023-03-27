import PropTypes from 'prop-types';

import css from './FriendsListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      {isOnline ? (
        <span className="true"></span>
      ) : (
        <span className="false"></span>
      )}

      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name"> {name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

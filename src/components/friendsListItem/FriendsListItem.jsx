import propTypes from 'prop-types';

import css from './FriendsListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li class="item" key={id}>
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

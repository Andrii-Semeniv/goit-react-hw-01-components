import PropTypes from 'prop-types';

import css from './FriendsListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.true}></span>
      ) : (
        <span className={css.false}></span>
      )}
      <div>
        <img src={avatar} alt="User avatar" width="48" />
        <p> {name}</p>
      </div>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

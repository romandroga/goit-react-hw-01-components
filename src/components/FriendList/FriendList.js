import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css'
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(elem => (
      <FriendListItem
        avatar={elem.avatar}
        name={elem.name}
        isOnline={elem.isOnline}
        key={elem.id}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}

export default FriendList;

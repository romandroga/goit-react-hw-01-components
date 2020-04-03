import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import statData from './Statistics/statistical-data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions';

const App = () => (
  <Fragment>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload Statistics" stats={statData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </Fragment>
);

export default App;

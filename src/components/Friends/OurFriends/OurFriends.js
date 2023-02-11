import { useEffect } from 'react';
import { useState } from 'react';

import { OurFriendItem } from 'components/Friends';
import { FriendsList } from './OurFriends.styled.js';
import { Loader } from 'components/Loader/Loader';

// import SPONSORS from 'data/sponsors.json';
// import axios from 'axios';
import { fetchFriends } from 'components/Friends/services';

export const OurFriends = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    try {
      await fetchFriends().then(({ data }) => {
        setFriends(data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      {!friends.length ? (
        <Loader />
      ) : (
        <FriendsList>
          {friends.map(friend => (
            <OurFriendItem key={friend._id} {...friend} />
          ))}
        </FriendsList>
      )}
    </>
  );
};

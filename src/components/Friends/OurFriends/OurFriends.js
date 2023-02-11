import { useEffect } from 'react';
import { useState } from 'react';

import { OurFriendItem } from 'components/Friends';
import { FriendsList } from './OurFriends.styled.js';
import { Loader } from 'components/Loader/Loader';

import SPONSORS from 'data/sponsors.json';

export const OurFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(SPONSORS);
  }, []);

  // if (friends.length) console.log(friends);
  return (
    <>
      {!friends.length ? (
        <Loader />
      ) : (
        <FriendsList>
          {friends.map((friend, idx) => {
            return <OurFriendItem key={idx} {...friend} />;
          })}
        </FriendsList>
      )}
    </>
  );
};

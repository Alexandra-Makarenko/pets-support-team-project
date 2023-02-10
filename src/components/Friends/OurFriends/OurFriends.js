import { useEffect } from 'react';
import { useState } from 'react';

import { OurFriendItem } from 'components/Friends';
import { FriendsList } from './OurFriends.styled.js';

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
        <>Requesting friends list...</>
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

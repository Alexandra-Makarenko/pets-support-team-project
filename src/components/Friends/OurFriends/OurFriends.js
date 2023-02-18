import { useEffect } from 'react';
import { useState } from 'react';

import { OurFriendItem } from 'components/Friends';
import { Loader } from 'components/Loader/Loader';
import { FriendsList } from './OurFriends.styled.js';


import { fetchFriends } from 'components/Friends/services';
import { SkeletonFriendsLoader } from 'components/Skeleton/SkeletonOptions.js';
import FriendsLoaderBig from 'components/Skeleton/SkeletonFriendsLoaderBig.js';
import FriendsLoaderSmall from 'components/Skeleton/SkeletonFriendsLoaderSmall.js';

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
        window.matchMedia('(min-width: 768px)').matches ? (
          <SkeletonFriendsLoader>{<FriendsLoaderBig />}</SkeletonFriendsLoader>
        ) : (
          <SkeletonFriendsLoader>
            {<FriendsLoaderSmall />}
          </SkeletonFriendsLoader>
        )
      ) : (
        <>
          <FriendsList>
            {friends.map(friend => (
              <OurFriendItem key={friend._id} {...friend} />
            ))}
          </FriendsList>
        </>
      )}
    </>
  );
};

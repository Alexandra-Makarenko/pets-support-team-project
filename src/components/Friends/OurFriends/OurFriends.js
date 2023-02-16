import { useEffect } from 'react';
import { useState } from 'react';

import { OurFriendItem } from 'components/Friends';
import { Loader } from 'components/Loader/Loader';
import { FriendsList } from './OurFriends.styled.js';

import { fetchFriends } from 'components/Friends/services';
import { FriendModal } from 'components/Friends/FriendModal';

export const OurFriends = () => {
  const [friends, setFriends] = useState([]);
  const [modalUrl, setModalUrl] = useState('');

  const toggleModal = modalUrl => setModalUrl(modalUrl ?? '');

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
        <>
          <FriendsList>
            {friends.map(friend => (
              <OurFriendItem
                key={friend._id}
                toggleModal={toggleModal}
                {...friend}
              />
            ))}
          </FriendsList>
          {modalUrl && <FriendModal url={modalUrl} toggleModal={toggleModal} />}
        </>
      )}
    </>
  );
};

import { UserContainer } from './Userpage.styled';

import { useState } from 'react';

import { Container } from 'components/Container/Container';
import { MainModal } from 'components/MainModal/MainModal';
import { UserPageAddPet } from './UserPageAddPet';
import { MyInfo } from 'components/Account/MyInfo/MyInfo';
import { PetInfo } from 'components/Account/PetInfo/PetInfo';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Container>
        <UserContainer>
          <MyInfo />
          <PetInfo toggleModal={toggleModal} />
        </UserContainer>
      </Container>
      {showModal && (
        <MainModal onClose={toggleModal}>
          <UserPageAddPet onClick={toggleModal} />
        </MainModal>
      )}
    </>
  );
};
export default UserPage;

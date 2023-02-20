import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { getPets } from 'redux/userPets/selectors';
import { fetchPets } from 'redux/userPets/operations';
import {
  AddPetButton,
  AddPetHeader,
  PetHeaderContainer,
  UserPetsHeader,
} from './PetInfo.styled';
import { PetCard } from './PetCard/PetCard';

export const PetInfo = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const petsData = useSelector(getPets);

  const [pets, setPets] = useState('');

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  useEffect(() => {
    async function getPets() {
      const data = petsData;
      setPets(
        data.length > 0
          ? data.map(({ name, date, breed, comment, avatarURL, _id }) => {
              return (
                <PetCard
                  name={name}
                  date={date}
                  breed={breed}
                  comment={comment}
                  avatarURL={avatarURL}
                  _id={_id}
                />
              );
            })
          : null
      );
    }
    getPets();
  }, [dispatch, petsData]);

  return (
    <div>
      <PetHeaderContainer>
        <UserPetsHeader>My pets:</UserPetsHeader>
        <AddPetHeader>
          Add pet
          <AddPetButton type="button" onClick={toggleModal}>
            <BsPlusLg width={24} height={24} />
          </AddPetButton>
        </AddPetHeader>
      </PetHeaderContainer>
      <section>
        <ul>{pets}</ul>
      </section>
    </div>
  );
};

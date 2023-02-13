import {
  Item,
  Wrap,
  ImgWrap,
  CategoryLabel,
  Img,
  WrapInner,
  Title,
  Ul,
  Li,
  Lable,
  Text,
  ThumbBtn,
  LearnMoreBtn,
} from './NoticeCategoryItem.styled';
import { useDispatch } from 'react-redux';
import {
  fetchOneNotice,
  fetchAddFavoriteNotice,
  fetchRemoveFavoriteNotice,
} from 'redux/notices/operations';
import { AddFavoriteIconBtn } from './AddFavoriteIconBtn/AddFavoriteIconBtn';
import { RemoveFavoriteIconBtn } from './RemoveFavoriteIconBtn/RemoveFavoriteIconBtn';
import { RemoveFavoriteBtn } from './RemoveFavoriteBtn/FavoriteBtn';
import { useAuth } from 'hooks/useAuth';

import { useState } from 'react';
import { MainModal } from 'components/MainModal/MainModal';
import { ModalNotice } from 'components/Modals/ModalNotice/ModalNotice';

export const NoticeCategoryItem = ({ pet, favoritePets }) => {
  const { isLoggedIn } = useAuth();

  const isFavorite = favoritePets.find(item => item._id === pet._id);

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    dispatch(fetchOneNotice(pet._id));
    setShowModal(!showModal);
  };

  const addToFavorite = () => {
    if (!isLoggedIn) {
      alert('Login to your account or register');
      return;
    }
    dispatch(fetchAddFavoriteNotice(pet._id));
  };

  const removeFromFavorite = () => {
    dispatch(fetchRemoveFavoriteNotice(pet._id));
  };

  return (
    <>
      <Item>
        <ImgWrap>
          <CategoryLabel>{pet.category}</CategoryLabel>

          {isFavorite && isLoggedIn ? (
            <RemoveFavoriteIconBtn onClick={removeFromFavorite} />
          ) : (
            <AddFavoriteIconBtn onClick={addToFavorite} />
          )}
          <Img src={pet.avatarURL} alt={pet.name} loading="lazy" />
        </ImgWrap>
        <Wrap>
          <WrapInner>
            <Title>{pet.title || 'Title must be here'}</Title>
            <Ul>
              <Li key={`${pet._id}+breed`}>
                <Lable>Breed:</Lable>
                <Text>{pet.breed}</Text>
              </Li>
              <Li key={`${pet._id}+place`}>
                <Lable>Place:</Lable>
                <Text>{pet.place}</Text>
              </Li>
              <Li key={`${pet._id}+age`}>
                <Lable>Age:</Lable>
                <Text>{pet.dateofbirth}</Text>
              </Li>
            </Ul>
          </WrapInner>
          <ThumbBtn isFavorite={isFavorite}>
            <LearnMoreBtn type="button" onClick={toggleModal}>
              Learn more
            </LearnMoreBtn>
            {isFavorite && <RemoveFavoriteBtn onClick={removeFromFavorite} />}
          </ThumbBtn>
        </Wrap>
      </Item>
      {showModal && (
        <MainModal onClose={toggleModal}>
          <ModalNotice
            isFavorite={isFavorite}
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
          />
        </MainModal>
      )}
    </>
  );
};

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
  removeMyAddNotice,
} from 'redux/notices/operations';
import { AddFavoriteIconBtn } from './AddFavoriteIconBtn/AddFavoriteIconBtn';
import { RemoveFavoriteIconBtn } from './RemoveFavoriteIconBtn/RemoveFavoriteIconBtn';
import { RemoveMyNoticeBtn } from './RemoveMyNoticeBtn/RemoveMyNoticeBtn';
import { useAuth } from 'hooks/useAuth';

import { useState } from 'react';
import { MainModal } from 'components/MainModal/MainModal';
import { ModalNotice } from 'components/Modals/ModalNotice/ModalNotice';
import Plug from '../../../logo/plug_picture_pet.png';

export const NoticeCategoryItem = ({ pet, favoritePets, user }) => {
  // console.log('user._id', user);
  // console.log('owner', pet.owner);
  // console.log(user._id === pet.owner);

  const { isLoggedIn } = useAuth();

  const isFavorite = favoritePets.find(item => item._id === pet._id);
  const isMyAds = user._id === pet.owner;
  // console.log(isMyAds);

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

  const removeFromMyAdsNotices = () => {
    dispatch(removeMyAddNotice(pet._id));
  };
  const noLinesCategory = category => {
    if (category === 'lost-found') {
      return 'Lost/Found';
    } else if (category === 'in-good-hands') {
      return 'In good hands';
    }
    return 'Sell';
  };

  return (
    <>
      <Item>
        <ImgWrap>
          <CategoryLabel>{noLinesCategory(pet.category)}</CategoryLabel>

          {isFavorite ? (
            <RemoveFavoriteIconBtn removeFromFavorite={removeFromFavorite} />
          ) : (
            <AddFavoriteIconBtn onClick={addToFavorite} />
          )}

          {pet.avatarURL ? (
            <Img src={pet.avatarURL} alt={pet.title} loading="lazy" />
          ) : (
            <Img src={Plug} alt="animal" />
          )}
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
              {pet.category === 'sell' && (
                <Li key={`${pet._id}+sell`}>
                  <Lable>Price:</Lable>
                  <Text>{pet.price + ' ₴' || '----------'}</Text>
                </Li>
              )}
            </Ul>
          </WrapInner>
          <ThumbBtn isFavorite={isFavorite}>
            <LearnMoreBtn type="button" onClick={toggleModal}>
              Learn more
            </LearnMoreBtn>
            {isMyAds && <RemoveMyNoticeBtn onClick={removeFromMyAdsNotices} />}
          </ThumbBtn>
        </Wrap>
      </Item>
      {showModal && (
        <MainModal onClose={toggleModal}>
          <ModalNotice
            isFavorite={isFavorite}
            isMyAds={isMyAds}
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
          />
        </MainModal>
      )}
    </>
  );
};

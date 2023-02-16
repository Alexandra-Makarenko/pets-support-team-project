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
  BoxConfirmAlert,
  YesBtnConfirmAlert,
  NoBtnConfirmAlert,
  TitleConfirmAlert,
  WrapConfirmAlertBtn,
} from './NoticeCategoryItem.styled';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const NoticeCategoryItem = ({
  pet,
  favoritePets,
  user,
  categoryFilter,
}) => {
  const { isLoggedIn } = useAuth();

  const isFavorite = favoritePets.find(item => item._id === pet._id);
  const isMyAds = user._id === pet.owner;

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const notifyNeedLogin = () =>
    toast.warn('You need to log in to use this function!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const notifyDeclarationIsDelete = () =>
    toast.success('Declaration deleted!', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const toggleModal = () => {
    dispatch(fetchOneNotice(pet._id));
    setShowModal(!showModal);
  };

  const removeFromMyAdsNotices = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <BoxConfirmAlert>
            <TitleConfirmAlert>
              You want to delete this notice?
            </TitleConfirmAlert>
            <WrapConfirmAlertBtn>
              <YesBtnConfirmAlert
                onClick={() => {
                  dispatch(removeMyAddNotice(pet._id));
                  onClose();
                  notifyDeclarationIsDelete();
                }}
              >
                Yes, Delete it!
              </YesBtnConfirmAlert>
              <NoBtnConfirmAlert onClick={onClose}>No</NoBtnConfirmAlert>
            </WrapConfirmAlertBtn>
          </BoxConfirmAlert>
        );
      },
    });
  };

  const addToFavorite = () => {
    if (!isLoggedIn) {
      notifyNeedLogin();
      return;
    }
    dispatch(fetchAddFavoriteNotice(pet._id));
  };

  const removeFromFavorite = () => {
    dispatch(fetchRemoveFavoriteNotice(pet._id));
  };

  // const removeFromMyAdsNotices = () => {
  //   dispatch(removeMyAddNotice(pet._id));
  // };
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
      <Item isMyAds={isMyAds}>
        <Wrap>
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
        </Wrap>
        <ThumbBtn isFavorite={isFavorite} isMyAds={isMyAds}>
          <LearnMoreBtn type="button" onClick={toggleModal}>
            Learn more
          </LearnMoreBtn>
          {isMyAds && <RemoveMyNoticeBtn onClick={removeFromMyAdsNotices} />}
        </ThumbBtn>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Item>
      {showModal && (
        <MainModal onClose={toggleModal}>
          <ModalNotice
            isFavorite={isFavorite}
            isMyAds={isMyAds}
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
            toggleModal={toggleModal}
            categoryFilter={categoryFilter}
          />
        </MainModal>
      )}
    </>
  );
};

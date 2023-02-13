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
  AddToFavoriteBtn,
  HeartIcon,
} from './NoticeCategoryItem.styled';
import { useDispatch } from 'react-redux';
import { fetchOneNotice } from 'redux/notices/operations';

import { useState } from 'react';
import { MainModal } from 'components/MainModal/MainModal';
import { ModalNotice } from 'components/Modals/ModalNotice/ModalNotice';

export const NoticeCategoryItem = ({ pet }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    dispatch(fetchOneNotice(pet._id));
    setShowModal(!showModal);
  };

  return (
    <>
      <Item>
        <ImgWrap>
          <CategoryLabel>{pet.category}</CategoryLabel>
          <AddToFavoriteBtn
            type="button"
            onClick={() => {
              console.log('first');
            }}
          >
            <HeartIcon />
          </AddToFavoriteBtn>
          <Img src={pet.avatarURL} alt={pet.name} loading="lazy" />
          {/* <FavoriteBtn/> */}
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
          <ThumbBtn>
            <LearnMoreBtn type="button" onClick={toggleModal}>
              Learn more
            </LearnMoreBtn>
          </ThumbBtn>
        </Wrap>
      </Item>
      {showModal && (
        <MainModal onClose={toggleModal}>
          <ModalNotice />
        </MainModal>
      )}
    </>
  );
};

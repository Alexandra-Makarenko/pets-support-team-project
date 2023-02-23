import {
  ModalNoticeBox,
  ImgWrap,
  CategoryLabel,
  Img,
  WrapInner,
  Title,
  Ul,
  Li,
  Lable,
  Text,
  CommentsParagraph,
  CommentsLable,
  ContactModalNoticeBtn,
  AddModalNoticeBtn,
  RemoveFavoriteBtn,
  HeartIcon,
  WrapForBtn,
  SecondWrap,
  TextLink,
  OwnerLink,
} from './ModalNotice.styled';

import { useSelector } from 'react-redux';
import { getOneNotice } from 'redux/notices/selectors';
import { Link } from 'react-router-dom';

export const ModalNotice = ({
  isFavorite,
  addToFavorite,
  removeFromFavorite,
  toggleModal,
  categoryFilter,
  imgsrc,
}) => {
  const oneNotice = useSelector(getOneNotice);

  const noLinesCategory = category => {
    if (category === 'lost-found') {
      return 'Lost/Found';
    } else if (category === 'in-good-hands') {
      return 'In good hands';
    }
    return 'Sell';
  };

  const handleAddToFavorite = () => {
    removeFromFavorite();
    if (categoryFilter === '/notices/favorite') {
      toggleModal();
    }
  };

  const theSex = oneNotice.sex ? 'male' : 'female';

  return (
    <ModalNoticeBox>
      <SecondWrap>
        <ImgWrap>
          <CategoryLabel>{noLinesCategory(oneNotice.category)}</CategoryLabel>

          <Img src={imgsrc} alt={oneNotice.name} loading="lazy" />
        </ImgWrap>

        <WrapInner>
          <Title>{oneNotice.title || 'Title must be here'}</Title>
          <Ul>
            <Li key={`${oneNotice._id}+name`}>
              <Lable>Name:</Lable>
              <Text>{oneNotice.name || '----------'}</Text>
            </Li>
            <Li key={`${oneNotice._id}+dateofbirth`}>
              <Lable>Birthday:</Lable>
              <Text>{oneNotice.dateofbirth}</Text>
            </Li>
            <Li key={`${oneNotice._id}+breed`}>
              <Lable>Breed:</Lable>
              <Text>{oneNotice.breed}</Text>
            </Li>
            <Li key={`${oneNotice._id}+place`}>
              <Lable>Location:</Lable>
              <Text>{oneNotice.place}</Text>
            </Li>
            <Li key={`${oneNotice._id}+sex`}>
              <Lable>The sex:</Lable>
              <Text>{theSex}</Text>
            </Li>
            <Li key={`${oneNotice._id}+email`}>
              <Lable>Email:</Lable>
              <TextLink href={`mailto:${oneNotice.phone}`}>
                {oneNotice.email || '----------'}
              </TextLink>
            </Li>
            <Li key={`${oneNotice._id}+phone`}>
              <Lable>Phone:</Lable>
              <TextLink href={`tel:${oneNotice.phone}`}>
                {oneNotice.phone || '----------'}
              </TextLink>
            </Li>
            {oneNotice.category === 'sell' && (
              <Li key={`${oneNotice._id}+sell`}>
                <Lable>Price:</Lable>
                <Text>{oneNotice.price + ' ₴' || '----------'}</Text>
              </Li>
            )}
            <Li key={`${oneNotice._id}+owner`}>
              <Lable>By:</Lable>
              <OwnerLink to={`/owner/${oneNotice.owner}`}>
                {oneNotice.ownername}
              </OwnerLink>
            </Li>
          </Ul>
        </WrapInner>
      </SecondWrap>
      <CommentsParagraph>
        <CommentsLable>Comments: </CommentsLable>
        {oneNotice.comments || ''}
      </CommentsParagraph>
      <WrapForBtn>
        <ContactModalNoticeBtn href={`tel:${oneNotice.phone}`}>
          Contact
        </ContactModalNoticeBtn>
        {isFavorite ? (
          <RemoveFavoriteBtn type="button" onClick={handleAddToFavorite}>
            Delete <HeartIcon />
          </RemoveFavoriteBtn>
        ) : (
          <AddModalNoticeBtn type="button" onClick={addToFavorite}>
            Add to <HeartIcon isfavorite={isFavorite} />
          </AddModalNoticeBtn>
        )}
      </WrapForBtn>
    </ModalNoticeBox>
  );
};

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
} from './ModalNotice.styled';

import { useSelector } from 'react-redux';
import { getOneNotice } from 'redux/notices/selectors';

export const ModalNotice = ({
  isFavorite,
  addToFavorite,
  removeFromFavorite,
}) => {
  const oneNotice = useSelector(getOneNotice);
  // console.log(oneNotice);

  return (
    <ModalNoticeBox>
      <SecondWrap>
        <ImgWrap>
          <CategoryLabel>{oneNotice.category}</CategoryLabel>
          <Img src={oneNotice.avatarURL} alt={oneNotice.name} loading="lazy" />
          {/* <FavoriteBtn/> */}
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
              <Text>{oneNotice.sex || '----------'}</Text>
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
                <Text>{oneNotice.price || '----------'}</Text>
              </Li>
            )}
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
          <RemoveFavoriteBtn type="button" onClick={removeFromFavorite}>
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

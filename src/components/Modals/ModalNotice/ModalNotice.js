import {
  ModalNoticeBox,
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
  CommentsParagraph,
  CommentsLable,
  ContactModalNoticeBtn,
  AddModalNoticeBtn,
  HeartIcon,
} from './ModalNotice.styled';

import { useSelector } from 'react-redux';
import { getOneNotice } from 'redux/notices/selectors';

export const ModalNotice = () => {
  const oneNotice = useSelector(getOneNotice);
  console.log(oneNotice);

  return (
    <ModalNoticeBox>
      <ImgWrap>
        <CategoryLabel>{oneNotice.category}</CategoryLabel>
        <Img src={oneNotice.avatarURL} alt={oneNotice.name} loading="lazy" />
        {/* <FavoriteBtn/> */}
      </ImgWrap>
      <Wrap>
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
              <Text>{oneNotice.email || '----------'}</Text>
            </Li>
            <Li key={`${oneNotice._id}+phone`}>
              <Lable>Phone:</Lable>
              <Text>{oneNotice.phone || '----------'}</Text>
            </Li>
            {oneNotice.category === 'sell' && (
              <Li key={`${oneNotice._id}+sell`}>
                <Lable>Price:</Lable>
                <Text>{oneNotice.price || '----------'}</Text>
              </Li>
            )}
          </Ul>
          <CommentsParagraph>
            <CommentsLable>Comments: </CommentsLable>
            {oneNotice.comments || ''}
          </CommentsParagraph>
        </WrapInner>
      </Wrap>
      <ContactModalNoticeBtn href={`tel:${oneNotice.phone}`}>
        Contact
      </ContactModalNoticeBtn>
      <AddModalNoticeBtn type="button" onClick={() => {}}>
        Add to <HeartIcon />
      </AddModalNoticeBtn>
    </ModalNoticeBox>
  );
};
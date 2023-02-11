import {
  ModalNoticeBox,
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
} from './ModalNotice.styled';

export const ModalNotice = ({ pet }) => {
  return (
    <ModalNoticeBox>
      <ImgWrap>
        <CategoryLabel>{pet.category}</CategoryLabel>
        <Img src={pet.avatarURL} alt={pet.name} loading="lazy" />
        {/* <FavoriteBtn/> */}
      </ImgWrap>
      <Wrap>
        <WrapInner>
          <Title>{pet.title || 'Title must be here'}</Title>
          <Ul>
            <Li key={`${pet.id}+breed`}>
              <Lable>Breed:</Lable>
              <Text>{pet.breed}</Text>
            </Li>
            <Li key={`${pet.id}+place`}>
              <Lable>Place:</Lable>
              <Text>{pet.place}</Text>
            </Li>
            <Li key={`${pet.id}+age`}>
              <Lable>Age:</Lable>
              <Text>{pet.dateofbirth}</Text>
            </Li>
            <Li key={`${pet.id}+age`}>
              <Lable>Age:</Lable>
              <Text>{pet.dateofbirth}</Text>
            </Li>
            <Li key={`${pet.id}+age`}>
              <Lable>Age:</Lable>
              <Text>{pet.dateofbirth}</Text>
            </Li>
            <Li key={`${pet.id}+age`}>
              <Lable>Age:</Lable>
              <Text>{pet.dateofbirth}</Text>
            </Li>
            <Li key={`${pet.id}+age`}>
              <Lable>Age:</Lable>
              <Text>{pet.dateofbirth}</Text>
            </Li>
            <Li key={`${pet.id}+age`}>
              <Lable>Age:</Lable>
              <Text>{pet.dateofbirth}</Text>
            </Li>
            <Li key={`${pet.id}+age`}>
              <Lable>Age:</Lable>
              <Text>{pet.dateofbirth}</Text>
            </Li>
          </Ul>
        </WrapInner>
      </Wrap>
    </ModalNoticeBox>
  );
};

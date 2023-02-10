import { ReactComponent as AcceptSvg } from './accept.svg';
import {
  FieldName,
  MyInfoSection,
  UserButton,
  UserPhoto,
  Value,
} from './Userpage.styled';
import emptyPhoto from './emptyPhoto.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const UserPage = () => {
  const { email, name, place, phone, dayofbirth, avatarURL } =
    useSelector(selectUser);
  const Li = (fieldName, value, isActive) => (
    <li>
      <FieldName>{fieldName}</FieldName>
      <Value>{value}</Value>
      {isActive ? (
        <UserButton>
          <AcceptSvg fill="#F59256" />
        </UserButton>
      ) : (
        <AcceptSvg />
      )}
    </li>
  );

  return (
    <>
      <h2>My Information</h2>
      <MyInfoSection>
        {avatarURL ? (
          <UserPhoto src={avatarURL} width={233} height={233} alt="" />
        ) : (
          <UserPhoto src={emptyPhoto} alt="" />
        )}
        <ul>
          {Li('Name:', name, true)}
          {Li('Email:', email, false)}
          {Li('Birthday:', dayofbirth, true)}
          {Li('Phone:', phone, true)}
          {Li('City:', place, true)}
        </ul>
      </MyInfoSection>
      <section>
        <h2>My pets</h2>
      </section>
    </>
  );
};
export default UserPage;

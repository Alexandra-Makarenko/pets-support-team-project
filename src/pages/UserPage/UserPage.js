import { ReactComponent as AcceptSvg } from './accept.svg';
import {
  FieldName,
  MyInfoSection,
  UserButton,
  UserPhoto,
  Value,
} from './Userpage.styled';
import emptyPhoto from './emptyPhoto.jpg';

const UserPage = () => {
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
        <UserPhoto src={emptyPhoto} alt="" />
        <ul>
          {Li('Name:', '', true)}
          {Li('Email:', '', false)}
          {Li('Birthday:', '', true)}
          {Li('Phone:', '', true)}
          {Li('City:', '', true)}
        </ul>
      </MyInfoSection>
      <section>
        <h2>My pets</h2>
      </section>
    </>
  );
};
export default UserPage;

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
import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'http://localhost:3018/api';
const fetchPets = async () => {
  const res = await axios.get('user');
  return res.data.result.pets;
};

const UserPage = () => {
  const [pets, setPets] = useState('');
  const { email, name, place, phone, dayofbirth, avatarURL } =
    useSelector(selectUser);

  useEffect(() => {
    async function getPets() {
      const data = await fetchPets();
      setPets(
        data.length > 0
          ? data.map(({ name, date, breed, comment, avatarURL }) => {
              return (
                <div>
                  <img
                    src={avatarURL || ''}
                    width={161}
                    height={161}
                    alt="pet"
                  />
                  <ul>
                    <li>
                      <p>Name: {name || ''}</p>
                    </li>
                    <li>
                      <p>Date of birth: {date || ''}</p>
                    </li>
                    <li>
                      <p>Breed: {breed || ''}</p>
                    </li>
                    <li>
                      <p>Comments: {comment || ''}</p>
                    </li>
                  </ul>
                </div>
              );
            })
          : null
      );
    }
    getPets();
  }, []);
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
      <h2>My pets</h2>
      <section>{pets}</section>
    </>
  );
};
export default UserPage;

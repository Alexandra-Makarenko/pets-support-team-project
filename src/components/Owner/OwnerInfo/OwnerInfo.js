import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOwnerData } from 'redux/owner/selectors';
import emptyPhoto from 'components/Account/MyInfo/emptyPhoto.jpg';
import {
  Field,
  FieldName,
  ListItem,
  MyInfoDataSection,
  MyInfoSection,
  UserDataContainer,
  UserInfoHeader,
  UserPhoto,
  Value,
} from './OwnerInfo.styled';

export const OwnerInfo = ({ id }) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [place, setPlace] = useState(null);
  const [phone, setPhone] = useState(null);
  const [dateofbirth, setDateofbirth] = useState(null);
  const [avatarURL, setAvatarURL] = useState(null);

  const owner = useSelector(getOwnerData);

  useEffect(() => {
    if (owner) {
      setEmail(owner.email);
      setName(owner.name);
      setPlace(owner.place);
      setPhone(owner.phone);
      setDateofbirth(owner.dateofbirth);
      setAvatarURL(owner.avatarURL);
    }
  }, [owner]);

  const MyInfoFormItem = (fieldName, value) => {
    const inputFieldFunction = () => {
      return <Value>{value || ''}</Value>;
    };
    const inputFIeld = inputFieldFunction();

    return (
      <ListItem key={fieldName}>
        <Field>
          <FieldName>{fieldName || ''}</FieldName>
          {inputFIeld}
        </Field>
      </ListItem>
    );
  };

  return (
    <UserDataContainer>
      <UserInfoHeader>User Information:</UserInfoHeader>
      {owner && (
        <MyInfoSection>
          {avatarURL ? (
            <UserPhoto src={avatarURL} alt="" />
          ) : (
            <UserPhoto src={emptyPhoto} alt="" />
          )}

          <MyInfoDataSection>
            <ul>
              {MyInfoFormItem('Name:', name)}
              {MyInfoFormItem('Email:', email)}
              {MyInfoFormItem('Birthday:', dateofbirth)}
              {MyInfoFormItem('Phone:', phone)}
              {MyInfoFormItem('City:', place)}
            </ul>
          </MyInfoDataSection>
        </MyInfoSection>
      )}
    </UserDataContainer>
  );
};

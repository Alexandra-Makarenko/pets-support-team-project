import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import emptyPhoto from './emptyPhoto.jpg';
import { ReactComponent as AcceptSvg } from './accept.svg';
import { ReactComponent as EditSvg } from './pencil.svg';
import { MdLogout, MdPhotoCamera } from 'react-icons/md';
import {
  Field,
  FieldName,
  HiddenInput,
  InputValue,
  ListItem,
  LogoutButton,
  LogoutContainer,
  MyInfoDataSection,
  MyInfoSection,
  UploadLabel,
  UserButton,
  UserButtonDisabled,
  UserButtonPlaceholder,
  UserDataContainer,
  UserInfoHeader,
  UserPhoto,
  Value,
} from './MyInfo.styled';

const updateUser = async user => {
  const data = new FormData();
  for (const prop in user) {
    if (user[prop]) {
      data.append(prop, user[prop]);
    }
  }
  try {
    const response = await axios({
      method: 'PATCH',
      url: '/users',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

const updateImage = async user => {
  const data = new FormData();
  data.append('avatar', user.avatar);
  try {
    const response = await axios({
      method: 'PATCH',
      url: '/users',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const MyInfo = () => {
  const [activeField, setActiveField] = useState(0);
  const [inputName, setInputName] = useState(null);
  const [inputBday, setInputBday] = useState(null);
  const [inputPhone, setInputPhone] = useState(null);
  const [inputCity, setInputCity] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [place, setPlace] = useState(null);
  const [phone, setPhone] = useState(null);
  const [dateofbirth, setDateofbirth] = useState(null);
  const [avatarURL, setAvatarURL] = useState(null);
  const [readyForUpdate, setReadyForUpdate] = useState(false);
  const [image, setImage] = useState(null);
  const [uploadData, setuploadData] = useState({});

  const dispatch = useDispatch();

  const handleChangeName = e => {
    setInputName(e.target.value);
  };
  const handleChangBday = e => {
    setInputBday(e.target.value);
  };
  const handleChangePhone = e => {
    setInputPhone(e.target.value);
  };
  const handleChangeCity = e => {
    setInputCity(e.target.value);
  };

  const handleChangeImage = e => {
    if (e.target.files[0].size < 2097152) {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    } else {
      console.log(e.target.files[0].size);
      toast.warn('File size should be less than 2Mb!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const User = useSelector(selectUser);

  const logoutRequest = () => {
    dispatch(logOut());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setReadyForUpdate(true);
  };

  useEffect(() => {
    setEmail(User.email);
    setName(User.name);
    setPlace(User.place);
    setPhone(User.phone);
    setDateofbirth(User.dateofbirth);
    setAvatarURL(User.avatarURL);
  }, [User]);

  useEffect(() => {
    if (!image) {
      return;
    }
    async function updateData() {
      const updatedUser = {
        avatar: image,
      };
      const data = await updateImage(updatedUser);
      if (data) {
        setAvatarURL(data.avatarURL);
      }
      setImage(null);
    }
    updateData();
  }, [image]);

  useEffect(() => {
    if (!readyForUpdate) {
      return;
    }
    async function updateData() {
      const data = await updateUser(uploadData);
      if (data) {
        setName(data.name);
        setPlace(data.place);
        setPhone(data.phone);
        setDateofbirth(data.dateofbirth);
        setAvatarURL(data.avatarURL);
      } else {
        setInputName(name);
        setInputBday(dateofbirth);
        setInputPhone(phone);
        setInputCity(place);
      }
    }
    updateData();
    setReadyForUpdate(false);
  }, [dateofbirth, name, phone, place, readyForUpdate, uploadData]);

  const MyInfoFormItem = (
    categoryName,
    fieldName,
    value,
    isActive,
    fieldNubmer,
    handleChangeField,
    field
  ) => {
    const acceptButtonFunction = () => {
      if (isActive) {
        if (activeField === 0) {
          return (
            <UserButton
              type="submit"
              onClick={() => {
                setActiveField(fieldNubmer);
              }}
            >
              <EditSvg fill="#F59256" />
            </UserButton>
          );
        } else if (activeField === fieldNubmer) {
          return (
            <UserButton
              type="button"
              onClick={() => {
                setActiveField(0);
              }}
            >
              <AcceptSvg fill="#F59256" />
            </UserButton>
          );
        } else {
          return (
            <UserButtonDisabled type="button">
              <EditSvg fill="#111111" />
            </UserButtonDisabled>
          );
        }
      } else {
        return (
          <UserButtonPlaceholder
            type="button"
            disabled={true}
          ></UserButtonPlaceholder>
        );
      }
    };
    const inputFieldFunction = () => {
      if (fieldNubmer === activeField) {
        const fieldValue = () => {
          if (field === undefined || field === null) {
            return value;
          } else {
            return field;
          }
        };
        return (
          <>
            <InputValue
              id="imageInput"
              type="text"
              value={fieldValue() || ''}
              onChange={handleChangeField}
            />
          </>
        );
      }
      return <Value>{value || ''}</Value>;
    };
    const acceptBUtton = acceptButtonFunction(isActive, fieldNubmer, value);
    const inputFIeld = inputFieldFunction(fieldNubmer);

    return (
      <ListItem key={fieldName}>
        <Field
          onSubmit={e => {
            setuploadData({ [categoryName]: field });
            handleSubmit(e);
            setActiveField(0);
          }}
        >
          <FieldName>{fieldName || ''}</FieldName>
          {inputFIeld}
          {acceptBUtton}
        </Field>
      </ListItem>
    );
  };

  return (
    <UserDataContainer>
      <UserInfoHeader>My Information:</UserInfoHeader>
      <MyInfoSection>
        {avatarURL ? (
          <UserPhoto src={avatarURL} alt="" />
        ) : (
          <UserPhoto src={emptyPhoto} alt="" />
        )}
        <UploadLabel>
          <MdPhotoCamera fill="#F59256" />
          Edit photo
          <HiddenInput
            type="file"
            onChange={handleChangeImage}
            accept=".jpg, .jpeg, .png"
          />
        </UploadLabel>
        <MyInfoDataSection>
          <ul>
            {MyInfoFormItem(
              'name',
              'Name:',
              name,
              true,
              1,
              handleChangeName,
              inputName
            )}
            {MyInfoFormItem('email', 'Email:', email, false, 2)}
            {MyInfoFormItem(
              'dateofbirth',
              'Birthday:',
              dateofbirth,
              true,
              3,
              handleChangBday,
              inputBday
            )}
            {MyInfoFormItem(
              'phone',
              'Phone:',
              phone,
              true,
              4,
              handleChangePhone,
              inputPhone
            )}
            {MyInfoFormItem(
              'place',
              'City:',
              place,
              true,
              5,
              handleChangeCity,
              inputCity
            )}
          </ul>
          <LogoutContainer>
            <LogoutButton onClick={logoutRequest}>
              <MdLogout fill="#F59256" /> Log out
            </LogoutButton>
          </LogoutContainer>
        </MyInfoDataSection>
      </MyInfoSection>
    </UserDataContainer>
  );
};

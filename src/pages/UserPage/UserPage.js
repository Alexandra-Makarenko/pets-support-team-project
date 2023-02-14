import { ReactComponent as AcceptSvg } from './accept.svg';
import { ReactComponent as EditSvg } from './pencil.svg';
import { ReactComponent as TrashCan } from './trashCan.svg';
import { MdLogout, MdPhotoCamera } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';

import {
  AddPetButton,
  AddPetHeader,
  DeletePetButton,
  Field,
  FieldName,
  HiddenInput,
  InputValue,
  ListItem,
  LogoutButton,
  LogoutContainer,
  MyInfoDataSection,
  MyInfoSection,
  PetCard,
  PetDescription,
  PetField,
  PetFieldName,
  PetHeaderContainer,
  PetPhoto,
  PetPhotoContainer,
  PetPhotoPlaceholder,
  UploadLavel as UploadLabel,
  UserButton,
  UserButtonPlaceholder,
  UserContainer,
  UserDataContainer,
  UserInfoHeader,
  UserPetsHeader,
  UserPhoto,
  Value,
} from './Userpage.styled';
import emptyPhoto from './emptyPhoto.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { logOut } from 'redux/auth/authOperations';
import { Container } from 'components/Container/Container';
import { MainModal } from 'components/MainModal/MainModal';
import { UserPageAddPet } from './UserPageAddPet';
import { getPets } from 'redux/userPets/selectors';
import { deletePet, fetchPets } from 'redux/userPets/operations';

// const fetchPets = async () => {
//   const res = await axios.get('user');
//   return res.data.result.pets;
// };

const updateUser = async user => {
  // console.log('user:', user);
  const data = new FormData();
  for (const prop in user) {
    if (user[prop]) {
      data.append(prop, user[prop]);
    }
  }
  // for (const value of data.values()) {
  //   console.log(value);
  // }
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
  // for (const value of data.values()) {
  //   console.log(value);
  // }
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

const UserPage = () => {
  const dispatch = useDispatch();
  const petsData = useSelector(getPets);

  const [pets, setPets] = useState('');
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
  const [showModal, setShowModal] = useState(false);
  const [uploadData, setuploadData] = useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
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
    dispatch(fetchPets());
  }, [dispatch]);

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

  useEffect(() => {
    async function getPets() {
      const removePet = id => {
        dispatch(deletePet(id));
      };
      const data = petsData;
      // console.log(data);
      setPets(
        data.length > 0
          ? data.map(({ name, date, breed, comment, avatarURL, _id }) => {
              return (
                <PetCard>
                  <PetPhotoContainer>
                    {avatarURL ? (
                      <PetPhoto src={avatarURL || ''} alt="pet" />
                    ) : (
                      <PetPhotoPlaceholder></PetPhotoPlaceholder>
                    )}
                  </PetPhotoContainer>
                  <ul>
                    <PetField>
                      <p>
                        <PetFieldName>Name: </PetFieldName>
                        <PetDescription>{name || ''}</PetDescription>
                      </p>
                    </PetField>
                    <PetField>
                      <p>
                        <PetFieldName>Date of birth: </PetFieldName>
                        <PetDescription>{date || ''}</PetDescription>
                      </p>
                    </PetField>
                    <PetField>
                      <p>
                        <PetFieldName>Breed: </PetFieldName>
                        <PetDescription>{breed || ''}</PetDescription>
                      </p>
                    </PetField>
                    {comment ? (
                      <PetField>
                        <p>
                          <PetFieldName>Comments: </PetFieldName>
                          <PetDescription>{comment || ''}</PetDescription>
                        </p>
                      </PetField>
                    ) : null}
                  </ul>
                  <DeletePetButton
                    onClick={() => {
                      removePet(_id);
                    }}
                  >
                    <TrashCan fill="rgba(17, 17, 17, 0.6)" />
                  </DeletePetButton>
                </PetCard>
              );
            })
          : null
      );
    }
    getPets();
  }, [dispatch, petsData]);
  const Li = (
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
            <UserButton type="button">
              <EditSvg fill="#111111" />
            </UserButton>
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
    <>
      <Container>
        <UserContainer>
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
                <HiddenInput type="file" onChange={handleChangeImage} />
              </UploadLabel>
              <MyInfoDataSection>
                <ul>
                  {Li(
                    'name',
                    'Name:',
                    name,
                    true,
                    1,
                    handleChangeName,
                    inputName
                  )}
                  {Li('email', 'Email:', email, false, 2)}
                  {Li(
                    'dateofbirth',
                    'Birthday:',
                    dateofbirth,
                    true,
                    3,
                    handleChangBday,
                    inputBday
                  )}
                  {Li(
                    'phone',
                    'Phone:',
                    phone,
                    true,
                    4,
                    handleChangePhone,
                    inputPhone
                  )}
                  {Li(
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
          <div>
            <PetHeaderContainer>
              <UserPetsHeader>My pets:</UserPetsHeader>
              <AddPetHeader>
                Add pet
                <AddPetButton type="button" onClick={toggleModal}>
                  <BsPlusLg width={24} height={24} />
                </AddPetButton>
              </AddPetHeader>
            </PetHeaderContainer>
            <section>
              <ul>{pets}</ul>
            </section>
          </div>
        </UserContainer>
      </Container>
      {showModal && (
        <MainModal onClose={toggleModal}>
          <UserPageAddPet onClick={toggleModal} />
        </MainModal>
      )}
    </>
  );
};
export default UserPage;

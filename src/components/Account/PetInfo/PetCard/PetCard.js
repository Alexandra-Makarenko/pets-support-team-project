import { ReactComponent as TrashCan } from './trashCan.svg';
import {
  DeletePetButton,
  PetCardItem,
  PetDescription,
  PetField,
  PetFieldName,
  PetPhoto,
  PetPhotoContainer,
  PetPhotoPlaceholder,
} from '../PetInfo.styled';
import { deletePet } from 'redux/userPets/operations';
import { useDispatch } from 'react-redux';

export const PetCard = ({ name, date, breed, comment, avatarURL, _id }) => {
  const dispatch = useDispatch();
  const removePet = id => {
    dispatch(deletePet(id));
  };
  return (
    <>
      <PetCardItem>
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
      </PetCardItem>
    </>
  );
};

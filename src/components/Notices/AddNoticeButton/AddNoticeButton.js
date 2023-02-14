import {
  AddNotice,
  AddNoticeButtonText,
  BsPlusLgButton,
  BsPlusLgButtonContainer,
} from './AddNoticeButton.styled';

function AddNoticeButton({ onClick }) {
  return (
    <AddNotice onClick={onClick}>
      <BsPlusLgButtonContainer>
        <BsPlusLgButton />
      </BsPlusLgButtonContainer>
      <AddNoticeButtonText>Add pet</AddNoticeButtonText>
    </AddNotice>
  );
}

export default AddNoticeButton;

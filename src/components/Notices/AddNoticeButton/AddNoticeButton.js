import { AddNotice } from './AddNoticeButton.styled';
import { BsPlusLg } from 'react-icons/bs';

function AddNoticeButton({ onClick }) {
  return (
    <AddNotice onClick={onClick}>
      <BsPlusLg style={{ width: 32, height: 32, color: 'white' }} />
      <p style={{ color: 'white' }}>Add pet</p>
    </AddNotice>
  );
}

export default AddNoticeButton;

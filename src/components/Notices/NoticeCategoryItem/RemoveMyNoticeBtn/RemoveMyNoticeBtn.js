import { ReactComponent as RemoveFavorite } from './remove.svg';
import { Button } from './RemoveMyNoticeBtn.styled';

export const RemoveMyNoticeBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <span>
        Delete
        <RemoveFavorite />
      </span>
    </Button>
  );
};

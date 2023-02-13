import { ReactComponent as RemoveFavorite } from './remove.svg';
import { Button } from './FavoriteBtn.styled';

export const RemoveFavoriteBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <span>
        Delete
        <RemoveFavorite />
      </span>
    </Button>
  );
};

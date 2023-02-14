import { ReactComponent as RemoveFavorite } from './remove.svg';
import { Button } from './FavoriteBtn.styled';

export const RemoveFavoriteBtn = ({ favorite, onClick }) => {
  return (
    <Button type="button" isFavorite={favorite} onClick={onClick}>
      <span>
        Delete
        <RemoveFavorite />
      </span>
    </Button>
  );
};

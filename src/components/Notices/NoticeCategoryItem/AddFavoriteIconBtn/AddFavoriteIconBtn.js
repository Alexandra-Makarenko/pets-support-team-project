import { ReactComponent as Favorite } from './favorite.svg';
import { Button } from './AddFavoriteIconBtn.styled';

export const AddFavoriteIconBtn = ({ favorite, onClick }) => {
  return (
    <Button type="button" isFavorite={favorite} onClick={onClick}>
      <span>
        <Favorite />
      </span>
    </Button>
  );
};

import { ReactComponent as Favorite } from './favorite.svg';
import { Button } from './AddFavoriteIconBtn.styled';

export const AddFavoriteIconBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <span>
        <Favorite />
      </span>
    </Button>
  );
};

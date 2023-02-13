import { useSelector, useDispatch } from 'react-redux';
import {
  getNotices,
  getCategoryFilter,
  getSearchValueFilter,
  getFavoriteNotices,
} from 'redux/notices/selectors';
import { PetsListSection, PetsList } from './NoticesCategoryList.styled';
import { useEffect } from 'react';
import { fetchNotices, fetchFavoriteNotices } from 'redux/notices/operations';
import { useLocation } from 'react-router-dom';
import { setStatusFilter } from 'redux/notices/filtersSlice';
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { useAuth } from 'hooks/useAuth';

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const pets = useSelector(getNotices);
  const favoritePets = useSelector(getFavoriteNotices);

  // console.log('pets', pets);
  // console.log('favoritePets', favoritePets);

  const categoryFilter = useSelector(getCategoryFilter);
  const searchValue = useSelector(getSearchValueFilter);
  const location = useLocation();

  useEffect(() => {
    dispatch(setStatusFilter(location.pathname));
  }, [dispatch, location.pathname]);

  let category = 'sell';

  if (categoryFilter === '/notices/lost-found') {
    category = 'lost-found';
  } else if (categoryFilter === '/notices/sell') {
    category = 'sell';
  } else if (categoryFilter === '/notices/in-good-hands') {
    category = 'in-good-hands';
  } else if (categoryFilter === '/notices/favorite') {
    category = 'favorite';
  } else if (categoryFilter === '/notices/own') {
    category = 'mynotices';
  } else {
    console.log('no category');
  }

  useEffect(() => {
    dispatch(fetchNotices({ category, searchValue }));
    if (!isLoggedIn) return;
    dispatch(fetchFavoriteNotices({ searchValue }));
  }, [dispatch, category, searchValue, isLoggedIn]);

  return (
    <>
      <PetsListSection>
        <PetsList>
          {categoryFilter !== '/notices/favorite'
            ? pets.map((pet, idx) => (
                <NoticeCategoryItem
                  key={idx}
                  pet={pet}
                  favoritePets={favoritePets}
                />
              ))
            : favoritePets.map((pet, idx) => (
                <NoticeCategoryItem
                  key={idx}
                  pet={pet}
                  favoritePets={favoritePets}
                />
              ))}
        </PetsList>
      </PetsListSection>
    </>
  );
};

export default NoticesCategoryList;

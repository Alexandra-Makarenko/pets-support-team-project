import { useSelector, useDispatch } from 'react-redux';
import {
  getNotices,
  getCategoryFilter,
  getSearchValueFilter,
} from 'redux/notices/selectors';
import { PetsListSection, PetsList } from './NoticesCategoryList.styled';
import { useEffect } from 'react';
import { fetchNotices } from 'redux/notices/operations';
import { useLocation } from 'react-router-dom';
import { setStatusFilter } from 'redux/notices/filtersSlice';
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const pets = useSelector(getNotices);
  const categoryFilter = useSelector(getCategoryFilter);
  const searchValue = useSelector(getSearchValueFilter);
  const location = useLocation();

  let category = '';

  useEffect(() => {
    dispatch(setStatusFilter(location.pathname));
  }, [dispatch, location.pathname]);

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
    category = 'sell';
  }

  useEffect(() => {
    dispatch(fetchNotices({ category, searchValue }));
  }, [dispatch, category, searchValue]);

  return (
    <PetsListSection>
      <PetsList>
        {pets.map((pet, idx) => (
          <NoticeCategoryItem key={idx} pet={pet} />
        ))}
      </PetsList>
    </PetsListSection>
  );
};

export default NoticesCategoryList;

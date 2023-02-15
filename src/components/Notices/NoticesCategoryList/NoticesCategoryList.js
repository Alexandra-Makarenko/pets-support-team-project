import { useSelector, useDispatch } from 'react-redux';
import {
  getNotices,
  getCategoryFilter,
  getSearchValueFilter,
  getFavoriteNotices,
  getNoticesIsLoading,
} from 'redux/notices/selectors';
import { PetsListSection, PetsList } from './NoticesCategoryList.styled';
import { useEffect, useState } from 'react';
import { fetchNotices, fetchFavoriteNotices } from 'redux/notices/operations';
import { useLocation } from 'react-router-dom';
import { setStatusFilter } from 'redux/notices/filtersSlice';
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { useAuth } from 'hooks/useAuth';
import { LoadMore } from 'components/LoadMore/LoadMore';

const NoticesCategoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  const pets = useSelector(getNotices);

  const favoritePets = useSelector(getFavoriteNotices);
  const isLoading = useSelector(getNoticesIsLoading);

  const categoryFilter = useSelector(getCategoryFilter);
  const searchValue = useSelector(getSearchValueFilter);
  const location = useLocation();

  let category = '';

  const onLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    dispatch(setStatusFilter(location.pathname));
  }, [dispatch, location.pathname]);

  useEffect(() => {
    if (!pets) {
      return;
    }
    setTotalPages(pets.total_pages);
  }, [pets]);

  const showLoadMoreButton = () => {
    if (currentPage < totalPages) {
      if (isLoading === false) {
        return <LoadMore onLoadMore={onLoadMore} ButtonText={'Load More'} />;
      } else return <p>Loading...</p>;
    }
    return;
  };

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
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    dispatch(fetchNotices({ category, searchValue, currentPage }));
    if (!isLoggedIn) return;
    dispatch(fetchFavoriteNotices({ searchValue }));
  }, [dispatch, category, searchValue, isLoggedIn, currentPage]);

  const result =
    categoryFilter !== '/notices/favorite'
      ? pets?.notices?.map((pet, idx) => (
          <NoticeCategoryItem
            key={idx}
            pet={pet}
            favoritePets={favoritePets}
            user={user}
            categoryFilter={categoryFilter}
          />
        ))
      : favoritePets?.map((pet, idx) => (
          <NoticeCategoryItem
            key={idx}
            pet={pet}
            favoritePets={favoritePets}
            user={user}
            categoryFilter={categoryFilter}
          />
        ));
  return (
    <>
      <PetsListSection>
        <PetsList>{result}</PetsList>
        {showLoadMoreButton()}
      </PetsListSection>
    </>
  );
};

export default NoticesCategoryList;

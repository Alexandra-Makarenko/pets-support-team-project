// import { Loader } from 'components/Loader/Loader';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { NoticeCategoryItem } from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem';
import {
  PetsList,
  PetsListSection,
} from 'components/Notices/NoticesCategoryList/NoticesCategoryList.styled';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFavoriteNotices,
  getSearchValueFilter,
} from 'redux/notices/selectors';
import { fetchOwnerNoticeData } from 'redux/owner/ownerNoticesOperations';
import {
  // getOwnerNoticeLoading,
  getOwnerNoticesData,
} from 'redux/owner/selectors';
// import { OwnerNoticesPlaceholderContainer } from '../OwnerInfo/OwnerInfo.styled';

export const OwnerNoticeList = ({ id }) => {
  const dispatch = useDispatch();

  // const isNoticeLoading = useSelector(getOwnerNoticeLoading);
  useEffect(() => {
    dispatch(fetchOwnerNoticeData(id));
  }, [dispatch, id]);
  const ownerNotices = useSelector(getOwnerNoticesData);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const favoritePets = useSelector(getFavoriteNotices);
  const { user } = useAuth();
  console.log(user);

  const searchValue = useSelector(getSearchValueFilter);

  const onLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!ownerNotices) {
      return;
    }
    setTotalPages(ownerNotices.total_pages);
  }, [ownerNotices]);

  const showLoadMoreButton = () => {
    if (currentPage < totalPages) {
      return <LoadMore onLoadMore={onLoadMore} ButtonText={'Load More'} />;
    }
    return null;
  };

  useEffect(() => {
    dispatch(fetchOwnerNoticeData({ id, searchValue, currentPage }));
  }, [dispatch, searchValue, currentPage, id]);

  const result = ownerNotices?.notices?.map((pet, idx) => (
    <NoticeCategoryItem
      key={idx}
      pet={pet}
      favoritePets={favoritePets}
      user={{
        dateofbirth: null,
        email: null,
        name: null,
        password: null,
        phone: null,
        place: null,
      }}
    />
  ));
  return (
    <>
      {
        <PetsListSection>
          <PetsList>{result}</PetsList>
          {showLoadMoreButton()}
        </PetsListSection>
      }
    </>
  );
};

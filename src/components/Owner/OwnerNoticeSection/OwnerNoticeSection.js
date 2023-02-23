import { Container } from 'components/Container/Container';
// import { ModalAddNotice } from 'components/Modals/ModalAddNotice/ModalAddNotice';
import { PagesTitle } from 'components/PagesTitle/PagesTitle';
import { SearchForm } from 'components/Search/SearchForm';
import { SearchNotFound } from 'components/SearchNotFound/SearchNotFound';
import { TitleBox } from 'pages/NoticesPage/NoticesPage.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setSearch } from 'redux/notices/filtersSlice';
import {
  getOwnerNoticeLoading,
  getOwnerNoticesData,
  getOwnerNoticesError,
} from 'redux/owner/selectors';

const OwnerNoticeSection = () => {
  //   const [isAddNoticeOpen, setIsAddNoticeOpen] = useState(false);
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  const isLoading = useSelector(getOwnerNoticeLoading);
  const notices = useSelector(getOwnerNoticesData);
  const error = useSelector(getOwnerNoticesError);
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(searchValue));
  }, [dispatch, searchValue]);

  //   const toggleAddNoticeModal = () => {
  //     setIsAddNoticeOpen(!isAddNoticeOpen);
  //   };

  return (
    <>
      <TitleBox>
        <PagesTitle>Find your favorite pet</PagesTitle>
      </TitleBox>
      <SearchForm
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        mbtn={{ mobile: 28, rest: 40 }}
      />

      {error &&
        !isLoading &&
        toast.warn(`Something wrong, please try again later: ${error}`, {
          position: toast.POSITION.TOP_CENTER,
        })}
      {!isLoading && notices.total_results === 0 && searchValue && (
        <SearchNotFound padding searchValue={searchValue} />
      )}

      {/* <Suspense fallback={<div>Loading subpage...</div>}>
        {isAddNoticeOpen && (
          <ModalAddNotice
            onClick={toggleAddNoticeModal}
            isOpen={isAddNoticeOpen}
          />
        )}

        <Outlet />
      </Suspense> */}
    </>
  );
};

export default OwnerNoticeSection;

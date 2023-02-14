import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm } from 'components/Search/SearchForm';
import { Container } from '../../components/Container/Container';
import { NoticesCategoriesNav } from '../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { NavBox, TitleBox } from './NoticesPage.styled';
import { Loader } from 'components/Loader/Loader';
import {
  getNoticesIsLoading,
  getNoticesError,
  getNotices,
} from 'redux/notices/selectors';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import AddNoticeButton from 'components/Notices/AddNoticeButton/AddNoticeButton';
import { ModalAddNotice } from 'components/Modals/ModalAddNotice/ModalAddNotice';
import { SearchNotFound } from 'components/SearchNotFound/SearchNotFound';
import { setSearch } from 'redux/notices/filtersSlice';

const NoticesPage = () => {
  const [isAddNoticeOpen, setIsAddNoticeOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isLoading = useSelector(getNoticesIsLoading);
  const noties = useSelector(getNotices);
  const error = useSelector(getNoticesError);
  const [searchValue, setSearchValue] = useState('');
  if (searchValue !== '') {
    console.log('need to fetch and filter by searchValue');
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(searchValue));
  }, [dispatch, searchValue]);

  const toggleAddNoticeModal = () => {
    setIsAddNoticeOpen(!isAddNoticeOpen);
  };
  const logify = text =>
    toast.warn('You need to log in to use this function!', {
      position: toast.POSITION.TOP_CENTER,
    });

  return (
    <Container>
      <TitleBox>
        <PagesTitle>Find your favorite pet</PagesTitle>
      </TitleBox>
      <SearchForm
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        mbtn={{ mobile: 28, rest: 40 }}
      />

      <NavBox>
        <NoticesCategoriesNav />
        <AddNoticeButton onClick={isLoggedIn ? toggleAddNoticeModal : logify} />
      </NavBox>

      {isLoading && !error && <Loader />}
      {error &&
        !isLoading &&
        toast.warn(`Something wrong, please try again later: ${error}`, {
          position: toast.POSITION.TOP_CENTER,
        })}
      {!isLoading && noties.length === 0 && searchValue && (
        <SearchNotFound padding searchValue={searchValue} />
      )}

      <Suspense fallback={<div>Loading subpage...</div>}>

        {isAddNoticeOpen && (
          <ModalAddNotice
            onClick={toggleAddNoticeModal}
            isOpen={isAddNoticeOpen}
          />
        )}

        <Outlet />
      </Suspense>
    </Container>
  );
};

export default NoticesPage;

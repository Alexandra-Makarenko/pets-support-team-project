import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm } from 'components/Search/SearchForm';
import { Container } from '../../components/Container/Container';
import { NoticesCategoriesNav } from '../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { NavBox, TitleBox } from './NoticesPage.styled';
import { Loader } from 'components/Loader/Loader';
import { getNoticesIsLoading, getNoticesError } from 'redux/notices/selectors';
import AddNoticeButton from 'components/Notices/AddNoticeButton/AddNoticeButton';
import { ModalAddNotice } from 'components/Modals/ModalAddNotice/ModalAddNotice';
const NoticesPage = () => {
  const [isAddNoticeOpen, setIsAddNoticeOpen] = useState(false);

  const isLoading = useSelector(getNoticesIsLoading);
  const error = useSelector(getNoticesError);

  const toggleAddNoticeModal = () => {
    setIsAddNoticeOpen(!isAddNoticeOpen);
    console.log(isAddNoticeOpen);
  };

  return (
    <Container>
      <TitleBox>
        <PagesTitle>Find your favorite pet</PagesTitle>
      </TitleBox>
      <SearchForm mbtn={{ mobile: 28, rest: 40 }} />
      <NavBox>
        <NoticesCategoriesNav />
        <AddNoticeButton onClick={toggleAddNoticeModal} />
      </NavBox>

      {isLoading && !error && <Loader />}
      {error &&
        !isLoading &&
        toast.error(`Something wrong, please try again later: ${error}`)}
      <Suspense fallback={<div>Loading subpage...</div>}>
        {isAddNoticeOpen && <ModalAddNotice onClick={toggleAddNoticeModal} />}

        <Outlet />
      </Suspense>
    </Container>
  );
};

export default NoticesPage;

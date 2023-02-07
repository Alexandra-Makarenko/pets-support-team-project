import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NoticesSearch } from '../../components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from '../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { AddNoticeButton } from '../../components/Notices/AddNoticeButton/AddNoticeButton';
import { NavBox, TitleBox } from './NoticesPage.styled';



const NoticesPage = () => {
  return (
    <main>
      <TitleBox>
        <PagesTitle>Find your favorite pet</PagesTitle>
      </TitleBox>
      <NoticesSearch />
      <NavBox>
        <NoticesCategoriesNav />
        <AddNoticeButton />       
      </NavBox>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default NoticesPage;

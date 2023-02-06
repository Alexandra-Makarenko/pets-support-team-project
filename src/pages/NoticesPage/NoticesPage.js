import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NoticesSearch } from '../../components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from '../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';

const NoticesPage = () => {
  return (
    <main>
      <PagesTitle>Find your favorite pet</PagesTitle>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default NoticesPage;

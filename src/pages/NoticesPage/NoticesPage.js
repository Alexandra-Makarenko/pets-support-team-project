
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NoticesSearch } from "../../components/Notices/NoticesSearch/NoticesSearch";
import { NoticesCategoriesNav } from "../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";


const NoticesPage = () => {
  return (
    <main>
      <h1>Find your favorite pet</h1>
      <NoticesSearch />
      <NoticesCategoriesNav />     
      <Suspense fallback={<div>Loading subpage...</div>}>        
        <Outlet />
      </Suspense>
    </main>
  );
};

export default NoticesPage;

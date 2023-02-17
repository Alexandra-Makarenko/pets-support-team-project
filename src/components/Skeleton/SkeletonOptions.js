import { FriendItem } from 'components/Friends/OurFriendItem/OurFriendItem.styled';
import { FriendsList } from 'components/Friends/OurFriends/OurFriends.styled';
import { Item } from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem.styled';
import {
  PetsList,
  PetsListSection,
} from 'components/Notices/NoticesCategoryList/NoticesCategoryList.styled';
import { nanoid } from 'nanoid';
import {
  News,
  SkeletonItem,
} from 'pages/NewsPage/components/styles/NewsStyles';

export function SkeletonNewsLoader({ children }) {
  return (
    <News>
      {Array(6)
        .fill(true)
        .map(_ => (
          <SkeletonItem key={nanoid()}>{children}</SkeletonItem>
        ))}
    </News>
  );
}

export function SkeletonNoticesLoader({ children }) {
  return (
    <PetsListSection>
      <PetsList>
        {Array(8)
          .fill(true)
          .map(_ => (
            <Item key={nanoid()}>{children}</Item>
          ))}
      </PetsList>
    </PetsListSection>
  );
}

export function SkeletonFriendsLoader({ children }) {
  return (
    <FriendsList>
      {Array(9)
        .fill(true)
        .map(_ => (
          <FriendItem key={nanoid()}>{children}</FriendItem>
        ))}
    </FriendsList>
  );
}

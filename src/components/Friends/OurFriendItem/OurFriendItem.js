import { useState } from 'react';
import {
  FriendTitle,
  FriendContentWrapper,
  FriendText,
  FriendTime,
  FriendItem,
  FriendLink,
  TextWrapper,
  FriendImg,
  ImgWrapper,
  HoursOfWeek,
  HoursWrapper,
} from './OurFriendItem.styled.js';

import { getHours } from 'components/Friends/services';
import defaultImage from 'data/default-image_550.png';

const NO_INFO_STRING = '----------------';

export const OurFriendItem = ({
  title,
  url,
  imageUrl,
  workDays,
  address,
  email,
  phone,
}) => {
  const [isHours, setIsHours] = useState(false);

  const handleClick = () => {
    setIsHours(!isHours);
  };

  const windowHeight = document.documentElement.clientHeight;
  const windowWidth = document.documentElement.clientWidth;

  console.log(`width=${windowWidth},height=${windowHeight}`);

  const { hoursToday, hoursOfWeek } = getHours(workDays, NO_INFO_STRING);
  return (
    <FriendItem>
      <FriendTitle>
        {/* <FriendLink onClick={() => setModalUrl(url)}>{title}</FriendLink> */}
        <FriendLink
          onClick={() =>
            window.open(
              url,
              title,
              `width=${windowWidth - 64},height=${
                windowHeight - 64
              },left=32,top=32`
            )
          }
        >
          {title}
        </FriendLink>
      </FriendTitle>
      <FriendContentWrapper>
        <ImgWrapper>
          <FriendImg
            src={imageUrl ?? defaultImage}
            alt={title}
            loading="lazy"
          />
        </ImgWrapper>
        <TextWrapper>
          <HoursWrapper>
            <FriendTime isHours={!!hoursOfWeek} onClick={() => handleClick()}>
              Time:
              <br />
              {hoursToday}
            </FriendTime>
            {hoursOfWeek && (
              <HoursOfWeek isOpen={isHours}>{hoursOfWeek}</HoursOfWeek>
            )}
          </HoursWrapper>
          <FriendText>
            Address:
            <br />
            {address ?? NO_INFO_STRING}
          </FriendText>
          <FriendText>
            Email:
            <br />
            {email ?? NO_INFO_STRING}
          </FriendText>
          <FriendText>
            Phone:
            <br />
            {phone ?? NO_INFO_STRING}
          </FriendText>
        </TextWrapper>
      </FriendContentWrapper>
    </FriendItem>
  );
};

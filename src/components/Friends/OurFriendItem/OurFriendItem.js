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
  // HoursItem,
} from './OurFriendItem.styled.js';

import getHours from './getHours';
import defaultImage from 'data/default-image_550.png';

const NO_INFO_STRING = '---------------';

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

  const { hoursToday, hoursOfWeek } = getHours(workDays, NO_INFO_STRING);

  return (
    <FriendItem>
      <FriendTitle>
        <FriendLink href={url}>{title}</FriendLink>
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

// export default OurFriendItem;
/*
    "title": "Притулок для бездомних тварин 'Сіріус'",
    "url": "https://dogcat.com.ua",
    "addressUrl": "https://goo.gl/maps/iq8NXEUf31EAQCzc6",
    "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png",
    "address": "Fedorivka, Kyiv Oblast, Ukraine, 07372",
    "workDays": [
      { "isOpen": false },
      { "isOpen": false },
      { "isOpen": false },
      { "isOpen": false },
      { "isOpen": false },
      { "isOpen": true, "from": "11:00", "to": "16:00" },
      { "isOpen": true, "from": "11:00", "to": "16:00" }
    ],
    "phone": "+380931934069",
    "email": null
  },
 */

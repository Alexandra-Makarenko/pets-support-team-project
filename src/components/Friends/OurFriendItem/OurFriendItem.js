import {
  FriendTitle,
  FriendContentWrapper,
  FriendText,
  FriendItem,
  FriendLink,
  TextWrapper,
  FriendImg,
  ImgWrapper
} from "./OurFriendItem.styled.js";

import defaultImage from "data/default-image_550.png";

const NOT_INFO_STRING = '---------------';

function getHoursToday(workDays) {
  // workDays - Array of Work hours by Days of week 
  if (!workDays || !workDays.length) {
    return NOT_INFO_STRING;
  };

  const workToDay = workDays[new Date().getDate()];
  const hoursToday = !workToDay.isOpen ? NOT_INFO_STRING : workToDay.from.concat('-', workToDay.to);

  return hoursToday;
};

export const OurFriendItem = ({ title, url, imageUrl, workDays, address, email, phone }) => {
  const hoursToday = getHoursToday(workDays);

  return (
    <FriendItem>
      <FriendTitle><FriendLink href={url}>{title}</FriendLink></FriendTitle>
      <FriendContentWrapper>
        <ImgWrapper>
          <FriendImg src={imageUrl?? defaultImage} alt={title} loading="lazy" />
        </ImgWrapper>
        <TextWrapper>
          <FriendText>Time:<br/>{hoursToday}</FriendText>
          <FriendText>Address:<br/>{address ?? NOT_INFO_STRING}</FriendText>
          <FriendText>Email:<br/>{email ?? NOT_INFO_STRING}</FriendText>
          <FriendText>Phone:<br/>{phone ?? NOT_INFO_STRING}</FriendText>
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
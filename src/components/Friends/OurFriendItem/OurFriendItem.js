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
  TextLink,
} from './OurFriendItem.styled.js';

import { getHours } from 'components/Friends/services';
import defaultImage from 'data/default-image_550.png';

const NO_INFO_STRING = '----------------'; //
const TODAY_CLOSED_STRING = '- today closed -';

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

  const { hoursToday, hoursOfWeek } = getHours(
    workDays,
    NO_INFO_STRING,
    TODAY_CLOSED_STRING
  );

  return (
    <FriendItem>
      <FriendTitle>
        {!!url && (
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
        )}
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
            {!!address ? (
              <TextLink
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/${address}`,
                    title,
                    `width=${windowWidth - 64},height=${
                      windowHeight - 64
                    },left=32,top=32`
                  )
                }
              >
                {address}
              </TextLink>
            ) : (
              NO_INFO_STRING
            )}
          </FriendText>
          <FriendText>
            Email:
            <br />
            {!!email ? (
              // <TextLink as="a" href={`mailto:${email}`}>
              //   {email}
              // </TextLink>
              <TextLink
                onClick={() =>
                  window.open(
                    `mailto:${email}`,
                    title,
                    `width=${windowWidth - 64},height=${
                      windowHeight - 64
                    },left=32,top=32`
                  )
                }
              >
                {email}
              </TextLink>
            ) : (
              NO_INFO_STRING
            )}
          </FriendText>
          <FriendText>
            Phone:
            <br />
            {!!phone ? (
              <TextLink as="a" href={`tel:${phone}`}>
                {phone}
              </TextLink>
            ) : (
              NO_INFO_STRING
            )}
          </FriendText>
        </TextWrapper>
      </FriendContentWrapper>
    </FriendItem>
  );
};

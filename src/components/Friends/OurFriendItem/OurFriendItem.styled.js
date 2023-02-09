import styled from 'styled-components';

export const FriendItem = styled.li`
  :not(:first-of-type) {
    margin-top: 12px;
  }

  width: 280px;
  min-height: 192px;

  background-color: var(--white-color);
  border-radius: 20px;
  padding: 12px 4px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  @media screen and (min-width: 768px) {
    :not(:first-of-type) {
      margin-top: 0px;
    }

    flex-basis: calc((100% - 16px * 2) / 2);
    gap: 16px;
    /* width: 336px; */
    min-height: 246px;

    padding: 16px 4px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 16px * 4) / 3);
    /* width: 395px; */
    min-height: 287px;
  }
`;

export const FriendTitle = styled.h3`
  font-family: var(--font-base);
  font-size: 12px;
  line-height: 1.35;
  font-weight: 700;
  color: var(--primary-color);
  text-align: center;
  padding: 0 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const FriendLink = styled.a`
  outline: none;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid var(--primary-color);
`;

export const FriendContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const ImgWrapper = styled.div`
  width: 110px;
  height: 78px;
  flex: 0 0 auto;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 85px;
  }

  @media screen and (min-width: 1280px) {
    width: 158px;
    height: 112px;
  }
`;

export const FriendImg = styled.img`
  display: block;
  object-fit: contain;
  object-position: 50% 50%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HoursWrapper = styled.div`
  position: relative;
`;

export const FriendText = styled.p`
  margin-top: 4px;
  /* :not(:first-of-type) {
  } */

  font-family: var(--font-base);
  font-size: 12px;
  line-height: 1.35;

  font-weight: 500;
  color: var(--black-color);

  @media screen and (min-width: 768px) {
    margin-top: 8px;
    /* :not(:first-of-type) {
    } */

    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    /* :not(:first-of-type) {
    } */
    margin-top: 12px;

    font-size: 16px;
  }
`;

export const FriendTime = styled(FriendText)`
  :hover {
    ${p =>
      p.isHours
        ? `color: var(--primary-color);
          cursor: pointer;`
        : 'color: var(--black-color)'};
  }
`;

export const HoursOfWeek = styled.ul`
  ${p =>
    p.isOpen
      ? `display: flex;
      flex-direction: column;
      gap: 4px;`
      : `display: none;`}
  position: absolute;
  top: calc(100% + 3px);
  padding: 12px;
  background-color: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    top: calc(100% + 4px);
  }
`;

export const HoursItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;

  font-family: var(--font-base);
  font-size: 12px;
  line-height: 1.35;

  font-weight: 500;
  color: var(--black-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

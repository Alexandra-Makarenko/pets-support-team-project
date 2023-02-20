import styled from 'styled-components';
import { device } from 'styles/device';

export const UserPetsHeader = styled.h2`
  font-family: 'Manrope500';
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  margin-bottom: 32px;

  @media ${device.tablet} {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 0;
    margin-bottom: 24px;
  }
  @media ${device.desktop} {
    margin-bottom: 24px;
  }
`;

export const PetPhoto = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;
  @media ${device.tablet} {
    width: 161px;
    height: 161px;
    border-radius: 40px;
  }
  @media ${device.desktop} {
  }
`;

export const PetPhotoContainer = styled.div`
  min-width: 240px;
  height: 240px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    min-width: 161px;
    height: 161px;
    margin-right: 32px;
    margin-bottom: 0;
  }
  @media ${device.desktop} {
  }
`;

export const PetCardItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 201px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  width: 280px;
  &:not(:last-child) {
    margin-bottom: 22px;
  }
  padding: 20px;
  @media ${device.tablet} {
    flex-direction: row;
    width: 704px;
  }
  @media ${device.desktop} {
    width: 821px;
  }
`;

export const PetField = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    &:last-child {
      margin-top: 16px;
    }
  }
`;

export const PetFieldName = styled.span`
  font-family: 'Manrope500';
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const PetDescription = styled.span`
  word-break: break-all;
  font-family: 'Manrope400';
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const DeletePetButton = styled.button`
  position: absolute;
  top: 272px;
  right: 20px;
  display: block;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  svg {
    fill: rgba(17, 17, 17, 0.6);
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 20px;
    height: 20px;
  }

  &:hover {
    svg {
      fill: ${props => props.theme.fontColors.buttonSecondary};
    }
  }
  @media ${device.tablet} {
    top: 20px;
    right: 20px;
    background-color: #fdf7f2;
    width: 44px;
    height: 44px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const PetHeaderContainer = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    width: 703px;
  }
  @media ${device.desktop} {
    width: 805px;
  }
`;

export const AddPetHeader = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Manrope500';
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  margin-bottom: 32px;

  @media ${device.tablet} {
    letter-spacing: 0;
    margin-bottom: 24px;
  }
  @media ${device.desktop} {
    margin-bottom: 24px;
  }
`;

export const AddPetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-left: 15px;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.fontColors.buttonSecondary};
  svg {
    fill: #fff;

    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    svg {
      fill: #111;
    }
  }
`;

export const PetPhotoPlaceholder = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background-color: ${props => props.theme.backgrounds.input};
  @media ${device.tablet} {
    width: 162px;
    height: 162px;
    border-radius: 40px;
  }
  @media ${device.desktop} {
  }
`;

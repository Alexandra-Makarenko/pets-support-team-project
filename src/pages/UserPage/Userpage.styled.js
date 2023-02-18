import styled from 'styled-components';
import { device } from 'styles/device';

// @media ${device.tablet} {}
// @media ${device.desktop} {}

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const UserContainer = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;

export const Field = styled.form`
  height: 20px;
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    height: 32px;
  }
  @media ${device.desktop} {
  }
`;

export const MyInfoSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 12px 20px 16px;
  background-color: #fff;
  width: 280px;
  height: fit-content;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  @media ${device.tablet} {
    flex-direction: row-reverse;
    width: 736px;
    border-radius: 0px 40px 40px 0px;
    padding: 24px 40px 24px 32px;
  }
  @media ${device.desktop} {
    flex-direction: column;
    padding: 20px 16px 18px 16px;
    width: 411px;
    border-radius: 0px 40px 40px 0px;
    margin-right: 40px;
  }
`;

export const MyInfoDataSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoHeader = styled.h2`
  font-family: 'Manrope500';
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  margin-left: 20px;
  margin-bottom: 18px;

  @media ${device.tablet} {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 0;
    margin-left: 32px;
    margin-bottom: 40px;
  }
  @media ${device.desktop} {
    margin-left: 17px;
    margin-bottom: 24px;
  }
`;

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

export const FieldName = styled.span`
  display: inline-block;
  font-family: 'Manrope500';
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  width: 64px;
  @media ${device.tablet} {
    width: 107px;
    font-size: 18px;
    line-height: 25px;
  }
  @media ${device.desktop} {
    width: 95px;
  }
`;

export const Value = styled.span`
  word-wrap: break-word;
  display: inline-block;
  font-family: 'Manrope500';
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  width: 150px;
  margin-left: 18px;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 25px;
    width: 228px;
    margin-left: 12px;
  }
  @media ${device.desktop} {
    width: 240px;
  }
`;

export const InputValue = styled.input`
  display: inline-block;
  font-family: 'Manrope500';
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  width: 159px;
  margin-right: 9px;
  padding: 0px 0px 0px 17px;
  height: 20px;
  background-color: ${props => props.theme.backgrounds.input};
  border: 1px solid ${props => props.theme.fontColors.buttonSecondary};
  border-radius: 16px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 25px;
    width: 216px;
    height: 32px;
    margin-right: 24px;
    padding-left: 11px;
  }
  @media ${device.desktop} {
    width: 228px;
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

export const UploadLavel = styled.label`
  cursor: pointer;
  position: absolute;
  top: 265px;
  right: 24px;
  display: flex;
  align-items: center;
  font-family: 'Manrope400';
  letter-spacing: 0.04em;
  font-size: 12px;
  line-height: 22px;
  color: ${props => props.theme.fontColors.buttonPrimary};
  &:hover {
    color: ${props => props.theme.fontColors.buttonSecondary};
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media ${device.tablet} {
    right: 40px;
  }
  @media ${device.desktop} {
    right: 16px;
    top: 231px;
  }
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
  width: 233px;
  height: 233px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 70px;
  object-fit: cover;

  @media ${device.tablet} {
    margin-right: 20px;
    margin-bottom: 0px;
  }
  @media ${device.desktop} {
    margin-right: auto;
    margin-bottom: 36px;
  }
`;

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;

  svg {
    width: 12.5px;
    height: 12.5px;
  }
  border-radius: 50%;
  border: none;
  background-color: #fdf7f2;
  @media ${device.tablet} {
    width: 32px;
    height: 32px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const UserButtonPlaceholder = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  @media ${device.tablet} {
    width: 32px;
    height: 32px;
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

export const PetCard = styled.li`
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

export const LogoutContainer = styled.div`
  @media ${device.preTablet} {
    display: flex;
    justify-content: flex-end;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;

  width: fit-content;
  height: 32px;
  border: none;
  margin-top: 44px;
  background-color: transparent;
  color: rgba(17, 17, 17, 0.6);
  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }
  &:hover {
    color: ${props => props.theme.fontColors.buttonSecondary};
  }
  @media ${device.tablet} {
    margin-top: 33px;
  }
  @media ${device.desktop} {
    margin-top: 24px;
  }
`;

export const DeletePetButton = styled.button`
  position: absolute;
  top: 272px;
  right: 20px;
  display: block;
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

export const UserDataContainer = styled.div`
  margin-bottom: 47px;
  @media ${device.tablet} {
    margin-bottom: 20px;
  }
  @media ${device.desktop} {
    margin-bottom: 0px;
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

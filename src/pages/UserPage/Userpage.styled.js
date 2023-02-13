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
  @media ${device.tablet} {
    height: 32px;
  }
  @media ${device.desktop} {
  }
`;

export const MyInfoSection = styled.section`
  padding: 20px 12px 20px 16px;
  background-color: #fff;
  width: 280px;
  height: fit-content;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  @media ${device.tablet} {
    width: 736px;
    border-radius: 0px 40px 40px 0px;
  }
  @media ${device.desktop} {
    padding: 20px 16px 18px 16px;
    width: 411px;
    border-radius: 0px 40px 40px 0px;
    margin-right: 40px;
  }
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
  background-color: #f5925680;
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
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const UploadLavel = styled.label`
  cursor: pointer;
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
`;

export const UserButton = styled.button`
  width: 20px;
  height: 20px;
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

export const PetPhoto = styled.img`
  width: 161px;
  height: 161px;
  border-radius: 40px;
`;

export const PetPhotoContainer = styled.div`
  width: 161px;
  height: 161px;
  margin-right: 32px;
`;

export const PetCard = styled.li`
  display: flex;
  min-height: 201px;
  width: 821px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  &:not(:last-child) {
    margin-bottom: 22px;
  }
  padding: 20px;
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
  font-family: 'Manrope400';
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const LogoutButton = styled.button`
  height: 32px;
  border: none;
  background-color: transparent;
  &:hover {
    color: ${props => props.theme.fontColors.buttonSecondary};
  }
`;

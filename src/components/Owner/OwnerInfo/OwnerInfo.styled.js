import styled from 'styled-components';
import { device } from 'styles/device';

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

export const OwnerNoticesPlaceholderContainer = styled.div`
  width: fit-content;
  height: 100vh;
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

export const HiddenInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
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

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  font-family: 'Manrope500';
  font-size: 16px;
  letter-spacing: 0.04em;
  border: none;

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
`;

export const LogoutContainer = styled.div`
  @media ${device.preTablet} {
    display: flex;
    justify-content: flex-end;
  }
  margin-top: 44px;
  @media ${device.tablet} {
    margin-top: 33px;
  }
  @media ${device.desktop} {
    margin-top: 24px;
  }
`;

export const MyInfoDataSection = styled.div`
  display: flex;
  flex-direction: column;
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
    width: 676px;
    border-radius: 40px;
    padding: 24px 40px 24px 32px;
  }
  @media ${device.desktop} {
  }
`;

export const UploadLabel = styled.label`
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

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

export const UserButtonDisabled = styled.button`
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

export const UserDataContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
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

export const UserPhoto = styled.img`
  border-radius: 50%;
  width: 233px;
  height: 233px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 70px;
  object-fit: cover;

  @media ${device.tablet} {
    margin-right: 0px;
    margin-bottom: 0px;
  }
  @media ${device.desktop} {
  }
`;

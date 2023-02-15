import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { device } from 'styles/device';
import { BsPlusLg } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { IoMdFemale, IoMdMale } from 'react-icons/io';

export const FormError = ({ name, message }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
const ErrorText = styled.p`
  font-family: 'Manrope400';
  display: block;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.04em;
  margin-top: 4px;
  color: red;
`;

export const AddNoticeModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const AddNoticeModalWindow = styled.div`
  position: fixed;
  background-color: ${props => props.theme.backgrounds.input};
  overflow: auto;
  width: 280px;
  max-height: 100vh;
  padding: 40px 20px 40px 20px;
  border-radius: 20px;
  @media ${device.tablet} {
    width: 608px;
    padding: 40px 80px 40px 80px;
  }
`;
export const ModalButtonSection = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 40px;
    justify-content: center;
  }
`;
export const ModalTitle = styled.label`
  margin-bottom: 40px;
  font-family: 'Manrope700';
  font-size: 24px;
  line-height: 33px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  color: ${props => props.theme.fontColors.primary};

  @media ${device.tablet} {
    font-family: 'Manrope500';
    font-size: 36px;
    line-height: 49px;
  }
`;

export const ModalFormInput = styled(Field)`
  display: block;
  font-family: 'Manrope400';
  font-size: 14px;
  line-height: 19px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  width: 100%;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-bottom: 16px;
  margin-top: 8px;
  color: ${props => props.theme.fontColors.inputTextColor};
  outline: none;
  background-color: ${props => props.theme.backgrounds.input};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  @media ${device.tablet} {
    font-family: 'Manrope400';
    font-size: 16px;
    line-height: 26px;
    padding-top: 11px;
    padding-bottom: 16px;
    padding-left: 32px;
  }
`;
export const ModalDateField = styled(Field)`
  display: block;
  font-family: 'Manrope400';
  font-size: 14px;
  line-height: 19px;
  line-height: 19px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  width: 100%;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-bottom: 16px;
  margin-top: 8px;
  color: ${props => props.theme.fontColors.inputTextColor};
  outline: none;
  background-color: ${props => props.theme.backgrounds.input};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
`;

export const ModalTextArea = styled(Field)`
  display: block;
  font-family: 'Manrope400';
  font-size: 14px;
  line-height: 19px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  width: 100%;
  resize: none;
  margin-top: 16px;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 14px;
  color: ${props => props.theme.fontColors.inputTextColor};
  outline: none;
  background-color: ${props => props.theme.backgrounds.input};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  @media ${device.tablet} {
    font-family: 'Manrope400';
    font-size: 18px;
    line-height: 25px;
    padding-top: 14px;
    padding-bottom: 13px;
    padding-left: 32px;
  }

  @media ${device.desktop} {
  }
`;

export const NextFormModalBtn = styled.button`
  font-family: 'Manrope500';
  margin-top: ${props => (props.currentStep === 0 ? '40px' : '28px')};
  width: 100%;
  color: ${props => props.theme.fontColors.white};
  /* background-color: ${props => props.theme.backgrounds.buttonPrimary}; */
  background-color: ${props =>
    props.disabled ? '#A0A0A0' : props.theme.backgrounds.buttonPrimary};
  border-radius: 40px;
  padding-top: 8.5px;
  padding-bottom: 8.5px;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${props => (props.currentStep === 0 ? '40px' : '28px')}
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.9);
  }
  @media ${device.tablet} {
    margin-top: 0px;
    width: 180px;
  }
`;

export const BackFormModalBtn = styled.button`
  font-family: 'Manrope500';
  margin-top: 12px;
  margin-bottom: 20px;
  width: 100%;
  color: ${props => props.theme.fontColors.secondary};
  background-color: ${props => props.theme.backgrounds.bodyPrimary};
  border: 2px solid #f59256;
  border-radius: 40px;
  padding-top: 8.5px;
  padding-bottom: 8.5px;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  outline: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  @media ${device.tablet} {
    width: 180px;
    margin-bottom: 0px;
    margin-top: 0px;
    margin-right: 20px;
  }
`;

export const ModalBoxText = styled.div`
  margin-top: 40px;
`;

export const ModalRadio = styled(Field).attrs({ type: 'radio' })`
  opacity: 0;
  position: fixed;
  width: 0;
  margin-left: 15px;
  display: inline-block;
  border-radius: 50%;
  outline: none;
`;

export const ModalRadioCategoriesTitle = styled.label`
  font-family: 'Manrope500';
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  white-space: nowrap;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  padding: 8px 28px 8px 28px;
  border-radius: 40px;
  border: 2px solid #f59256;
  cursor: pointer;
  margin-right: 8px;
  margin-bottom: 8px;
  ${ModalRadio}:checked + && {
    background-color: #f59256;
    color: #ffffff;
  }
`;

export const ModalHeader = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;
export const ModalText = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalLabel = styled.label`
  display: flex;
  font-family: 'Manrope500';
  font-size: 18px;
  line-height: 27px;
`;

export const CategoriesOfAdd = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ModalRadioSexTitle = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Manrope500';
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0px;

  white-space: nowrap;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  padding: 8px 28px 8px 28px;

  cursor: pointer;
  margin-right: 40px;
  margin-bottom: 8px;
  ${ModalRadio}:checked + && {
    color: #f59256;
  }
  &:hover {
    color: #f59256;
  }
`;

export const ModalRadioSex = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const ModalFileInput = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
`;

export const BsPlusLgModal = styled(BsPlusLg)`
  width: 70px;
  height: 70px;
  color: grey;
  &:hover {
    color: #f59256;
  }
`;

export const ModalImageBlock = styled.div`
  margin-top: 8px;
  margin-bottom: 30px;
  padding: 20px;
`;

export const RxCross1Modal = styled(RxCross1)`
  width: 28px;
  height: 28px;
  color: grey;
  &:hover {
    color: #f59256;
  }
`;
export const ModalCrossClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 4px;
  background-color: #ffffff;
  border: none;
`;

export const IoMdMaleModal = styled(IoMdMale)`
  width: 40px;
  height: 40px;
  color: #23c2ef;
  @media ${device.tablet} {
    width: 60px;
    height: 60px;
  }
`;
export const IoMdFemaleModal = styled(IoMdFemale)`
  width: 40px;
  height: 40px;
  color: #ff8787;
  @media ${device.tablet} {
    width: 60px;
    height: 60px;
  }
`;

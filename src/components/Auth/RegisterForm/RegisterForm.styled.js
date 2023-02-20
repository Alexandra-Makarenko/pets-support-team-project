import styled from 'styled-components';
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';
import register_bg_step1_mob from '../../../assets/images/bg-pictures/mobile/register_bg_step1_mob.png';
import register_bg_step2_mob from '../../../assets/images/bg-pictures/mobile/register_bg_step2_mob.png';
import tablet_vector_1 from '../../../assets/images/bg-pictures/tablet/tablet_vector_1.png';
import tablet_vector_2 from '../../../assets/images/bg-pictures/tablet/tablet_vector_2.png';
import tablet_vector_3 from '../../../assets/images/bg-pictures/tablet/tablet_vector_3.png';
import tablet_vector_4 from '../../../assets/images/bg-pictures/tablet/tablet_vector_4.png';
import tablet_vector_5 from '../../../assets/images/bg-pictures/tablet/tablet_vector_5.png';
import tablet_vector_6 from '../../../assets/images/bg-pictures/tablet/tablet_vector_6.png';
import desktop_vector_1 from '../../../assets/images/bg-pictures/desktop/desktop_vector_1.png';
import desktop_vector_2 from '../../../assets/images/bg-pictures/desktop/desktop_vector_2.png';
import desktop_vector_3 from '../../../assets/images/bg-pictures/desktop/desktop_vector_3.png';
import { device } from 'styles/device';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';

export const PhoneInputField = props => {
  return (
    <PhoneInput
      regions={['europe']}
      country="ua"
      value={props.value}
      onChange={props.onChange}
      inputStyle={{
        fontFamily: 'Manrope400',
        color: 'rgba(17, 17, 17, 0.6)',
        letterSpacing: '0.04em',
        width: '200px',
        background: '#FDF7F2',
        outline: 0,
        border: 0,
        padding: 0,
        margin: 0,
        height: '100%',
        left: '48px',
      }}
      containerStyle={{
        marginTop: '16px',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '10px',
        background: '#FDF7F2',
        border: '1px solid rgba(245, 146, 86, 0.5)',
        borderRadius: '40px',
        textAlign: 'left',
      }}
      buttonStyle={{
        background: '#FDF7F2',
        border: 0,
        color: 'rgba(17, 17, 17, 0.6)',
        borderRadius: '50%',
      }}
      dropdownStyle={{
        height: '200px',
        color: '#000000',
        background: '#FDF7F2',
        textAlign: 'left',
        borderRadius: '6px',
      }}
    />
  );
};

export const SectionRegisterForm = styled.section`
  min-height: calc(100vh - 100px);

  background-color: ${props => props.theme.backgrounds.input};

  background-image: ${props =>
    props.currentStep === 0
      ? `url(${register_bg_step1_mob})`
      : `url(${register_bg_step2_mob})`};

  background-size: 'cover';
  background-position: left 50% bottom 0px;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    min-height: calc(100vh - 237px);
    min-height: ${props =>
      props.currentStep === 0 ? `calc(100vh - 237px)` : `calc(100vh - 220px)`};

    margin-top: ${props => (props.currentStep === 0 ? `169px` : `152px`)};

    background-image: url(${tablet_vector_3}), url(${tablet_vector_2}),
      url(${tablet_vector_4}), url(${tablet_vector_1}), url(${tablet_vector_5}),
      url(${tablet_vector_6});

    background-position: left 0 bottom 0, right 0 bottom 0, right 0 bottom 0,
      right 0 bottom 0, left 163px bottom 163px, left 24px bottom 256px;
  }

  @media ${device.desktop} {
    min-height: calc(100vh - 131px);
    margin-top: ${props => (props.currentStep === 0 ? `46px` : `44px`)};

    background-image: url(${desktop_vector_1}), url(${desktop_vector_2}),
      url(${desktop_vector_3}), url(${tablet_vector_5}), url(${tablet_vector_6});

    background-position: right 305px bottom 0, right 96px bottom 0,
      right 0 bottom 0, left 258px bottom 131px, left 32px bottom 248px;
  }
`;

export const RegisterFormContainer = styled.div`
  max-width: 320px;
  margin: 0px auto;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.tablet} {
    max-width: 768px;
    padding: 0px 80px;
  }

  @media ${device.desktop} {
    max-width: 1280px;
    padding: 0px 331px;
  }
`;

export const RegisterFormBox = styled.div`
  top: 40px;
  text-align: center;
  @media ${device.tablet} {
    background-color: ${props => props.theme.backgrounds.bodySecondary};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    padding-top: 60px;
    padding-bottom: 40px;
    padding-right: 80px;
    padding-left: 80px;
  }

  @media ${device.desktop} {
    padding-bottom: 60px;
  }
`;

export const RegisterTitle = styled.h1`
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

  @media ${device.desktop} {
  }
`;

export const FormInput = styled(Field)`
  display: block;
  font-family: 'Manrope400';
  font-size: 14px;
  line-height: 19px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  width: 100%;
  margin-top: 16px;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 56px;
  color: ${props => props.theme.fontColors.inputTextColor};
  outline: none;
  background-color: ${props => props.theme.backgrounds.input};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  transition: transform ${props => props.theme.transition.first};

  &:hover,
  &:focus {
    transform: scale(1.02);
    border: 1px solid ${p => p.theme.hoverButtonColor.primary};
  }

  @media ${device.tablet} {
    font-family: 'Manrope400';
    font-size: 18px;
    line-height: 25px;
    padding-top: 14px;
    padding-bottom: 13px;
    padding-left: 32px;
  }
`;

export const WrapInputPassword = styled.div`
  position: relative;
`;

export const ShowPasswordIcon = styled(BiShow)`
  position: absolute;
  right: 20px;
  top: 8.5px;
  color: #f59256;
  width: 26px;
  height: 26px;
  @media ${device.tablet} {
    top: 10px;

    width: 32px;
    height: 32px;
  }
`;

export const HidePasswordIcon = styled(BiHide)`
  position: absolute;
  right: 20px;
  top: 8.5px;
  color: #f59256;
  width: 26px;
  height: 26px;
  @media ${device.tablet} {
    top: 10px;

    width: 32px;
    height: 32px;
  }
`;

export const NextFormRegisterBtn = styled.button`
  font-family: 'Manrope500';
  margin-top: ${props => (props.currentStep === 0 ? '40px' : '28px')};
  width: 100%;
  color: ${props => props.theme.fontColors.white};

  background-color: ${props =>
    props.disabled ? '#A0A0A0' : props.theme.backgrounds.buttonPrimary};
  border-radius: 40px;
  padding-top: 6.5px;
  padding-bottom: 6.5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  outline: none;

  border: 2px solid #f59256;
  border: ${props =>
    props.disabled ? '2px solid #A0A0A0' : '2px solid #f59256'};
  transition: transform ${props => props.theme.transition.first};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    /* border: 2px solid ${p => p.theme.hoverButtonColor.primary}; */
    border: ${props =>
      props.disabled ? '2px solid #A0A0A0' : '2px solid #FF6101'};
  }

  &:hover {
    transform: scale(1.03);
  }

  /* &:hover {
    transform: scale(1.03);
  } */

  @media ${device.tablet} {
    margin-top: 40px;
  }

  @media ${device.desktop} {
    padding-top: 10.5px;
    padding-bottom: 10.5px;
  }
`;

export const GoogleRegButton = styled.button`
  font-family: 'Manrope500';
  margin-top: ${props => (props.currentStep === 0 ? '40px' : '28px')};
  width: 100%;
  color: ${props => props.theme.fontColors.white};

  background-color: ${props =>
    props.disabled ? '#A0A0A0' : props.theme.backgrounds.buttonPrimary};
  border-radius: 40px;
  padding-top: 8.5px;
  padding-bottom: 8.5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  /* &:hover {
    transform: scale(1.03);
  } */

  @media ${device.tablet} {
    margin-top: 40px;
  }

  @media ${device.desktop} {
    padding-top: 10.5px;
    padding-bottom: 10.5px;
  }
`;

export const BackFormRegisterBtn = styled.button`
  font-family: 'Manrope500';
  margin-top: 12px;
  width: 100%;
  color: ${props => props.theme.fontColors.secondary};
  background-color: ${props => props.theme.backgrounds.bodyPrimary};
  border: 2px solid #f59256;
  border-radius: 40px;
  padding-top: 6.5px;
  padding-bottom: 6.5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  outline: none;
  transition: transform ${props => props.theme.transition.first};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    border: 2px solid ${p => p.theme.hoverButtonColor.primary};
  }

  @media ${device.tablet} {
    margin-top: 16px;
  }

  @media ${device.desktop} {
    padding-top: 10.5px;
    padding-bottom: 10.5px;
  }
`;

export const RegisterBoxText = styled.div`
  margin-top: 40px;
`;

export const RegisterLinkText = styled.p`
  font-family: 'Manrope400';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  color: ${props => props.theme.fontColors.inputTextColor};
  transition: transform ${props => props.theme.transition.first};
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const ReqisterLoginLink = styled(NavLink)`
  color: ${props => props.theme.fontColors.blueLink};
  transition: transform ${props => props.theme.transition.first};

  &:hover {
    color: #4169e1;
    cursor: pointer;
  }
`;

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

export const SectionRegisterForm = styled.section`
  min-height: 100vh;
  padding-top: 42px;
  padding-bottom: ${props => (props.currentStep === 0 ? `103px` : `59px`)};
  background-color: ${props => props.theme.backgrounds.input};

  background-image: ${props =>
    props.currentStep === 0
      ? `url(${register_bg_step1_mob})`
      : `url(${register_bg_step2_mob})`};

  background-size: 'contain';
  background-position: left 50% bottom 0px;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    padding-top: 169px;
    padding-bottom: ${props => (props.currentStep === 0 ? `266px` : `223px`)};
    background-image: url(${tablet_vector_3}), url(${tablet_vector_2}),
      url(${tablet_vector_4}), url(${tablet_vector_1}), url(${tablet_vector_5}),
      url(${tablet_vector_6});

    background-position: left 0 bottom 0, right 0 bottom 0, right 0 bottom 0,
      right 0 bottom 0, left 163px bottom 163px, left 24px bottom 256px;
  }

  @media ${device.desktop} {
    padding-top: 46px;
    padding-bottom: ${props => (props.currentStep === 0 ? `113px` : `51px`)};
    background-image: url(${desktop_vector_1}), url(${desktop_vector_2}),
      url(${desktop_vector_3}), url(${tablet_vector_5}), url(${tablet_vector_6});

    background-position: right 305px bottom 0, right 96px bottom 0,
      right 0 bottom 0, left 258px bottom 131px, left 32px bottom 248px;
  }
`;

export const RegisterFormContainer = styled.div`
  max-width: 320px;
  padding: 0px 20px;
  /* margin-bottom: ${props =>
    props.currentStep === 0 ? `266px` : `223px`}; */
  /* padding-left: 20px;
  padding-right: 20px; */
  margin: 0px auto;
  /* margin-left: auto;
  margin-right: auto; */
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  /* padding-bottom: ${props =>
    props.currentStep === 0 ? `103px` : `59px`}; */

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

export const NextFormRegisterBtn = styled.button`
  font-family: 'Manrope500';
  margin-top: ${props => (props.currentStep === 0 ? '40px' : '28px')};
  width: 100%;
  color: ${props => props.theme.fontColors.white};
  background-color: ${props => props.theme.backgrounds.buttonPrimary};
  border-radius: 40px;
  padding-top: 8.5px;
  padding-bottom: 8.5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  outline: none;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

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
  padding-top: 8.5px;
  padding-bottom: 8.5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  outline: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
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
`;

export const ReqisterLoginLink = styled(NavLink)`
  color: ${props => props.theme.fontColors.blueLink};
`;

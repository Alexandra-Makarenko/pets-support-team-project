import styled from 'styled-components';
import { Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
// import { theme } from 'styles/theme';
import register_bg_mob from '../../../assets/images/bg-pictures/mobile/register_bg_mob.png';
export const FormBox = styled(Form)`
  margin-bottom: 70px;
`;

export const SectionRegisterForm = styled.section`
  padding-top: 42px;
  padding-bottom: 103px;
  background-color: ${props => props.theme.backgrounds.input};
  background-image: url(${register_bg_mob});
  /* width: 500px;
  height: 200px; */
  /* height: 100vh; */
  /* background-size: 320px auto; */
  /* background-size: 'contain'; */
  background-position: left 50% bottom 0px;
  background-repeat: no-repeat;
`;

export const RegisterFormContainer = styled.div`
  max-width: 320px;
  padding: 0px 20px;
  margin: 0px auto;
  text-align: center;
  /* margin-left: auto;
  margin-right: auto; */
  padding-left: 20px;
  padding-right: 20px;
  /* justify-items: center;
  align-items: center; */
  /* margin-bottom: 30px; */
`;

export const RegisterTitle = styled.h1`
  margin-bottom: 40px;
  font-family: var(--font-base);
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
`;

export const FormInput = styled(Field)`
  display: block;
  width: 100%;
  margin-top: 16px;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 14px;
  color: ${props => props.theme.fontColors.inputTextColor};
  font-family: var(--font-base);
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  outline: none;
  /* width: 250px; */
  background-color: ${props => props.theme.backgrounds.input};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
`;

export const NextFormRegisterBtn = styled.button`
  margin-top: 40px;
  width: 100%;
  color: ${props => props.theme.fontColors.white};
  background-color: ${props => props.theme.backgrounds.buttonPrimary};
  border-radius: 40px;
  padding-top: 8.5px;
  padding-bottom: 8.5px;
  font-family: var(--font-base);
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  outline: none;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

export const RegisterBoxText = styled.div`
  margin-top: 40px;
`;

export const RegisterLinkText = styled.p`
  font-family: var(--font-base);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.fontColors.inputTextColor};
`;

export const ReqisterLoginLink = styled(NavLink)`
  color: ${props => props.theme.fontColors.blueLink};
`;

// export const RegisterBgImg = styled.div`
//   /* display: block;
//   /* position: absolute; */
//   bottom: 0;
//   left: 0;
//   background-image: url(${register_bg_mob});
//   /* width: 500px;
//   height: 200px; */
//   /* height: 159px; */
//   /* background-size: 'contain'; */
//   background-size: 'contain';
//   background-position: right 0px bottom 0px;
//   background-repeat: no-repeat;
// `;

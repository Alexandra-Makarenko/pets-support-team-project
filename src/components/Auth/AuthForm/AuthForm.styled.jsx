import styled from 'styled-components';
import { Form, Field } from 'formik';
// import { theme } from 'styles/theme';

export const FormBox = styled(Form)`
  margin-bottom: 70px;
`;

export const SectionRegisterForm = styled.div`
  padding-top: 42px;
`;

export const RegisterFormContainer = styled.div`
  padding: 10px;
  /* justify-items: center; */
  /* align-items: stretch; */
  /* margin-bottom: 30px; */
`;

export const FormInput = styled(Field)`
  display: block;
  margin-top: 5px;
  color: ${props => props.theme.colors.mainTextColor};
  font-size: 14px;
  line-height: 19px;
  outline: none;
  /* width: 250px; */
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
`;

export const NextFormRegisterBtn = styled.button`
  width: 200px;
  height: 40px;
  color: #fff;
  background-color: #7a75a9;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 500;

  outline: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

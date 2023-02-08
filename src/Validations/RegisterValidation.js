import { ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErrorText } from './AuthErrorMessage.styled';

const nameRules = /^[aA-zZ\s]+$/;
const passwordRules = /^(\S+$)/g;
const emailRules = /^(?!.*@[^,]*,)/;

export const stepOneReqisterSchema = yup.object().shape({
  email: yup
    .string()
    .min(10, 'Minimum number of characters 10')
    .max(63, 'Password is too long')
    .email('Please enter a valid email')
    .matches(emailRules, 'Only alphabets are allowed for this field ')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(7, 'Password is too short')
    .max(32, 'Password is too long')
    .matches(passwordRules, 'Any characters except spaces')
    // .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please enter the password again'),
});

export const stepTwoReqisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Minimum number of characters 2')
    .max(16, 'Maximum number of characters 16')
    .matches(nameRules, 'Only alphabets are allowed for this field ')
    .required('Name is a required field'),
  region: yup.string().required('Required'),
  phone: yup
    .string()
    .min(12, 'Minimum number of characters 2')
    // .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

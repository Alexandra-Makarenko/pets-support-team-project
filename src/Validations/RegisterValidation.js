import { ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErrorText } from './AuthErrorMessage.styled';

const nameRules = /^[aA-zZ\s]+$/;
const passwordRules = /^(\S+$)/g;
const emailRules = /^(?!-)(?!.*@[^,]*,)/;
const regionRules = /^()(\w+(,|\s)\s*)+\w+$/;
const regionRulesOnlyLetters = /^[a-zA-Z\s]{3,},[a-zA-Z\s]{4,}$/;

export const stepOneReqisterSchema = yup.object().shape({
  email: yup
    .string()
    .min(6, 'Must be more than 6 characters')
    .max(63, 'Maximum number of characters 63')
    .email('Please enter a valid email')
    .matches(emailRules, 'Please enter a valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(7, 'Your password must be more than 7 characters')
    .max(32, 'Password is too long')
    .matches(passwordRules, 'Any characters except spaces')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      'Must contain one uppercase, one lowercase'
    )
    .matches(/^(?=.{6,20}$)\D*\d/, 'Must contain one number')
    .required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please enter the password again'),
});

export const stepTwoReqisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be more than 2 characters')
    .max(16, 'Maximum number of characters 16')
    .matches(nameRules, 'Only latin characters are allowed for this field')
    .required('Name is a required field'),
  region: yup
    .string()
    .required('City, region is a required field')
    .min(5, 'Format must be City, region. For example: Brovary, Kyiv')
    .max(60, 'Maximum number of characters 16')
    .matches(
      regionRules,
      'Format must be City, region. For example: Brovary, Kyiv'
    )
    .matches(regionRulesOnlyLetters, 'regionRulesOnlyLetters'),
  // .matches(region2, 'Must contain one number'),
  phone: yup
    .string()
    .min(13, 'Please enter a valid phone number')
    .required('Phone is a required field'),
});

export const FormError = ({ name, message }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

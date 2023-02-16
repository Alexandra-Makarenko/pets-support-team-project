import * as yup from 'yup';
const nameRules = /^[aA-zZ\s]+$/;
const dateOfBirthSchema =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

export const stepOnePetSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be more than 2 characters')
    .max(30, 'Maximum number of characters 30')
    .matches(nameRules, 'Only latin characters are allowed for this field')
    .required('Name is a required field'),
  date: yup
    .string()
    .min(10)
    .max(10)
    .matches(dateOfBirthSchema, 'DD.MM.YYYY')
    .required('Date of birth is a required field'),
  breed: yup
    .string()
    .min(2, 'Must be more than 2 characters')
    .max(30, 'Maximum number of characters 30')
    .matches(nameRules, 'Only latin characters are allowed for this field')
    .required('Breed is a required field'),
});
export const stepTwoPetSchema = yup.object().shape({
  comment: yup.string().max(800, 'Maximum number of characters 800'),
});

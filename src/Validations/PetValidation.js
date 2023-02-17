import * as yup from 'yup';
import { parse, isDate } from 'date-fns';
const nameRules = /^[aA-zZ\s]+$/;

export const stepOnePetSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be more than 2 characters')
    .max(16, 'Maximum number of characters 16')
    .matches(nameRules, 'Only latin characters are allowed for this field')
    .required('Name is a required field'),
  date: yup
    .date()
    .transform((value, originalValue) => {
      const parsedDate = isDate(new Date(originalValue))
        ? new Date(originalValue)
        : parse(new Date(originalValue), 'yyyy-MM-dd', new Date());
      return parsedDate;
    })
    .min('1970-01-01', 'Date must be later than 01.01.1970')
    .max(
      new Date().setDate(new Date().getDate() + 1),
      'Date must be today or earlier '
    )
    .required('Date of birth is required'),
  breed: yup
    .string()
    .min(2, 'Must be more than 2 characters')
    .max(16, 'Maximum number of characters 16')
    .matches(nameRules, 'Only latin characters are allowed for this field')
    .required('Breed is a required field'),
});
export const stepTwoPetSchema = yup.object().shape({
  comment: yup
    .string()
    .min(8, 'Must be more than 8 characters')
    .max(120, 'Maximum number of characters 120'),
});

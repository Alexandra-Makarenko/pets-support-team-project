import React from 'react';

import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { parse, isDate } from 'date-fns';

import {
  BackFormModalBtn,
  NextFormModalBtn,
  ModalFormInput,
  ModalRadio,
  ModalRadioCategoriesTitle,
  ModalText,
  ModalLabel,
  CategoriesOfAdd,
  ModalButtonSection,
  FormError,
  ModalDateField,
  ErrorWraper,
} from './ModalAddNotice.styled';

const nameRules = /^[aA-zZ\s]+$/;

export const StepOne = props => {
  const stepOneAddNoticeSchema = yup.object().shape({
    category: yup.string().required('Chose one option'),
    title: yup
      .string()
      .string()
      .min(2, 'Must be more than 2 characters')
      .max(48, 'Must not be longer than 48 characters')
      .required('Please enter add title'),
    name: yup
      .string()
      .min(2, 'Must be more than 2 characters')
      .max(16, 'Must not be longer than 16 characters')
      .matches(nameRules, 'Only latin characters allowed')
      .required('This field is required'),
    dateofbirth: yup
      .date()
      .transform((value, originalValue) => {
        const parsedDate = isDate(new Date(originalValue))
          ? new Date(originalValue)
          : parse(new Date(originalValue), 'yyyy-MM-dd', new Date());
        return parsedDate;
      })
      .min('1970-01-01', 'Must be later than 01.01.1970')
      .max(
        new Date().setDate(new Date().getDate() + 1),
        'Date must be today or earlier '
      )
      .required('Date of birth is required'),
    breed: yup
      .string()
      .min(2, 'Must be more than 2 characters')
      .max(24, 'Must not be longer than 24 characters')
      .matches(nameRules, 'Only latin characters allowed ')
      .required('Breed is required'),
  });

  const handleSubmit = values => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={stepOneAddNoticeSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form noValidate>
          <ModalText>
            Here you can create new add for pets that you have
          </ModalText>
          <CategoriesOfAdd role="group">
            <ModalRadio
              type="radio"
              name="category"
              value="lost-found"
              id="idLostFound"
            />
            <ModalRadioCategoriesTitle htmlFor="idLostFound">
              lost/found
            </ModalRadioCategoriesTitle>
            <ModalRadio
              type="radio"
              name="category"
              value="in-good-hands"
              id="idInGoodHands"
            />
            <ModalRadioCategoriesTitle htmlFor="idInGoodHands">
              in good hands
            </ModalRadioCategoriesTitle>
            <ModalRadio type="radio" name="category" value="sell" id="idSell" />
            <ModalRadioCategoriesTitle htmlFor="idSell">
              sell
            </ModalRadioCategoriesTitle>
          </CategoriesOfAdd>
          <ErrorWraper>
            <FormError name="category" />
          </ErrorWraper>
          <ModalLabel>
            Title of add<p style={{ color: '#F59256' }}>*</p>
          </ModalLabel>
          <ModalFormInput
            type="text"
            name="title"
            placeholder="Enter title of add"
          />
          <ErrorWraper>
            <FormError name="title" />
          </ErrorWraper>
          <ModalLabel>Name pet</ModalLabel>
          <ModalFormInput
            type="text"
            name="name"
            placeholder="Enter name of pet"
          />
          <ErrorWraper>
            <FormError name="name" />
          </ErrorWraper>
          <ModalLabel>Date of birth</ModalLabel>
          <ModalDateField
            type="date"
            id="start"
            name="dateofbirth"
            min="1970-01-01"
            max={new Date().toISOString().split('T')[0]}
            lang="en-GB"
            noValidate
          />
          <ErrorWraper>
            <FormError name="dateofbirth" />
          </ErrorWraper>
          <ModalLabel>Breed</ModalLabel>
          <ModalFormInput
            type="text"
            name="breed"
            placeholder="Enter pet breed"
          />
          <ErrorWraper>
            <FormError name="breed" />
          </ErrorWraper>
          <ModalButtonSection>
            <NextFormModalBtn type="submit" currentStep={props.currentStep}>
              Next
            </NextFormModalBtn>
            <BackFormModalBtn type="button" onClick={props.closeOnClick}>
              Cancel
            </BackFormModalBtn>
          </ModalButtonSection>
        </Form>
      )}
    </Formik>
  );
};

// transform((value, originalValue) => {
//         const parsedDate = isDate(originalValue)
//           ? originalValue
//           : parse(originalValue, 'dd.MM.yyyy', new Date());
//         console.log(new Date(originalValue));
//         return parsedDate;
//       })

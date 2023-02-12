import React, { useState } from 'react';

import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { IoMdFemale, IoMdMale } from 'react-icons/io';

import {
  BackFormModalBtn,
  NextFormModalBtn,
  ModalFormInput,
  ModalTextArea,
  ModalRadio,
  ModalRadioCategoriesTitle,
  ModalHeader,
  ModalText,
  ModalLabel,
  CategoriesOfAdd,
  ModalRadioSexTitle,
  ModalRadioSex,
  ModalFileInput,
  BsPlusLgModal,
  ModalImageBlock,
  AddNoticeModal,
  AddNoticeModalWindow,
  ModalCrossClose,
  RxCross1Modal,
} from './ModalAddNotice.styled';

const nameRules = /^[aA-zZ\s]+$/;
const regionRules = /^()(\w+(,|\s)\s*)+\w+$/;

export const ModalAddNotice = ({ onClick }) => {
  const [data, setData] = useState({
    categories: '',
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: '',
    location: '',
    price: 0,
    image: '',
    comments: '',
  });

  const [currentStep, setCurrentStep] = useState(0);
  const makeRequest = formData => {
    const body = {
      categories: formData.categories,
      title: formData.title,
      name: formData.name,
      birthday: formData.birthday,
      breed: formData.breed,
      sex: formData.sex,
      location: formData.location,
      image: formData.image,
      comments: formData.comments,
    };
    console.log(body);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep(prev => prev + 1);
    console.log('data', newData);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne
      currentStep={currentStep}
      next={handleNextStep}
      data={data}
      closeOnClick={onClick}
    />,
    <StepTwo
      currentStep={currentStep}
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
  ];

  return (
    <AddNoticeModal>
      <AddNoticeModalWindow>
        <ModalCrossClose type="button" onClick={onClick}>
          <RxCross1Modal />
        </ModalCrossClose>
        <ModalHeader>Add pet</ModalHeader>
        {steps[currentStep]}
      </AddNoticeModalWindow>
    </AddNoticeModal>
  );
};

const StepOne = props => {
  const stepOneAddNoticeSchema = yup.object().shape({
    categories: yup.string().required('Chose one option'),
    title: yup.string().required('Please enter add title'),
    name: yup
      .string()
      .min(2, 'Must be more than 2 characters')
      .matches(nameRules, 'Only latin characters are allowed for this field'),
    birthday: yup
      .date('Enter date in format dd/mm/yyyy, dd-mm-yyyy or dd.mm.yyyy')
      .max(new Date(), 'Birthday must be earlier than today')
      .label('Date of birth'),
    breed: yup
      .string()
      .min(2, 'Must be more than 2 characters')
      .matches(nameRules, 'Only latin characters are allowed for this field'),
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
        <Form>
          <ModalText>
            Here you can create new add for pets that you have
          </ModalText>
          <CategoriesOfAdd role="group">
            <ModalRadio
              type="radio"
              name="categories"
              value="sell"
              id="idSell"
            />
            <ModalRadioCategoriesTitle htmlFor="idSell">
              Sell
            </ModalRadioCategoriesTitle>
            <ModalRadio
              type="radio"
              name="categories"
              value="in-good-hands"
              id="idInGoodHands"
            />
            <ModalRadioCategoriesTitle htmlFor="idInGoodHands">
              In good hands
            </ModalRadioCategoriesTitle>

            <ModalRadio
              type="radio"
              name="categories"
              value="lost-found"
              id="idLostFound"
            />
            <ModalRadioCategoriesTitle htmlFor="idLostFound">
              Lost/Found
            </ModalRadioCategoriesTitle>
            <ErrorMessage name="categories" />
          </CategoriesOfAdd>

          <ModalLabel>Title of add</ModalLabel>
          <ModalFormInput
            type="text"
            name="title"
            placeholder="Enter title of add"
          />
          <ErrorMessage name="title" />
          <ModalLabel>Name pet</ModalLabel>
          <ModalFormInput
            type="text"
            name="name"
            placeholder="Enter name of pet"
          />
          <ErrorMessage name="name" />
          <ModalLabel>Date of birth</ModalLabel>
          <ModalFormInput
            type="text"
            name="birthday"
            placeholder="Enter pet birthday"
          />
          <ErrorMessage name="birthday" />
          <ModalLabel>Breed</ModalLabel>
          <ModalFormInput
            type="text"
            name="breed"
            placeholder="Enter pet breed"
          />
          <ErrorMessage name="breed" />
          <NextFormModalBtn type="submit" currentStep={props.currentStep}>
            Next
          </NextFormModalBtn>
          <BackFormModalBtn type="button" onClick={props.closeOnClick}>
            Cancel
          </BackFormModalBtn>
        </Form>
      )}
    </Formik>
  );
};

const StepTwo = props => {
  const stepTwoAddNoticeSchema = yup.object().shape({
    sex: yup.string().required('Chose one option'),
    location: yup
      .string()
      .required('Please enter location')
      .matches(
        regionRules,
        'Format must be City, region. For example: Brovary, Kyiv'
      ),
    price: yup
      .number('Enter a price as number')
      .min(1, 'Price must be at least 1'),
    image: yup.mixed(),
    comments: yup.string().min(4, 'Must be more than 4 characters'),
  });

  const handleSubmit = values => {
    props.next(values, true);
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={stepTwoAddNoticeSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <ModalLabel>The sex</ModalLabel>
          <ModalRadioSex>
            <ModalRadio type="radio" name="sex" value="male" id="idMale" />

            <ModalRadioSexTitle htmlFor="idMale">
              <IoMdMale style={{ width: 40, height: 40, color: '#23C2EF' }} />
              Male
            </ModalRadioSexTitle>

            <ModalRadio type="radio" name="sex" value="female" id="idFemale" />

            <ModalRadioSexTitle htmlFor="idFemale">
              <IoMdFemale style={{ width: 40, height: 40, color: '#FF8787' }} />
              Female
            </ModalRadioSexTitle>
            <ErrorMessage name="sex" />
          </ModalRadioSex>
          <ModalLabel>Location</ModalLabel>
          <ModalFormInput
            type="text"
            name="location"
            placeholder="Enter location"
          />
          <ErrorMessage name="location" />
          {props.data.categories === 'sell' && (
            <>
              <ModalLabel>Price</ModalLabel>
              <ModalFormInput
                type="number"
                name="price"
                placeholder="Enter price"
              />
              <ErrorMessage name="price" />
            </>
          )}
          <ModalLabel>Load pets image</ModalLabel>
          <ModalImageBlock>
            <label htmlFor="imageId">
              <BsPlusLgModal htmlFor="imageId" />
            </label>
            <ModalFileInput type="file" name="image" id="imageId" hidden />
          </ModalImageBlock>
          <ErrorMessage name="image" />

          <ModalLabel>Comments</ModalLabel>
          <ModalTextArea
            component="textarea"
            name="comments"
            placeholder="Enter needed comments"
          />

          <ErrorMessage name="comments" />
          <NextFormModalBtn type="submit" currentStep={props.currentStep}>
            Done
          </NextFormModalBtn>
          <BackFormModalBtn type="button" onClick={() => props.prev(values)}>
            Back
          </BackFormModalBtn>
        </Form>
      )}
    </Formik>
  );
};

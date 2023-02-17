// import axios from 'axios';
import {
  AddPetContainerStepOne,
  AddPetContainerStepTwo,
  AddPetHeaderStepOne,
  AddPetHeaderStepTwo,
  AddPhotoHeader,
  PetButtonBack,
  PetButtonBlock,
  PetButtonNext,
  PetCommentField,
  PetInputField,
  PetInputLabel,
  PetPhoto,
  PetPhotoLabel,
  PetPhotoPlaceholder,
} from './UserPageAddPet.styled';
import { ReactComponent as PlusSvg } from './plus.svg';
import { HiddenInput } from './Userpage.styled';
import { useDispatch } from 'react-redux';
import { postPet } from 'redux/userPets/operations';
import { stepOnePetSchema, stepTwoPetSchema } from 'Validations/PetValidation';
import { FormError } from 'Validations/RegisterValidation';
import { toast } from 'react-toastify';

const { Formik, Form } = require('formik');
const { useState, useEffect } = require('react');

export const UserPageAddPet = ({ onClick }) => {
  const dispatch = useDispatch();

  const [petData, setPetData] = useState({
    name: '',
    date: '',
    breed: '',
    comment: '',
  });
  const [currentstep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    const body = {
      name: formData.name,
      date: formData.date,
      breed: formData.breed,
      comment: formData.comment,
      avatar: formData.avatar,
    };
    console.log('Form Submitted', body);
    const data = new FormData();
    console.log(body);
    for (const prop in body) {
      if (body[prop]) {
        data.append(prop, body[prop]);
      }
    }
    dispatch(postPet(data));
    onClick();
  };

  const handleNextStep = (newData, final = false) => {
    setPetData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setPetData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const submitSteps = [
    <AddPetStepOne
      currentstep={currentstep}
      nextStep={handleNextStep}
      petData={petData}
      closeOnClick={onClick}
    />,
    <AddPetStepTwo
      currentstep={currentstep}
      nextStep={handleNextStep}
      prevStep={handlePrevStep}
      petData={petData}
      setPetData={setPetData}
    />,
  ];

  return (
    <section currentstep={currentstep}>{submitSteps[currentstep]}</section>
  );
};

const AddPetStepOne = props => {
  const handleSubmit = values => {
    props.nextStep(values);
  };
  return (
    <AddPetContainerStepOne>
      <AddPetHeaderStepOne>Add pet</AddPetHeaderStepOne>
      <Formik
        initialValues={props.petData}
        onSubmit={handleSubmit}
        validationSchema={stepOnePetSchema}
      >
        {({ isValid, dirty }) => (
          <Form autoComplete="off">
            <PetInputLabel>Name pet</PetInputLabel>
            <FormError name="name" />
            <PetInputField name="name" placeholder="Type name pet" />
            <PetInputLabel>Date of birth</PetInputLabel>
            <FormError name="date" />
            <PetInputField
              type="date"
              id="start"
              name="date"
              min="1970-01-01"
              max={new Date().toISOString().split('T')[0]}
              lang="en-GB"
              noValidate
            />
            <PetInputLabel>Breed</PetInputLabel>
            <FormError name="breed" />
            <PetInputField name="breed" placeholder="Type breed" />
            <PetButtonBlock>
              <PetButtonBack type="button" onClick={props.closeOnClick}>
                Cancel
              </PetButtonBack>
              <PetButtonNext
                currentstep={props.currentstep}
                type="submit"
                disabled={!isValid}
              >
                Next
              </PetButtonNext>
            </PetButtonBlock>
          </Form>
        )}
      </Formik>
    </AddPetContainerStepOne>
  );
};

const AddPetStepTwo = props => {
  const [picture, setPicture] = useState(undefined);
  const handleSubmit = values => {
    props.nextStep({ ...values, avatar: props.petData.avatar }, true);
  };
  useEffect(() => {
    const reader = new FileReader();
    if (props.petData.avatar) {
      reader.readAsDataURL(props.petData.avatar);
      reader.onloadend = () => {
        const base64data = reader.result;
        setPicture(base64data);
      };
    }
  }, [props.petData.avatar]);

  return (
    <AddPetContainerStepTwo>
      <AddPetHeaderStepTwo>Add pet</AddPetHeaderStepTwo>
      <AddPhotoHeader>Add photo and some comments</AddPhotoHeader>
      <Formik
        initialValues={props.petData}
        onSubmit={handleSubmit}
        validationSchema={stepTwoPetSchema}
      >
        {({
          values,
          setFieldValue,
          isValid,
          dirty,
          errors,
          touched,
          context,
        }) => (
          <Form autoComplete="off">
            <HiddenInput
              type="file"
              id="uploadImage"
              name="image"
              accept=".jpg, .jpeg, .png"
              size={2097152}
              onChange={e => {
                if (e.target.files[0].size < 2097152) {
                  if (e.target.files[0]) {
                    props.setPetData({
                      ...props.petData,
                      avatar: e.target.files[0],
                    });
                  }
                } else {
                  console.log(e.target.files[0].size);
                  toast.warn('File size should be less than 2Mb!', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                  });
                }
              }}
            />
            <PetPhotoLabel htmlFor="uploadImage">
              {picture ? (
                <PetPhoto src={picture} alt="" />
              ) : (
                <PetPhotoPlaceholder>
                  <PlusSvg />
                </PetPhotoPlaceholder>
              )}
            </PetPhotoLabel>
            <PetInputLabel>Comments</PetInputLabel>
            <FormError name="comment" />
            <PetCommentField
              name="comment"
              placeholder="Type comments"
              component="textarea"
              maxlength="120"
            />
            <PetButtonBlock>
              <PetButtonBack
                type="button"
                onClick={() => props.prevStep(values)}
              >
                Back
              </PetButtonBack>
              <PetButtonNext
                currentstep={props.currentstep}
                type="submit"
                disabled={!isValid}
              >
                Done
              </PetButtonNext>
            </PetButtonBlock>
          </Form>
        )}
      </Formik>
    </AddPetContainerStepTwo>
  );
};

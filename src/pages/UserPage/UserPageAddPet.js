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
import { stepOnePetSchema } from 'Validations/PetValidation';
import { FormError } from 'Validations/RegisterValidation';

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
      data.append(prop, body[prop]);
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
      <AddPetHeaderStepOne>Add Pet</AddPetHeaderStepOne>
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
            <PetInputField name="date" placeholder="Type date of birth" />
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

  // return (
  //   <RegisterFormContainer>
  //     <RegisterFormBox>
  //       <RegisterTitle>Registration</RegisterTitle>
  //       <Formik
  //         initialValues={props.userData}
  //         validationSchema={stepOneReqisterSchema}
  //         onSubmit={handleSubmit}
  //       >
  //         {({ isValid, dirty }) => (
  //           <Form autoComplete="off">
  //             <FormInput
  //               id={emailInputId}
  //               name="email"
  //               placeholder="Email"
  //               autoComplete="on"
  //             />
  //             <FormError name="email" />
  //             <FormInput
  //               id={passwordInputId}
  //               name="password"
  //               placeholder="Password"
  //               type="password"
  //               autoComplete="off"
  //             />
  //             <FormError name="password" />
  //             <FormInput
  //               id={confirmPasswordInputId}
  //               name="confirmPassword"
  //               placeholder="Confirm Password"
  //               type="password"
  //               autoComplete="off"
  //             />
  //             <FormError name="confirmPassword" />
  //             <NextFormRegisterBtn
  //               currentstep={props.currentstep}
  //               type="submit"
  //               disabled={!isValid}
  //             >
  //               Next
  //             </NextFormRegisterBtn>
  //           </Form>
  //         )}
  //       </Formik>
  //       <RegisterBoxText>
  //         <RegisterLinkText>
  //           Already have an account?{' '}
  //           <ReqisterLoginLink to="/login">Login</ReqisterLoginLink>
  //         </RegisterLinkText>
  //       </RegisterBoxText>
  //     </RegisterFormBox>
  //   </RegisterFormContainer>
  // );
};

const AddPetStepTwo = props => {
  const [picture, setPicture] = useState(undefined);
  const handleSubmit = values => {
    props.nextStep({ ...values, avatar: props.petData.avatar }, true);
  };

  //   const handleChangePicture = e => {
  //     props.setPetData({ avatar: e.target.files[0] });

  //     const reader = new FileReader();
  //     if (e.target.files[0]) {
  //       reader.readAsDataURL(e.target.files[0]);
  //       reader.onloadend = () => {
  //         const base64data = reader.result;
  //         setPicture(base64data);
  //       };
  //     }
  //     };

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
      <AddPetHeaderStepTwo>Add Pet</AddPetHeaderStepTwo>
      <AddPhotoHeader>Add photo and some comments</AddPhotoHeader>
      <Formik initialValues={props.petData} onSubmit={handleSubmit}>
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
                if (e.target.files[0]) {
                  props.setPetData({
                    ...props.petData,
                    avatar: e.target.files[0],
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
              as="textarea"
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

// return (
//   <RegisterFormContainer>
//     <RegisterFormBox>
//       <RegisterTitle>Registration</RegisterTitle>
//       <Formik
//         initialValues={props.userData}
//         validationSchema={stepTwoReqisterSchema}
//         onSubmit={handleSubmit}
//       >
//         {({
//           values,
//           setFieldValue,
//           isValid,
//           dirty,
//           errors,
//           touched,
//           context,
//         }) => (
//           <Form autoComplete="off">
//             <FormInput
//               id={nameInputId}
//               name="name"
//               placeholder="Name"
//               type="text"
//               autoComplete="off"
//             />
//             <FormError name="name" />
//             <FormInput
//               id={regionInputId}
//               name="region"
//               placeholder="City, reqion"
//               type="text"
//               autoComplete="off"
//             />
//             <FormError name="region" />

//             <FormInput
//               component={PhoneInputField}
//               type="text"
//               id={phoneInputId}
//               name="phone"
//               onChange={e => setFieldValue('phone', `+${e}`)}
//               value={values.phone}
//               error={Boolean(errors.phone) && Boolean(touched.phone)}
//               helperText={Boolean(touched.phone) && errors.phone}
//             />
//             <ErrorText>{errors.phone}</ErrorText>

//             <NextFormRegisterBtn
//               currentstep={props.currentstep}
//               type="submit"
//               disabled={!dirty || !isValid}
//             >
//               Register
//             </NextFormRegisterBtn>
//             <BackFormRegisterBtn
//               type="button"
//               onClick={() => props.prevStep(values)}
//             >
//               Back
//             </BackFormRegisterBtn>
//           </Form>
//         )}
//       </Formik>
//       <RegisterBoxText>
//         <RegisterLinkText>
//           Already have an account?{' '}
//           <ReqisterLoginLink to="/login">Login</ReqisterLoginLink>
//         </RegisterLinkText>
//       </RegisterBoxText>
//     </RegisterFormBox>
//   </RegisterFormContainer>
// );

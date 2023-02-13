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

const { Formik, Form } = require('formik');
const { useState, useEffect } = require('react');

// const addPet = async petData => {
//   const data = new FormData();
//   data.append('name', petData.name);
//   data.append('date', petData.date);
//   data.append('breed', petData.breed);
//   data.append('comment', petData.comment);
//   data.append('avatar', petData.avatar);
//   try {
//     const response = await axios({
//       method: 'POST',
//       url: '/user',
//       data: data,
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     return response.data;
//   } catch (error) {
//     return null;
//   }
// };

export const UserPageAddPet = ({ onClick }) => {
  const dispatch = useDispatch();
  // const petsData = useSelector(getPet);

  const [petData, setPetData] = useState({
    name: '',
    date: '',
    breed: '',
    comment: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    const body = {
      name: formData.name,
      date: formData.date,
      breed: formData.breed,
      comment: formData.comment,
      avatar: formData.avatar,
    };
    console.log('Form Submitted', body);
    // addPet(body);
    const data = new FormData();
    console.log(body);
    for (const prop in body) {
      data.append(prop, body[prop]);
    }
    // for (var pair of data.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
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
      currentStep={currentStep}
      nextStep={handleNextStep}
      petData={petData}
      closeOnClick={onClick}
    />,
    <AddPetStepTwo
      currentStep={currentStep}
      nextStep={handleNextStep}
      prevStep={handlePrevStep}
      petData={petData}
      setPetData={setPetData}
    />,
  ];

  return (
    // <SectionRegisterForm currentStep={currentStep}>
    //   {registerSteps[currentStep]}
    // </SectionRegisterForm>
    <section currentStep={currentStep}>{submitSteps[currentStep]}</section>
  );
};

const AddPetStepOne = props => {
  const handleSubmit = values => {
    props.nextStep(values);
  };
  return (
    <AddPetContainerStepOne>
      <AddPetHeaderStepOne>Add Pet</AddPetHeaderStepOne>
      <Formik initialValues={props.petData} onSubmit={handleSubmit}>
        {({ isValid, dirty }) => (
          <Form autoComplete="off">
            <PetInputLabel>Name pet</PetInputLabel>
            <PetInputField name="name" placeholder="Type name pet" />
            <PetInputLabel>Date of birth</PetInputLabel>
            <PetInputField name="date" placeholder="Type date of birth" />
            <PetInputLabel>Breed</PetInputLabel>
            <PetInputField name="breed" placeholder="Type breed" />
            <PetButtonBlock>
              <PetButtonBack type="button" onClick={props.closeOnClick}>
                Cancel
              </PetButtonBack>
              <PetButtonNext
                currentStep={props.currentStep}
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
  //               currentStep={props.currentStep}
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
            <PetCommentField
              as="textarea"
              name="comment"
              placeholder="Type comments"
            />
            <PetButtonBlock>
              <PetButtonBack
                type="button"
                onClick={() => props.prevStep(values)}
              >
                Back
              </PetButtonBack>
              <PetButtonNext
                currentStep={props.currentStep}
                type="submit"
                disabled={!dirty || !isValid}
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
//               currentStep={props.currentStep}
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

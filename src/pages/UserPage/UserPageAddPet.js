const { Formik, Form, Field } = require('formik');
const { useState } = require('react');

export const UserPageAddPet = () => {
  const [petData, setPetData] = useState({
    name: '',
    date: '',
    breed: '',
    comment: '',
    avatar: '',
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
    //   dispatch(register(body));
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
    />,
    <AddPetStepTwo
      currentStep={currentStep}
      nextStep={handleNextStep}
      prevStep={handlePrevStep}
      petData={petData}
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
    <div>
      <h2>Add Pet</h2>
      <Formik initialValues={props.petData} onSubmit={handleSubmit}>
        {({ isValid, dirty }) => (
          <Form autoComplete="off">
            <p>Name pet</p>
            <Field name="name" />
            <p>Date of birth</p>
            <Field name="date" />
            <p>Breed</p>
            <Field name="breed" />
            <button type="button">Cancel</button>
            <button
              currentStep={props.currentStep}
              type="submit"
              disabled={!isValid}
            >
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
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
  const handleSubmit = values => {
    props.nextStep(values, true);
  };

  return (
    <div>
      <h2>Add Pet</h2>
      <h3>Add photo and some comments</h3>
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
            <Field />
            <Field />
            <Field />
            <button
              currentStep={props.currentStep}
              type="submit"
              disabled={!dirty || !isValid}
            >
              Done
            </button>

            <button type="button" onClick={() => props.prevStep(values)}>
              Back
            </button>
          </Form>
        )}
      </Formik>
    </div>
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

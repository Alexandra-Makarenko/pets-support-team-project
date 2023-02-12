const { Formik, Form, Field } = require('formik');
const { useState } = require('react');

const UserPageAddPet = () => {
  const [petData, setPetData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData, final = false) => {
    setPetData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const makeRequest = formData => {
    const body = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      place: formData.region,
      phone: formData.phone,
    };
    console.log('Form Submitted', body);
    //   dispatch(register(body));
  };

  const handlePrevStep = newData => {
    setPetData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const submitSteps = [
    // <RegisterStepOne
    //   currentStep={currentStep}
    //   nextStep={handleNextStep}
    //   userData={userData}
    // />,
    // <RegisterStepTwo
    //   currentStep={currentStep}
    //   nextStep={handleNextStep}
    //   prevStep={handlePrevStep}
    //   userData={userData}
    // />,
  ];

  return (
    // <SectionRegisterForm currentStep={currentStep}>
    //   {registerSteps[currentStep]}
    // </SectionRegisterForm>
    <></>
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
            <Field />
            <Field />
            <Field />
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

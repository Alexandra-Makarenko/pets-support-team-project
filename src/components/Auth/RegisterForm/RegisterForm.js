import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { register } from 'redux/auth/authOperations';
import 'react-phone-input-2/lib/style.css';
import { PhoneInputField } from './RegisterForm.styled';
import { ErrorText } from 'Validations/AuthErrorMessage.styled';

import {
  stepOneReqisterSchema,
  stepTwoReqisterSchema,
  FormError,
} from 'Validations/RegisterValidation';

import {
  RegisterFormContainer,
  FormInput,
  NextFormRegisterBtn,
  SectionRegisterForm,
  RegisterTitle,
  RegisterLinkText,
  RegisterBoxText,
  ReqisterLoginLink,
  BackFormRegisterBtn,
  RegisterFormBox,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    region: '',
    phone: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    const body = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      place: formData.region,
      phone: formData.phone,
    };
    console.log('Form Submitted', body);
    dispatch(register(body));
  };

  const handleNextStep = (newData, final = false) => {
    setUserData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setUserData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const registerSteps = [
    <RegisterStepOne
      currentStep={currentStep}
      nextStep={handleNextStep}
      userData={userData}
    />,
    <RegisterStepTwo
      currentStep={currentStep}
      nextStep={handleNextStep}
      prevStep={handlePrevStep}
      userData={userData}
    />,
  ];

  return (
    <SectionRegisterForm currentStep={currentStep}>
      {registerSteps[currentStep]}
    </SectionRegisterForm>
  );
};

const RegisterStepOne = props => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const confirmPasswordInputId = nanoid();

  const handleSubmit = values => {
    props.nextStep(values);
  };

  return (
    <RegisterFormContainer>
      <RegisterFormBox>
        <RegisterTitle>Registration</RegisterTitle>
        <Formik
          initialValues={props.userData}
          validationSchema={stepOneReqisterSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form autoComplete="off">
              <FormInput
                id={emailInputId}
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <FormError name="email" />
              <FormInput
                id={passwordInputId}
                name="password"
                placeholder="Password"
                type="password"
                autoComplete="off"
              />
              <FormError name="password" />
              <FormInput
                id={confirmPasswordInputId}
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                autoComplete="off"
              />
              <FormError name="confirmPassword" />
              <NextFormRegisterBtn
                currentStep={props.currentStep}
                type="submit"
                disabled={!isValid}
              >
                Next
              </NextFormRegisterBtn>
            </Form>
          )}
        </Formik>
        <RegisterBoxText>
          <RegisterLinkText>
            Already have an account?{' '}
            <ReqisterLoginLink to="/login">Login</ReqisterLoginLink>
          </RegisterLinkText>
        </RegisterBoxText>
      </RegisterFormBox>
    </RegisterFormContainer>
  );
};

const RegisterStepTwo = props => {
  const nameInputId = nanoid();
  const regionInputId = nanoid();
  const phoneInputId = nanoid();

  const handleSubmit = values => {
    props.nextStep(values, true);
  };

  return (
    <RegisterFormContainer>
      <RegisterFormBox>
        <RegisterTitle>Registration</RegisterTitle>
        <Formik
          initialValues={props.userData}
          validationSchema={stepTwoReqisterSchema}
          onSubmit={handleSubmit}
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
              <FormInput
                id={nameInputId}
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="on"
              />
              <FormError name="name" />
              <FormInput
                id={regionInputId}
                name="region"
                placeholder="City, reqion"
                type="text"
                autoComplete="off"
              />
              <FormError name="region" />

              <FormInput
                component={PhoneInputField}
                type="text"
                id={phoneInputId}
                name="phone"
                onChange={e => setFieldValue('phone', `+${e}`)}
                value={values.phone}
                error={Boolean(errors.phone) && Boolean(touched.phone)}
                helperText={Boolean(touched.phone) && errors.phone}
              />
              <ErrorText>{errors.phone}</ErrorText>

              <NextFormRegisterBtn
                currentStep={props.currentStep}
                type="submit"
                disabled={!dirty || !isValid}
              >
                Register
              </NextFormRegisterBtn>
              <BackFormRegisterBtn
                type="button"
                onClick={() => props.prevStep(values)}
              >
                Back
              </BackFormRegisterBtn>
            </Form>
          )}
        </Formik>
        <RegisterBoxText>
          <RegisterLinkText>
            Already have an account?{' '}
            <ReqisterLoginLink to="/login">Login</ReqisterLoginLink>
          </RegisterLinkText>
        </RegisterBoxText>
      </RegisterFormBox>
    </RegisterFormContainer>
  );
};

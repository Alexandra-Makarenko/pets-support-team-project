import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { register, registerWithGoogle } from 'redux/auth/authOperations';
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
  GoogleRegButton,
  SectionRegisterForm,
  RegisterTitle,
  RegisterLinkText,
  RegisterBoxText,
  ReqisterLoginLink,
  BackFormRegisterBtn,
  RegisterFormBox,
  WrapInputPassword,
  ShowPasswordIcon,
  HidePasswordIcon,
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
    const bodyRegister = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      place: formData.region,
      phone: formData.phone,
    };

    console.log('Form Submitted', bodyRegister);
    dispatch(register(bodyRegister));
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
  const [showPassword, setShowPassword] = useState(false);

  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const confirmPasswordInputId = nanoid();

  const handleSubmit = values => {
    props.nextStep(values);
  };

  const handleClick = () => {
    
  }

  const toogleShowPassword = () => {
    setShowPassword(!showPassword);
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
                autoComplete="on"
              />
              <FormError name="email" />
              <WrapInputPassword>
                <FormInput
                  id={passwordInputId}
                  name="password"
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="off"
                />
                {showPassword ? (
                  <HidePasswordIcon onClick={toogleShowPassword} />
                ) : (
                  <ShowPasswordIcon onClick={toogleShowPassword} />
                )}
              </WrapInputPassword>
              <FormError name="password" />
              <WrapInputPassword>
                <FormInput
                  id={confirmPasswordInputId}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="off"
                />
                {showPassword ? (
                  <HidePasswordIcon onClick={toogleShowPassword} />
                ) : (
                  <ShowPasswordIcon onClick={toogleShowPassword} />
                )}
              </WrapInputPassword>
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
        <GoogleRegButton type="button" onClick={handleClick}>Register with Google</GoogleRegButton>
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
                autoComplete="off"
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
                disabled={!isValid}
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

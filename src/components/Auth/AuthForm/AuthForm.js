// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
// import * as yup from 'yup';

import {
  RegisterFormContainer,
  FormInput,
  NextFormRegisterBtn,
  SectionRegisterForm,
  RegisterTitle,
  RegisterLinkText,
  RegisterBoxText,
  ReqisterLoginLink,
  RegisterBgImg,
} from './AuthForm.styled';

export const AuthForm = () => {
  // const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const confirmPasswordInputId = nanoid();

  // Formik
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (value, actions) => {
    const body = {
      email: value.email,
      password: value.password,
      confirmPassword: value.confirmPassword,
    };

    console.log(body);
    // dispatch(register(body));
    // actions.resetForm();
    // setValues({ ...values, password: '' });
  };

  return (
    <SectionRegisterForm>
      <RegisterFormContainer>
        <RegisterTitle>Registration</RegisterTitle>
        <Formik
          initialValues={initialValues}
          // validationSchema={yup.object().shape({
          //   name: yup
          //     .string()
          //     .required('Please enter name')
          //     .min(2, 'Name too short'),
          //   email: yup
          //     .string()
          //     .required('Please enter email')
          //     .email('Invalid email'),
          //   password: yup
          //     .string()
          //     .required('Please enter password')
          //     .min(7, 'Password should be minimum 7 characters long'),
          // })}
          onSubmit={handleSubmit}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form autoComplete="off">
              <FormInput
                id={emailInputId}
                // label="Email"
                // variant="outlined"
                name="email"
                placeholder="Email"
                // type="email"
                autoComplete="off"
                // required
                // error={Boolean(errors.email) && Boolean(touched.email)}
                // helperText={Boolean(touched.email) && errors.email}
              />
              <FormInput
                id={passwordInputId}
                // label="Password"
                name="password"
                placeholder="Password"
                type="password"
                autoComplete="off"
                // required
                // error={Boolean(errors.name) && Boolean(touched.name)}
                // helperText={Boolean(touched.name) && errors.name}
              />
              <FormInput
                id={confirmPasswordInputId}
                // label="Password"
                // variant="outlined"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                autoComplete="off"
                // required
                // error={Boolean(errors.name) && Boolean(touched.name)}
                // helperText={Boolean(touched.name) && errors.name}
              />

              <NextFormRegisterBtn type="submit">Next</NextFormRegisterBtn>
            </Form>
          )}
        </Formik>
        <RegisterBoxText>
          <RegisterLinkText>
            Already have an account?{' '}
            <ReqisterLoginLink to="/about">Login</ReqisterLoginLink>
          </RegisterLinkText>
        </RegisterBoxText>
        <RegisterBgImg></RegisterBgImg>
      </RegisterFormContainer>
    </SectionRegisterForm>
  );
};

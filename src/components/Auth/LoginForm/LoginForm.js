import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
// import * as yup from 'yup';

import {
  stepOneReqisterSchema,
  stepTwoReqisterSchema,
  FormError,
} from 'Validations/RegisterValidation';

import {
  LoginFormContainer,
  FormInput,
  NextFormRegisterBtn,
  SectionLoginForm,
  LoginTitle,
  LoginLinkText,
  LoginBoxText,
  LoginLink,
  LoginSubmitBtn,
  LoginFormBox,
} from './LoginForm.styled';

export const LoginForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const initialState = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    const body = {
      email: values.email,
      password: values.password,
    };
    console.log('Form Submitted', body);
  };

  return (
    <SectionLoginForm>
      <LoginFormContainer>
        <LoginFormBox>
          <LoginTitle>Login</LoginTitle>
          <Formik
            initialValues={initialState}
            // validationSchema={stepOneReqisterSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty }) => (
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
                />
                <FormError name="email" />
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
                <FormError name="password" />
                <LoginSubmitBtn type="submit">Login</LoginSubmitBtn>
              </Form>
            )}
          </Formik>
          <LoginBoxText>
            <LoginLinkText>
              Don't have an account?{' '}
              <LoginLink to="/register">Register</LoginLink>
            </LoginLinkText>
          </LoginBoxText>
        </LoginFormBox>
      </LoginFormContainer>
    </SectionLoginForm>
  );
};

// Formik
// const initialValues = {
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// const handleSubmit = (value, actions) => {
//   const body = {
//     email: value.email,
//     password: value.password,
//     confirmPassword: value.confirmPassword,
//   };

//   console.log(body);
//   // dispatch(register(body));
//   // actions.resetForm();
//   // setValues({ ...values, password: '' });
// };

// return (
//   <SectionRegisterForm>
//     <RegisterFormContainer>
//       <RegisterTitle>Registration</RegisterTitle>
//       <Formik
//         initialValues={initialValues}
//         // validationSchema={yup.object().shape({
//         //   name: yup
//         //     .string()
//         //     .required('Please enter name')
//         //     .min(2, 'Name too short'),
//         //   email: yup
//         //     .string()
//         //     .required('Please enter email')
//         //     .email('Invalid email'),
//         //   password: yup
//         //     .string()
//         //     .required('Please enter password')
//         //     .min(7, 'Password should be minimum 7 characters long'),
//         // })}
//         onSubmit={handleSubmit}
//       >
//         {() => (
//           <Form autoComplete="off">
//             <FormInput
//               id={emailInputId}
//               // label="Email"
//               // variant="outlined"
//               name="email"
//               placeholder="Email"
//               // type="email"
//               autoComplete="off"
//               // required
//               // error={Boolean(errors.email) && Boolean(touched.email)}
//               // helperText={Boolean(touched.email) && errors.email}
//             />
//             <FormInput
//               id={passwordInputId}
//               // label="Password"
//               name="password"
//               placeholder="Password"
//               type="password"
//               autoComplete="off"
//               // required
//               // error={Boolean(errors.name) && Boolean(touched.name)}
//               // helperText={Boolean(touched.name) && errors.name}
//             />
//             <FormInput
//               id={confirmPasswordInputId}
//               // label="Password"
//               // variant="outlined"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               type="password"
//               autoComplete="off"
//               // required
//               // error={Boolean(errors.name) && Boolean(touched.name)}
//               // helperText={Boolean(touched.name) && errors.name}
//             />

//             <NextFormRegisterBtn type="submit">Next</NextFormRegisterBtn>
//           </Form>
//         )}
//       </Formik>
//       <RegisterBoxText>
//         <RegisterLinkText>
//           Already have an account?{' '}
//           <ReqisterLoginLink to="/about">Login</ReqisterLoginLink>
//         </RegisterLinkText>
//       </RegisterBoxText>
//       {/* <RegisterBgImg></RegisterBgImg> */}
//     </RegisterFormContainer>
//   </SectionRegisterForm>
// );

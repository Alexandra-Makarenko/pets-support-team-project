import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { register } from 'redux/auth/authOperations';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import * as yup from 'yup';
import { PhoneInputField } from './RegisterForm.styled';

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

// ============

// const Wrapper = ({ className, ...props }) => (
//   <div>
//     <PhoneInput {...props} />
//   </div>
// );

// const Phone = styled(Wrapper)`
//   #phone-input {
//     background: red;
//   }
// `;

// function InputMobile({ value }) {
//   return (
//     <Phone
//       country={'us'}
//       inputProps={{
//         id: 'phone-input',
//       }}
//       value={value}
//     />
//   );
// }

// ============

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
  // const [errors, setErrors] = useState({});

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

  // console.log('data', userData);

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
              <FormError name="confirmPassword" />
              <NextFormRegisterBtn
                currentStep={props.currentStep}
                type="submit"
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
          // validationSchema={stepTwoReqisterSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleBlur, setFieldValue }) => (
            <Form autoComplete="off">
              <FormInput
                id={nameInputId}
                // label="Email"
                // variant="outlined"
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="off"
                // required
                // error={Boolean(errors.email) && Boolean(touched.email)}
                // helperText={Boolean(touched.email) && errors.email}
              />
              <FormError name="name" />
              <FormInput
                id={regionInputId}
                // label="Password"
                name="region"
                placeholder="City, reqion"
                type="text"
                autoComplete="off"
                // required
                // error={Boolean(errors.name) && Boolean(touched.name)}
                // helperText={Boolean(touched.name) && errors.name}
              />
              <FormError name="region" />

              <PhoneInputField
                // as={PhoneInputField}
                id={phoneInputId}
                // label="Password"
                // variant="outlined"
                name="phone"
                placeholder="Mobile phone"
                type="tel"
                autoComplete="off"
                onChange={e => setFieldValue('phone', `+${e}`)}
                value={values.phone}
                // onChange={phone => console.log({ phone })}
                // onBlur={handleBlur}
                // required
                // error={Boolean(errors.name) && Boolean(touched.name)}
                // helperText={Boolean(touched.name) && errors.name}
              />
              <FormError name="phone" />

              <NextFormRegisterBtn
                currentStep={props.currentStep}
                type="submit"
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

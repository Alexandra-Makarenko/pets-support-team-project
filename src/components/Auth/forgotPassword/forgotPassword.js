import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { password } from 'redux/auth/authOperations';
import { passwordSchema, FormError } from 'Validations/LoginValidation';
import {
  LoginFormContainer,
  FormInput,
  SectionLoginForm,
  LoginTitle,
  LoginLinkText,
  LoginBoxText,
  //   LoginLink,
  LoginSubmitBtn,
  LoginFormBox,
} from './LoginForm.styled';

export const ForgotPassword = () => {
  const dispatch = useDispatch();

  const emailInputId = nanoid();

  const initialState = {
    email: '',
  };

  const handleSubmit = values => {
    const body = {
      email: values.email,
    };
    console.log('Form Submitted', body);
    dispatch(password(body));
  };

  return (
    <SectionLoginForm>
      <LoginFormContainer>
        <LoginFormBox>
          <LoginTitle>Password recovery</LoginTitle>
          <Formik
            initialValues={initialState}
            validationSchema={passwordSchema}
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

                <LoginSubmitBtn type="submit">Submit</LoginSubmitBtn>
              </Form>
            )}
          </Formik>
          <LoginBoxText>
            <LoginLinkText>
              Check your email. You will find there your new password
            </LoginLinkText>
          </LoginBoxText>
        </LoginFormBox>
      </LoginFormContainer>
    </SectionLoginForm>
  );
};

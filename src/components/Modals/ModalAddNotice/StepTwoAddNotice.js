import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import {
  BackFormModalBtn,
  NextFormModalBtn,
  ModalFormInput,
  ModalTextArea,
  ModalRadio,
  ModalLabel,
  ModalRadioSexTitle,
  ModalRadioSex,
  ModalFileInput,
  BsPlusLgModal,
  ModalImageBlock,
  ModalButtonSection,
  IoMdFemaleModal,
  IoMdMaleModal,
  FormError,
  ErrorWraper,
} from './ModalAddNotice.styled';

const regionRules = /^()(\w+(,|\s)\s*)+\w+$/;

export const StepTwo = props => {
  const [stepTwoAddNoticeSchema, setStepTwoAddNoticeSchema] = useState(
    yup.object()
  );
  const [picture, setPicture] = useState(undefined);

  useEffect(() => {
    if (props.data.category === 'sell') {
      setStepTwoAddNoticeSchema(
        yup.object().shape({
          sex: yup.string().required('Chose one option'),
          place: yup
            .string()
            .required('Please enter location')
            .matches(regionRules, 'Format must be City, region'),
          price: yup
            .string('Enter a price')
            .matches(/^(?!(0))[0-9]+$/, 'Price must not start with 0 or -')
            .required('Price is required'),
          avatarURL: yup.mixed(),
          comments: yup
            .string()
            .min(8, 'Must be more than 8 characters')
            .max(120, 'Must not be longer than 120 characters')
            .required('Comments is required'),
        })
      );
    } else {
      setStepTwoAddNoticeSchema(
        yup.object().shape({
          sex: yup.string().required('Chose one option'),
          place: yup
            .string()
            .required('Please enter location')
            .matches(regionRules, 'Format must be City, region'),
          avatarURL: yup.mixed(),
          comments: yup
            .string()
            .min(8, 'Must be more than 8 characters')
            .max(120, 'Must not be longer than 120 characters')
            .required('Comments is required'),
        })
      );
    }
  }, [props.data.category]);

  const handleSubmit = values => {
    props.next({ ...values, avatarURL: props.data.avatarURL }, true);
  };

  useEffect(() => {
    const modalReader = new FileReader();
    if (props.data.avatarURL) {
      modalReader.readAsDataURL(props.data.avatarURL);
      modalReader.onloadend = () => {
        const base64data = modalReader.result;
        setPicture(base64data);
      };
    }
  }, [props.data.avatarURL]);

  return (
    <Formik
      initialValues={props.data}
      validationSchema={stepTwoAddNoticeSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <ModalLabel>
            The sex<p style={{ color: '#F59256' }}>*</p>
          </ModalLabel>
          <ModalRadioSex>
            <ModalRadio type="radio" name="sex" value="Male" id="idMale" />

            <ModalRadioSexTitle htmlFor="idMale">
              <IoMdMaleModal />
              Male
            </ModalRadioSexTitle>

            <ModalRadio type="radio" name="sex" value="Female" id="idFemale" />

            <ModalRadioSexTitle htmlFor="idFemale">
              <IoMdFemaleModal />
              Female
            </ModalRadioSexTitle>
          </ModalRadioSex>
          <ErrorWraper>
            <FormError name="sex" />
          </ErrorWraper>
          <ModalLabel>
            Location<p style={{ color: '#F59256' }}>*</p>
          </ModalLabel>
          <ModalFormInput
            type="text"
            name="place"
            placeholder="Enter location"
          />
          <ErrorWraper>
            <FormError name="place" />
          </ErrorWraper>
          {props.data.category === 'sell' && (
            <>
              <ModalLabel>
                Price<p style={{ color: '#F59256' }}>*</p>
              </ModalLabel>
              <ModalFormInput
                type="text"
                name="price"
                placeholder="Enter price"
              />
              <ErrorWraper>
                <FormError name="price" />
              </ErrorWraper>
            </>
          )}
          <ModalLabel>Load pets image</ModalLabel>
          <ModalImageBlock>
            <label htmlFor="imageId">
              {picture ? (
                <img src={picture} alt="" />
              ) : (
                <BsPlusLgModal htmlFor="imageId" />
              )}
            </label>

            <ModalFileInput
              type="file"
              name="avatarURL"
              id="imageId"
              accept=".jpg, .jpeg, .png"
              onChange={e => {
                if (e.target.files[0]) {
                  props.setData({
                    ...props.data,
                    avatarURL: e.target.files[0],
                  });
                }
              }}
            />
          </ModalImageBlock>
          <ErrorWraper>
            <FormError name="avatarURL" />
          </ErrorWraper>
          <ModalLabel>Comments</ModalLabel>
          <ModalTextArea
            component="textarea"
            name="comments"
            placeholder="Enter needed comments"
          />
          <ErrorWraper>
            <FormError name="comments" />
          </ErrorWraper>
          <ModalButtonSection>
            <NextFormModalBtn type="submit" currentStep={props.currentStep}>
              Done
            </NextFormModalBtn>
            <BackFormModalBtn type="button" onClick={() => props.prev(values)}>
              Back
            </BackFormModalBtn>
          </ModalButtonSection>
        </Form>
      )}
    </Formik>
  );
};

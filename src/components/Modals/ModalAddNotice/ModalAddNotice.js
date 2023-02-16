import React, { useEffect, useState } from 'react';
import FormData from 'form-data';
import { StepOne } from './StepOneAddNotice';
import { StepTwo } from './StepTwoAddNotice';

import { postNotice } from './helpers/sendNoticeRequest';
import {
  ModalHeader,
  AddNoticeModal,
  AddNoticeModalWindow,
  ModalCrossClose,
  RxCross1Modal,
} from './ModalAddNotice.styled';

export const ModalAddNotice = ({ onClick, isOpen }) => {
  const [data, setData] = useState({
    category: '',
    title: '',
    name: '',
    dateofbirth: '',
    breed: '',
    sex: '',
    place: '',
    price: 0,
    comments: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const onModalCloseBtn = button => {
      if (button.keyCode === 27) {
        onClick();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', onModalCloseBtn);
    } else {
      window.removeEventListener('keydown', onModalCloseBtn);
    }
  }, [onClick, isOpen]);

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    if (final) {
      postNoticeHandler(newData);
      onClick();
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleOutletClose = event => {
    if (event.target.matches(AddNoticeModal)) {
      onClick();
    }
    return;
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const postNoticeHandler = noticeInfo => {
    let sexBool = false;
    if (noticeInfo.sex === 'Male') {
      sexBool = true;
    }

    console.log(noticeInfo.avatarURL);

    const noticeData = {
      title: noticeInfo.title,
      name: noticeInfo.name,
      dateofbirth: noticeInfo.dateofbirth.split('-').reverse().join('.'),
      breed: noticeInfo.breed,
      place: noticeInfo.place,
      sex: sexBool,
      comments: noticeInfo.comments,
      category: noticeInfo.category,
    };

    const noticeFormData = new FormData();
    for (const field in noticeData) {
      if (noticeData[`${field}`] !== '') {
        noticeFormData.append(field, noticeData[field]);
      }
    }
    if (noticeInfo.avatarURL) {
      noticeFormData.append('avatar', noticeInfo.avatarURL);
    }
    if (noticeInfo.category === 'sell') {
      noticeFormData.append('price', parseInt(noticeInfo.price, 10));
    }

    postNotice(noticeFormData);
  };

  const steps = [
    <StepOne
      currentStep={currentStep}
      next={handleNextStep}
      data={data}
      closeOnClick={onClick}
    />,
    <StepTwo
      currentStep={currentStep}
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
      setData={setData}
    />,
  ];

  return (
    <AddNoticeModal
      onClick={e => {
        handleOutletClose(e);
      }}
    >
      <AddNoticeModalWindow>
        <ModalCrossClose type="button" onClick={onClick}>
          <RxCross1Modal />
        </ModalCrossClose>
        <ModalHeader>Add pet</ModalHeader>
        {steps[currentStep]}
      </AddNoticeModalWindow>
    </AddNoticeModal>
  );
};

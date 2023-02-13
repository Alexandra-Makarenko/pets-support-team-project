import axios from 'axios';
import FormData from 'form-data';
const noticeFormData = new FormData();

export const postNoticeHandler = noticeInfo => {
  let sexBool = false;
  let priceFinal = '';
  if (noticeInfo.sex === 'Male') {
    sexBool = true;
  }
  if (noticeInfo.category === 'sell') {
    priceFinal = noticeInfo.price;
  }

  const noticeData = {
    avatarURL: noticeInfo.avatar,
    breed: noticeInfo.breed,
    category: noticeInfo.category,
    comments: noticeInfo.comments,
    dateofbirth: noticeInfo.dateofbirth,
    name: noticeInfo.name,
    place: noticeInfo.place,
    price: priceFinal,
    sex: sexBool,
    title: noticeInfo.title,
  };

  for (const field in noticeData) {
    noticeFormData.append(field, noticeData[field]);
  }
  postNotice(noticeFormData);
};

const postNotice = async noticeInfo => {
  await axios
    .post('/notices', noticeInfo, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });
  console.log(noticeInfo);
};

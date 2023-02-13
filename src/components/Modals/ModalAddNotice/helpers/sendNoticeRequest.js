import axios from 'axios';

export const postNotice = async noticeInfo => {
  for (var pair of noticeInfo.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }
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
};

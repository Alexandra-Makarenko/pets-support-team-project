import axios from 'axios';

export const postNotice = async noticeInfo => {
  const notice = await axios
    .post('/notices', {
      params: {},
      body: { ...noticeInfo },
    })
    .then(result => {
      return result.data.data;
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.statusText);
      }
    });

  return notice;
};

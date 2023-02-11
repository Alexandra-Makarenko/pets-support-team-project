import axios from 'axios';

export const fetchFriends = async () => {
  try {
    const { data } = await axios.get(
      'https://petly-5jqe.onrender.com/api/services'
    );
    return data;
  } catch (error) {}
};

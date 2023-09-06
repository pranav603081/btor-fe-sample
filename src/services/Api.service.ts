import axios from "axios";

export const getAddress = (endpoint: string) => {
  return axios.get(`https://demo4307061.mockable.io/${endpoint}`).then(item => item.data.data);
};

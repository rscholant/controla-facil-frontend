import { destroyCookie, parseCookies } from 'nookies';
import axios from 'axios';
import router from 'next/router';

function getAPIClient(ctx?: any) {
  const url = process.env.NEXT_BACK_END_PORTAL;
  const axiosReturn = axios.create({
    baseURL: url
  });

  axiosReturn.interceptors.request.use(config => {
    const cookies = parseCookies(ctx);
    if (config.headers) {
      config.headers.Authorization = `Bearer ${cookies['nextauth.token']}`;
    } else {
      config.headers = {
        Authorization: `Bearer ${cookies['nextauth.token']}`
      };
    }

    return config;
  });

  return axiosReturn;
}
export const api = getAPIClient();

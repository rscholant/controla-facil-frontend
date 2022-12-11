import axios from 'axios';
import { parseCookies } from 'nookies';

function getAPIClient(ctx?: any) {
  const url = process.env.BACKEND_URL;
  const axiosReturn = axios.create({
    baseURL: url
  });

  return axiosReturn;
}

export const api = getAPIClient();

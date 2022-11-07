import axios from 'axios';

function getAPIClient(ctx?: any) {
  const url = process.env.BACKEND_URL;
  console.log('🚀 ~ file: api.ts ~ line 5 ~ getAPIClient ~ url', url);

  return axios.create({
    baseURL: url
  });
}

export const api = getAPIClient();

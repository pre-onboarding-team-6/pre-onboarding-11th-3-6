import axios from 'axios';
import { BASE_URL, ACESS_TOKEN } from '../constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${ACESS_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});
export default axiosInstance;

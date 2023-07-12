import axios from 'axios';
import { API_URL } from '../constants/urls';

const baseURL = `${API_URL.github}/repos/${API_URL.organization}/${API_URL.repository}`;

const githubAxios = axios.create({
  baseURL,
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
});

const getIssue = async () => {
  const data = await githubAxios.get('/issues?sort=comments');

  return data;
};

export default getIssue;

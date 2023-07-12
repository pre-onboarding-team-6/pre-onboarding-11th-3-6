import axios from 'axios';
import { API_URL } from '../constants/urls';

const baseURL = `${API_URL.github}/repos/${API_URL.organization}/${API_URL.repository}`;

const githubAxios = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export const getIssues = async params => {
  const data = await githubAxios.get('/issues', {
    params,
  });

  return data;
};

export const getIssue = async issueNumber => {
  const data = await githubAxios.get(`/issues/${issueNumber}`);

  return data;
};

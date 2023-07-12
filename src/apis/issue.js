import axios from 'axios';

const repoAPI = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export const getIssues = page => repo => repoAPI(`/repos/${repo}/issues?sort=comments&page=${page}`);

export const getIssue = id => repo => repoAPI(`/repos/${repo}/issues/${id}`);

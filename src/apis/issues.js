import dateFormat from '../utils/dateFormat';
import handleErrorResult from '../utils/handleErrorResult';
import axiosInstance from './config';

const fetchIssues = async ({ page }) => {
  try {
    const { data } = await axiosInstance.get(`repos/facebook/react/issues?page=${page}&sort=comments&direction=desc`);

    const issues = processedData(data, 'array');
    return { issues };
  } catch (e) {
    return handleErrorResult(e);
  }
};

const fetchIssue = async issueNumber => {
  try {
    const { data } = await axiosInstance.get(`repos/facebook/react/issues/${issueNumber}`);
    const issue = processedData(data, 'object');
    return { issue };
  } catch (e) {
    return handleErrorResult(e);
  }
};

const processedData = (data, dataType) => {
  let processedData;
  if (dataType === 'array') {
    processedData = data.map(({ number, title, user, created_at: createdAt, comments: commentCount }) => ({
      number,
      title,
      login: user.login,
      createdAt: dateFormat(createdAt),
      commentCount,
    }));
  } else {
    const { title, user, created_at: createdAt, comments: commentCount, body } = data;

    processedData = {
      title,
      login: user.login,
      createdAt: dateFormat(createdAt),
      commentCount,
      profileImageUrl: user.avatar_url,
      body,
    };
  }

  return processedData;
};

export { fetchIssues, fetchIssue };

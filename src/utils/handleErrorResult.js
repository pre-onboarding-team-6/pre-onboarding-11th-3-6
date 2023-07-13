const handleErrorResult = e => {
  const { data, status } = e.response;
  const { message } = data;

  return { status, message };
};

export default handleErrorResult;

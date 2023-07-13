const dateFormat = date => {
  const newDate = `${new Date(date).getFullYear()}년 ${new Date(date).getMonth()}월 ${new Date(date).getDay()}일`;
  return newDate;
};

export default dateFormat;

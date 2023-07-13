const convertDateToKorean = dateStr => {
  const createdDate = new Date(dateStr);
  const year = createdDate.getFullYear();
  const month = createdDate.getMonth() + 1;
  const day = createdDate.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export default convertDateToKorean;

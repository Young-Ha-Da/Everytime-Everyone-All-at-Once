export const getTimeFromDateString = (dateString: string = '') => dateString.slice(11, 16);

export const getFormattedTimeFromDateString = (dateString: string = '') => {
  const [year, month, day, _hour, minute] = dateString.replace(/[-:]/g, ' ').split(' ');

  const period = +_hour >= 12 ? '오후' : '오전';
  const hour = +_hour % 12 || 12;

  return `${year}.${month}.${day} ${period} ${hour}:${minute}`;
};

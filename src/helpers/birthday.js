export const birthday = () => {
  const myBirthday = new Date('2001/05/30'); // 🙈🙈🙈
  const currentDate = new Date();

  const diffDate = Math.round(currentDate - myBirthday);
  const oneYearInMs = 31556952000;
  const age = Math.floor(diffDate / oneYearInMs);

  return { age };
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const secondsToMinutes = (time: number): string => {
  if (time < 60) return `${time} minutes`;

  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours} ${hours > 1 ? 'hours' : 'hour'}${
    minutes > 0 ? ' and ' + minutes + ' minutes' : ''
  }`;
};

export const generateId = (uri: string): string => {
  return uri.split('recipe_')[1];
};

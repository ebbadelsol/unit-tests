export const filterNumbers = (array, largerThan) => {
  const smallerThan = (value) => value <= largerThan;
  return array.filter(smallerThan);
};

/*
You can also write it like this:
export const filterNumbers = (array, largerThan) => {
  
  const smallerThan = (value) => {
    return value <= largerThan;
  };

  let filtered = array.filter(smallerThan);

  return filtered;
};
*/

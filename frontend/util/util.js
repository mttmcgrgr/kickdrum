export const findIndex = (arr, target) => {
  let index;
  arr.forEach((el, index) => {
    if (el.id === target.id) {
      result = index;
    }
  });
  return index;
};

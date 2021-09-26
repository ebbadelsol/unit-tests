export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === "string") {
    return stringArrayOrObject === "";
  } else if (
    type === "object" &&
    Object.keys(stringArrayOrObject).length === 0
  ) {
    return true;
  } else {
    return false;
  }
};

/*
For the array you can also do i like this:
if (type === "object" && stringArrayOrObject.length === 0) {
  return true;
}
*/

/*
Object.keys
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/

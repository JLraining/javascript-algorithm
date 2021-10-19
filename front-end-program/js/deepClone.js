const deepClone = (obj) => {
  if (typeof obj !== "object" || !obj) {
    return obj;
  }
  let res = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key]);
    }
  }
  return res;
};

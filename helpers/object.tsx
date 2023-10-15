export const isEmptyObj = (obj: any) => {
  if (typeof obj !== 'object') return true;
  if (Object.keys(obj).length === 0) {
    return true;
  }

  return false;
};

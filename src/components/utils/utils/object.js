/* eslint-disable no-param-reassign */
export const getByPath = (obj, path) => {
  path = path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
  // eslint-disable-next-line no-restricted-syntax
  for (const level of path) {
    obj = obj[level];
    if (!obj) break;
  }
  return obj || '';
};

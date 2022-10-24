import camelCase from 'lodash.camelcase';
import snakeCase from 'lodash.snakecase';

export const PAGINATION_PAGE_LIMIT = 10;

export const snakeToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => snakeToCamelCase(item));
  }

  return typeof obj === 'object'
    ? Object.entries(obj).reduce(
        (acc, [key, value]) => ({ ...acc, [`${camelCase(key)}`]: value && typeof value === 'object' ? snakeToCamelCase(value) : value }),
        {}
      )
    : obj;
};

export const camelToSnakeCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => camelToSnakeCase(item));
  }

  return typeof obj === 'object'
    ? Object.entries(obj).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [`${snakeCase(key)}`]: value && typeof value === 'object' && !Array.isArray(value) ? camelToSnakeCase(value) : value,
        }),
        {}
      )
    : obj;
};

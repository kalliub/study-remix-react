import { snakeToCamelCase } from 'utils/api';

export default class ApiConfig {
  baseUrl = 'https://ghibliapi.herokuapp.com';

  get = (path: string) => {
    return fetch(`${this.baseUrl}/${path}`, { method: 'GET' }).then(async (res) =>
      res.ok ? snakeToCamelCase(await res.json()) : Promise.reject(res)
    );
  };
}

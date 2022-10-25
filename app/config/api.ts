import { snakeToCamelCase } from 'utils/api';

export default class ApiConfig {
  baseUrl = 'https://ghibliapi.herokuapp.com';

  get = async (path: string) => {
    const response = await fetch(`${this.baseUrl}/${path}`, { method: 'GET' });
    if (!response.ok) throw response;
    return snakeToCamelCase(await response.json());
  };
}

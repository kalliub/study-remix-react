export default class ApiConfig {
  baseUrl = 'https://ghibliapi.herokuapp.com';

  get = (path: string) => {
    return fetch(`${this.baseUrl}/${path}`, { method: 'GET' }).then((res) => (res.ok ? res.json() : Promise.reject(res)));
  };
}

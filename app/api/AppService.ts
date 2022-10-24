import ApiConfig from 'config/api';

export default class AppService {
  api = new ApiConfig();

  servicePath: string;

  constructor(servicePath: string) {
    this.servicePath = servicePath;
  }

  root(resource?: string) {
    if (resource) {
      return `${this.servicePath}/${resource}`;
    }
    return this.servicePath;
  }
}

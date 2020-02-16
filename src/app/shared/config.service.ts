import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  baseUrl = 'https://jsonplaceholder.typicode.com/';

  public userList = `${this.baseUrl}users`;
}

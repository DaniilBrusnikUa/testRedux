import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ConfigService } from 'src/app/shared/config.service';

@Injectable()
export class UsersService {

  constructor(
    private data: DataService,
    private config: ConfigService,
  ) {
  }

  getUserList() {
    return this.data.getData(this.config.userList);
  }

}


import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const users = [
      { username: 'aswin', password: 'aswin', firstname: 'Aswin', lastname: 'G' }
    ];

    return { users };

  }

}

import { Injectable } from '@angular/core';
import { createRxDatabase, RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/dexie';
import userSchema from './user.schema.json';
@Injectable()
export class RxdbService {
  database: RxDatabase;
  constructor() {
    console.log(userSchema);
  }

  async initDatabase() {
    this.database = await createRxDatabase({
      name: 'testdb',
      storage: getRxStorageDexie(),
      password: 'myPassword',
      multiInstance: true,
      eventReduce: true,
      cleanupPolicy: {},
    });
    this.database.addCollections({
      users: {
        schema: userSchema,
      },
    });
  }
}

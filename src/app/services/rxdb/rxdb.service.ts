import { Injectable } from '@angular/core';
import { createRxDatabase, RxCollection, RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/dexie';
import { DataBaseSchema } from './database.schema';
import { userSchema } from './user.schema';
@Injectable()
export class RxdbService {
  database: RxDatabase<DataBaseSchema>;
  collection: RxCollection<any>;
  constructor() {}

  async initDatabase() {
    try {
      this.database = await createRxDatabase<DataBaseSchema>({
        name: 'testdb',
        storage: getRxStorageDexie(),
        password: 'myPassword',
        multiInstance: true,
        eventReduce: true,
        ignoreDuplicate: false,
        cleanupPolicy: {},
      });
      await this.database.addCollections({
        users: {
          schema: userSchema,
        },
      });

      const collections = this.database.collections;
      // await this.database.collections.users.insert({
      //   name: 'ads',
      //   surname: 'js',
      // });

      console.log('Collection');
      const query = this.database.collections.users.find();
      const result = await query.exec();
      console.log('query', result);
    } catch (err) {
      console.log('Errore', err);
    }
  }
}

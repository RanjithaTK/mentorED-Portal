import { DBConfig } from 'ngx-indexed-db';

export const DbConfig: DBConfig = {
    name: 'MentorED-DB',
    version: 1,
    objectStoresMeta: [{
      store: 'forms',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: false } },
        { name: 'controls', keypath: 'controls', options: { unique: false } }
      ]
    }],
  };
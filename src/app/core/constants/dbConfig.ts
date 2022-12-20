import { DBConfig } from 'ngx-indexed-db';

export const DbConfig: DBConfig = {
    name: 'MentorED-DB',
    version: 4,
    objectStoresMeta: [{
      store: 'forms',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } },
        { name: 'controls', keypath: 'controls', options: { unique: false } }
      ]
    }],
  };
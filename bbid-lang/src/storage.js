import PouchDb from 'pouchdb';

export class Storage {
  constructor() {
    this.db = new PouchDb('aurelia-app');
  }

  update(key, data) {
    if(typeof data == 'object'){
      data._id = key;
    }else{
      data = {
        [key]: data
      };
    }
    return this.db.put(data);
  }

  read(key) {
    return this.db.get(key);
  }

  listen(key, listener) {
    let options = {
      since: 'now',
      live: true,
      include_docs: true
    };

    return this.db.changes(options).on('change', (change) => {
      if(change.id == key){
        listener(change);
      }
    });
  }
}

import {Storage} from 'storage';
import {inject} from 'aurelia-framework';

@inject(Storage)
export class DescriptorAssembly {
  constructor(store){
    this.axleSockets = '';
    this.storage = store;
  }

  activate() {
    return this.storage.read('descriptor').then(doc => {
      this.axleSockets = doc.axleSockets || this.axleSockets || false;
    }).catch(err => {

    });
  }

  updateAxles() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.axleSockets = this.axleSockets;
        return this.storage.update('descriptor', doc);
      })
  }
}

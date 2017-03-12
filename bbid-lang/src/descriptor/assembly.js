import {Storage} from 'storage';
import {inject} from 'aurelia-framework';

@inject(Storage)
export class DescriptorAssembly {
  constructor(store){
    this.isAssembly = false;
    this.storage = store;
  }

  activate() {
    return this.storage.read('descriptor').then(doc => {
      this.isAssembly = doc.isAssembly || this.isAssembly || false;
    }).catch(err => {

    });
  }

  toggleAssembly() {
    this.isAssembly = !this.isAssembly;

    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.isAssembly = this.isAssembly;
        return this.storage.update('descriptor', doc);
      })
  }
}

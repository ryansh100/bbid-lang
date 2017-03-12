import {Storage} from 'storage';
import {inject} from 'aurelia-framework';

@inject(Storage)
export class DescriptorPrinted {
  constructor(store){
    this.isPrinted = false;
    this.storage = store;
  }

  activate() {
    return this.storage.read('descriptor').then(doc => {
      this.isPrinted = doc.isPrinted || this.isPrinted || false;
    }).catch(err => {

    });
  }

  togglePrinted() {
    this.isPrinted = !this.isPrinted;

    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.isPrinted = this.isPrinted;
        return this.storage.update('descriptor', doc);
      })
  }
}

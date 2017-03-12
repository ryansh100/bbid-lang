import {Storage} from 'storage';
import {inject} from 'aurelia-framework';

@inject(Storage)
export class DescriptorMiniBar {
  constructor(store){
    this.isMiniBar = false;
    this.storage = store;
  }

  activate() {
    return this.storage.read('descriptor').then(doc => {
      this.isMiniBar = doc.isMiniBar || this.isMiniBar || false;
    }).catch(err => {

    });
  }

  toggleMiniBar() {
    this.isMiniBar = !this.isMiniBar;

    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.isMiniBar = this.isMiniBar;
        return this.storage.update('descriptor', doc);
      })
  }
}

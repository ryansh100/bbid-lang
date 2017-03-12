import {Storage} from 'storage';
import {inject} from 'aurelia-framework';

@inject(Storage)
export class DescriptorHeight {
  constructor(store){
    this.height = '';
    this.storage = store;
  }

  activate() {
    return this.storage.read('descriptor').then(doc => {
      this.height = doc.height || this.height || false;
    }).catch(err => {

    });
  }

  updateHeight() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.height = this.height;
        return this.storage.update('descriptor', doc);
      })
  }

  get heightMm() {
    if(this.height) {
      return this.height * 2;
    }
    return '';
  }

  set heightMm(value) {
    if(value){
      this.height = Math.round(value/2);
    }else{
      this.height = '';
    }
    this.updateHeight();
  }
}

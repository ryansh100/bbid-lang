import {Storage} from 'storage';
import {inject} from 'aurelia-framework';

@inject(Storage)
export class DescriptorSticker {
  constructor(store){
    this.stickerMin = '';
    this.stickerMax = '';

    this.storage = store;
  }

  activate() {
    return this.storage.read('descriptor').then(doc => {
      this.stickerMin = doc.stickerMin || this.stickerMin || '';
      this.stickerMax = doc.stickerMax || this.stickerMax || '';

    }).catch(err => {

    });
  }

  updateSticker() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.stickerMin = this.stickerMin;
        doc.stickerMax = this.stickerMax;
        return this.storage.update('descriptor', doc);
      })
  }

  get stickerMinMm() {
    if(this.stickerMin) {
      return this.stickerMin * 2;
    }
    return '';
  }

  set stickerMinMm(value) {
    if(value){
      this.stickerMin = Math.round(value/2);
    }else{
      this.stickerMin = '';
    }
    this.updateSticker();
  }

  get stickerMinMm() {
    if(this.stickerMin) {
      return this.stickerMin * 2;
    }
    return '';
  }

  set stickerMaxMm(value) {
    if(value){
      this.stickerMax = Math.round(value/2);
    }else{
      this.stickerMax = '';
    }
    this.updateSticker();
  }
}

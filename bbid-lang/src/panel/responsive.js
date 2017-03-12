import {Storage} from 'storage';
import {inject} from 'aurelia-framework';
import {Encode} from 'encoding';
import QRious from 'qrious';

@inject(Storage)
export class Responsive {
  constructor(storage){
    this.storage = storage;
    this.settingsListener = null;
    this.descriptor = {};
    this.qr = null;
  }

  get bbid() {
    return Encode.toBBID(this.descriptor);
  }

  attached() {
    this.settingsListener = this.storage.listen('descriptor', (change) => { this.updateDescriptor(change.doc) });

    this.qr = new QRious({
      element: document.getElementById('qr'),
      value: this.bbid
    });
  }

  activate(){
    return this.storage.read('descriptor')
     .then(doc => {
       this.descriptor = Object.assign({}, doc);
     }).catch(err => {});
  }

  updateDescriptor(doc) {
    let keys = Object.keys(this.descriptor);
    keys.forEach(key => {
      this.descriptor[key] = undefined;
    })

    this.descriptor = Object.assign(this.descriptor, doc);
    this.qr.value = this.bbid;
  }

  detached() {
    this.settingsListener.cancel();
  }


}

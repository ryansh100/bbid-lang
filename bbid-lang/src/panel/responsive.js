import {Storage} from 'storage';
import {inject} from 'aurelia-framework';
import {Encode} from 'encoding';

@inject(Storage)
export class Responsive {
  constructor(storage){
    this.storage = storage;
    this.settingsListener = null;
    this.descriptor = {};
  }

  get bbid() {
    let $id = ''
    // Brand (assumed to be LEGO)
    $id += Encode.radix(1);

    // Is Assembly
    $id += Encode.radix(this.descriptor.isAssembly ? 1 : 0);

    // Stud Faces
    let $block = '';
    (this.descriptor.studOrientations || []).forEach(arr => {
      $block += Encode.radix(arr.max);
      $block += Encode.radix(arr.min);
      $block += Encode.radix(arr.adjustment);
    });
    $id += Encode.padRight($block, '-', 15);

    // Height
    let $heightBlock = Encode.radix(this.descriptor.height || 0);
    $id += Encode.padRight($heightBlock, '.', 2);

    // Hinge
    let $hingeBlock = '';
    (this.descriptor.studOrientations || []).forEach(arr => {
      $hingeBlock += Encode.radix(arr.orientation ? arr.orientation : 0);
      $hingeBlock += Encode.radix(arr.type ? arr.type : 0);
    });
    $id += Encode.padRight($hingeBlock, '-', 6);

    // sockets
    let $socketBlock = '';
    (this.descriptor.sockets || []).forEach(arr => {
      $socketBlock += Encode.radix(arr.max);
      $socketBlock += Encode.radix(arr.min);
      $socketBlock += Encode.radix(arr.adjustment);
    });
    $id += Encode.padRight($socketBlock, '-', 15);

    // clips
    let $clipsBlock = '';
    (this.descriptor.clips || []).forEach(arr => {
      $clipsBlock += Encode.radix(arr.count);
    });
    $id += Encode.padRight($clipsBlock, '-', 4);

    // axle sockets
    $id += Encode.radix(this.descriptor.axleSockets || 0);

    // axles
    let $axleBlock = '';
    (this.descriptor.axles || []).forEach(arr => {
      $axleBlock += Encode.radix(arr.lengthUnit);
    });
    $id += Encode.padRight($axleBlock, '-', 4);

    // pins
    let $pinsBlock = '';
    (this.descriptor.pins || []).forEach(arr => {
      $pinsBlock += Encode.radix(arr.lengthUnit);
      $pinsBlock += Encode.radix(arr.count);
    });
    $id += Encode.padRight($pinsBlock, '-', 6);

    // pin sockets
    let $pinSocketsBlock = '';
    (this.descriptor.pinSockets || []).forEach(arr => {
      $pinSocketsBlock += Encode.radix(arr.count);
    });
    $id += Encode.padRight($pinSocketsBlock, '-', 4);

    // bars
    let $barsBlock = '';
    (this.descriptor.bars || []).forEach(arr => {
      $barsBlock += Encode.radix(arr.count);
    });
    $id += Encode.padRight($barsBlock, '-', 4);

    // sleeves
    let $sleeveBlock = '';
    (this.descriptor.sleeves || []).forEach(arr => {
      $sleeveBlock += Encode.radix(arr.count);
    });
    $id += Encode.padRight($sleeveBlock, '-', 4);

    // mini bars
    $id += Encode.radix(this.descriptor.isMiniBar ? 1 : 0);

    // colors
    let $colorBlock = '';
    (this.descriptor.colors || []).forEach(color => {
      $colorBlock += Encode.radix(color.colorId);
    });
    $id += Encode.padRight($colorBlock, '-', 4);

    // stickers
    $id += Encode.radix(this.descriptor.stickerMin || 0);
    $id += Encode.radix(this.descriptor.stickerMax || 0);

    return $id;
  }

  attached() {
    this.settingsListener = this.storage.listen('descriptor', (change) => { this.updateDescriptor(change.doc) });
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
  }

  detached() {
    this.settingsListener.cancel();
  }


}

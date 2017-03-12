import radix64 from 'radix-64';

export class Encode {
  static radix(value) {
    let r = radix64();
    return r.encodeInt(value);
  }

  static padRight(any, padWith, length){
    let str = any.toString();
    for(let repeatFor = length - str.length; repeatFor>0; repeatFor--) {
      str += padWith;
    }
    return str;
  }

  static toBBID(descriptor) {
    let $id = ''
    // Brand (assumed to be LEGO)
    $id += Encode.radix(1);

    // Is Assembly
    $id += Encode.radix(descriptor.isAssembly ? 1 : 0);

    // Stud Faces
    let $block = '';
    (descriptor.studOrientations || []).forEach(arr => {
      $block += Encode.radix(arr.max);
      $block += Encode.radix(arr.min);
      $block += Encode.radix(arr.adjustment);
    });
    $id += Encode.padRight($block, '-', 15);

    // Height
    let $heightBlock = Encode.radix(descriptor.height || 0);
    $id += Encode.padRight($heightBlock, '.', 2);

    // Hinge
    let $hingeBlock = '';
    (descriptor.studOrientations || []).forEach(arr => {
      $hingeBlock += Encode.radix(arr.orientation ? arr.orientation : 0);
      $hingeBlock += Encode.radix(arr.type ? arr.type : 0);
    });
    $id += Encode.padRight($hingeBlock, '-', 6);

    // sockets
    let $socketBlock = '';
    (descriptor.sockets || []).forEach(arr => {
      $socketBlock += Encode.radix(arr.max);
      $socketBlock += Encode.radix(arr.min);
      $socketBlock += Encode.radix(arr.adjustment);
    });
    $id += Encode.padRight($socketBlock, '-', 15);

    // clips
    let $clipsBlock = '';
    (descriptor.clips || []).forEach(arr => {
      $clipsBlock += Encode.radix(arr.count);
    });
    $id += Encode.padRight($clipsBlock, '-', 4);

    // axle sockets
    $id += Encode.radix(descriptor.axleSockets || 0);

    // axles
    let $axleBlock = '';
    (descriptor.axles || []).forEach(arr => {
      $axleBlock += Encode.radix(arr.lengthUnit);
    });
    $id += Encode.padRight($axleBlock, '-', 4);

    // pins
    let $pinsBlock = '';
    (descriptor.pins || []).forEach(arr => {
      $pinsBlock += Encode.radix(arr.lengthUnit);
      $pinsBlock += Encode.radix(arr.count);
    });
    $id += Encode.padRight($pinsBlock, '-', 6);

    // pin sockets
    let $pinSocketsBlock = '';
    (descriptor.pinSockets || []).forEach(arr => {
      $pinSocketsBlock += Encode.radix(arr.count);
    });
    $id += Encode.padRight($pinSocketsBlock, '-', 4);

    // bars
    let $barsBlock = '';
    (descriptor.bars || []).forEach(arr => {
      $barsBlock += Encode.radix(arr.count);
    });
    $id += Encode.padRight($barsBlock, '-', 4);

    // sleeves
    let $sleeveBlock = '';
    (descriptor.sleeves || []).forEach(arr => {
      $sleeveBlock += Encode.radix(arr.count);
    });
    $id += Encode.padRight($sleeveBlock, '-', 4);

    // mini bars
    $id += Encode.radix(descriptor.isMiniBar ? 1 : 0);

    // colors
    let $colorBlock = '';
    (descriptor.colors || []).forEach(color => {
      $colorBlock += Encode.radix(color.colorId);
    });
    $id += Encode.padRight($colorBlock, '-', 4);

    // stickers
    $id += Encode.radix(descriptor.stickerMin || 0);
    $id += Encode.radix(descriptor.stickerMax || 0);

    return $id;
  }
}

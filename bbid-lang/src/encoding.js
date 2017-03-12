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
}

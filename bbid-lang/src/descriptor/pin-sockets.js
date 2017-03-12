import {inject} from 'aurelia-framework';
import {Storage} from 'storage';

@inject(Storage)
export class DescriptorPinSockets{
  constructor(storage){
    this.storage = storage;
    this.pinSocket0= new PinSocketArrangement();
    this.pinSocket0.show = true;

    this.pinSocket1 = new PinSocketArrangement();
    this.pinSocket2 = new PinSocketArrangement();
    this.pinSocket3 = new PinSocketArrangement();

    this.changeCallback = () => {
      this.pinSocketsChanged();
    }
  }

  attached() {
    this.storage.read('descriptor')
      .then(doc => {
        doc.pinSockets = doc.pinSockets || [];
        doc.pinSockets.forEach( (h, index) => {
          this['pinSocket' + index] = new PinSocketArrangement(h);
          if(index === 0) {
            this['pinSocket' + index].show = true;
          }
        });
      });
  }

  pinSocketsChanged() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.pinSockets = [
          Object.assign({}, this.pinSocket0),
          Object.assign({}, this.pinSocket1),
          Object.assign({}, this.pinSocket2),
          Object.assign({}, this.pinSocket3)
        ];
        return this.storage.update('descriptor', doc);
      })
  }

  removeSide(pinSocket) {
    pinSocket.toggle();
    this.pinSocketsChanged();
  }
}

export class PinSocketArrangement {
    constructor(data) {
      data = data || {};
      this.count = data.count || '';

      this.show = (this.count);
    }

    toggle(){
      if(this.show){
        this.count = '';
      }
      this.show = !this.show;
    }
}

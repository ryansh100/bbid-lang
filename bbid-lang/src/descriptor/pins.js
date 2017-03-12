import {inject} from 'aurelia-framework';
import {Storage} from 'storage';

@inject(Storage)
export class DescriptorPins{
  constructor(storage){
    this.storage = storage;
    this.pin0= new PinArrangement();
    this.pin0.show = true;

    this.pin1 = new PinArrangement();
    this.pin2 = new PinArrangement();

    this.changeCallback = () => {
      this.pinsChanged();
    }
  }

  attached() {
    this.storage.read('descriptor')
      .then(doc => {
        doc.pins = doc.pins || [];
        doc.pins.forEach( (h, index) => {
          this['pin' + index] = new PinArrangement(h);
          if(index === 0) {
            this['pin' + index].show = true;
          }
        });
      });
  }

  pinsChanged() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.pins = [
          Object.assign({}, this.pin0),
          Object.assign({}, this.pin1),
          Object.assign({}, this.pin2)
        ];
        return this.storage.update('descriptor', doc);
      })
  }

  removeSide(pin) {
    pin.toggle();
    this.pinsChanged();
  }
}

export class PinArrangement {
    constructor(data) {
      data = data || {};
      this.lengthUnit = data.lengthUnit || '';
      this.count = data.count || '';

      this.show = (this.lengthUnit || this.count);
    }

    get lengthMm(){
      if(this.lengthUnit) {
        return this.lengthUnit * 8;
      }
      else{
        return '';
      }
    }

    set lengthMm(value){
      if(!value){
        this.lengthUnit = 0;
      }else{
        this.lengthUnit = Math.round(value/8);
      }
    }

    toggle(){
      if(this.show){
        this.count = '';
      }
      this.show = !this.show;
    }
}

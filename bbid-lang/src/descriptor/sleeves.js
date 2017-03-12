import {inject} from 'aurelia-framework';
import {Storage} from 'storage';

@inject(Storage)
export class DescriptorSleeves{
  constructor(storage){
    this.storage = storage;
    this.sleeve0= new SleeveArrangement();
    this.sleeve0.show = true;

    this.sleeve1 = new SleeveArrangement();
    this.sleeve2 = new SleeveArrangement();
    this.sleeve3 = new SleeveArrangement();

    this.changeCallback = () => {
      this.sleevesChanged();
    }
  }

  attached() {
    this.storage.read('descriptor')
      .then(doc => {
        doc.sleeves = doc.sleeves || [];
        doc.sleeves.forEach( (h, index) => {
          this['sleeve' + index] = new SleeveArrangement(h);
          if(index === 0) {
            this['sleeve' + index].show = true;
          }
        });
      });
  }

  sleevesChanged() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.sleeves = [
          Object.assign({}, this.sleeve0),
          Object.assign({}, this.sleeve1),
          Object.assign({}, this.sleeve2),
          Object.assign({}, this.sleeve3)
        ];
        return this.storage.update('descriptor', doc);
      })
  }

  removeSide(sleeve) {
    sleeve.toggle();
    this.sleevesChanged();
  }
}

export class SleeveArrangement {
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

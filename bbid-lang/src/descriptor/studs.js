import {inject} from 'aurelia-framework';
import {Storage} from 'storage';

@inject(Storage)
export class DescriptorStuds {
  constructor(storage){
    this.storage = storage;
    this.orientation0 = new StudOrientation();
    this.orientation0.show = true;

    this.orientation1 = new StudOrientation();
    this.orientation2 = new StudOrientation();
    this.orientation3 = new StudOrientation();
    this.orientation4 = new StudOrientation();

    this.changeCallback = () => {
      this.studsChanged();
    }
  }

  attached() {
    this.storage.read('descriptor')
      .then(doc => {
        doc.studOrientations = doc.studOrientations || [];
        doc.studOrientations.forEach( (orientation, index) => {
          this['orientation' + index] = new StudOrientation(orientation);
          if(index === 0) {
            this['orientation' + index].show = true;
          }
        });
      });
  }

  studsChanged() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.studOrientations = [
          Object.assign({}, this.orientation0),
          Object.assign({}, this.orientation1),
          Object.assign({}, this.orientation2),
          Object.assign({}, this.orientation3),
          Object.assign({}, this.orientation4)
        ];
        return this.storage.update('descriptor', doc);
      })
  }

  removeOrientation(orientation) {
    orientation.toggle();
    this.studsChanged();
  }
}

export class StudOrientation {
    constructor(data) {
      data = data || {};
      this.max = data.max || '';
      this.min = data.min || '';
      this.adjustment = data.adjustment || '';

      this.show = (this.max || this.min || this.adjusment);
    }

    get total() {
      if(this.max || this.min || this.adjusment) {
        return this.max * this.min - this.adjustment;
      }
      else{
        return '';
      }
    }

    set total(value){
      if(!value){
        this.adjustment = 0;
      }else{
        this.adjustment = this.max * this.min - value;
      }
    }

    toggle(){
      if(this.show){
        this.max = '';
        this.min = '';
        this.adjustment = '';
      }
      this.show = !this.show;
    }
}

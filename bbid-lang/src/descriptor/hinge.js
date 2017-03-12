import {inject} from 'aurelia-framework';
import {Storage} from 'storage';

@inject(Storage)
export class DescriptorHinge{
  constructor(storage){
    this.storage = storage;
    this.hinge0= new HingeArrangement();
    this.hinge0.show = true;

    this.hinge1 = new HingeArrangement();
    this.hinge2 = new HingeArrangement();

    this.changeCallback = () => {
      this.hingesChanged();
    }
  }

  attached() {
    this.storage.read('descriptor')
      .then(doc => {
        doc.hinges = doc.hinges || [];
        doc.hinges.forEach( (h, index) => {
          this['hinge' + index] = new HingeArrangement(h);
          if(index === 0) {
            this['hinge' + index].show = true;
          }
        });
      });
  }

  hingesChanged() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.hinges = [
          Object.assign({}, this.hinge0),
          Object.assign({}, this.hinge1),
          Object.assign({}, this.hinge2)
        ];
        return this.storage.update('descriptor', doc);
      })
  }

  removeOrientation(hinge) {
    hinge.toggle();
    this.hingesChanged();
  }
}

export class HingeArrangement {
    constructor(data) {
      data = data || {};
      this.orientation = data.orientation || '';
      this.type = data.type || '';

      this.show = (this.orientation || this.type);
    }

    toggle(){
      if(this.show){
        this.orientation = '';
        this.type = '';
      }
      this.show = !this.show;
    }
}

export let HingeOrientation = new Map([
  ['0', 'None'],
  ['1', 'Horizontal'],
  ['2', 'Vertical'],
  ['3', 'Both']
]);

export let HingeType = new Map([
  ['0', 'None'],
  ['1', 'Ridge'],
  ['2', 'Narrow Finger'],
  ['3', 'Wide Finger'],
  ['4', '1 x 2 Brick Hinge'],
  ['5', 'Long Pin'],
  ['6', 'Short Pin']
]);

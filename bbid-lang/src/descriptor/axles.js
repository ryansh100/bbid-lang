import {inject} from 'aurelia-framework';
import {Storage} from 'storage';

@inject(Storage)
export class DescriptorAxles{
  constructor(storage){
    this.storage = storage;
    this.axle0= new AxleArrangement();
    this.axle0.show = true;

    this.axle1 = new AxleArrangement();
    this.axle2 = new AxleArrangement();
    this.axle3 = new AxleArrangement();

    this.changeCallback = () => {
      this.axlesChanged();
    }
  }

  attached() {
    this.storage.read('descriptor')
      .then(doc => {
        doc.axles = doc.axles || [];
        doc.axles.forEach( (h, index) => {
          this['axle' + index] = new AxleArrangement(h);
          if(index === 0) {
            this['axle' + index].show = true;
          }
        });
      });
  }

  axlesChanged() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.axles = [
          Object.assign({}, this.axle0),
          Object.assign({}, this.axle1),
          Object.assign({}, this.axle2),
          Object.assign({}, this.axle3)
        ];
        return this.storage.update('descriptor', doc);
      })
  }

  removeSide(axle) {
    axle.toggle();
    this.axlesChanged();
  }
}

export class AxleArrangement {
    constructor(data) {
      data = data || {};
      this.lengthUnit = data.lengthUnit || '';

      this.show = (this.lengthUnit);
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

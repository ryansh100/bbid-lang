import {inject} from 'aurelia-framework';
import {Storage} from 'storage';

@inject(Storage)
export class DescriptorBars{
  constructor(storage){
    this.storage = storage;
    this.bar0= new BarArrangement();
    this.bar0.show = true;

    this.bar1 = new BarArrangement();
    this.bar2 = new BarArrangement();
    this.bar3 = new BarArrangement();

    this.changeCallback = () => {
      this.barsChanged();
    }
  }

  attached() {
    this.storage.read('descriptor')
      .then(doc => {
        doc.bars = doc.bars || [];
        doc.bars.forEach( (h, index) => {
          this['bar' + index] = new BarArrangement(h);
          if(index === 0) {
            this['bar' + index].show = true;
          }
        });
      });
  }

  barsChanged() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.bars = [
          Object.assign({}, this.bar0),
          Object.assign({}, this.bar1),
          Object.assign({}, this.bar2),
          Object.assign({}, this.bar3)
        ];
        return this.storage.update('descriptor', doc);
      })
  }

  removeSide(bar) {
    bar.toggle();
    this.barsChanged();
  }
}

export class BarArrangement {
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

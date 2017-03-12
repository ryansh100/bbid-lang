import {inject} from 'aurelia-framework';
import {Storage} from 'storage';

@inject(Storage)
export class DescriptorClips{
  constructor(storage){
    this.storage = storage;
    this.clip0= new ClipArrangement();
    this.clip0.show = true;

    this.clip1 = new ClipArrangement();
    this.clip2 = new ClipArrangement();
    this.clip3 = new ClipArrangement();

    this.changeCallback = () => {
      this.clipsChanged();
    }
  }

  attached() {
    this.storage.read('descriptor')
      .then(doc => {
        doc.clips = doc.clips || [];
        doc.clips.forEach( (h, index) => {
          this['clip' + index] = new ClipArrangement(h);
          if(index === 0) {
            this['clip' + index].show = true;
          }
        });
      });
  }

  clipsChanged() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.clips = [
          Object.assign({}, this.clip0),
          Object.assign({}, this.clip1),
          Object.assign({}, this.clip2),
          Object.assign({}, this.clip3)
        ];
        return this.storage.update('descriptor', doc);
      })
  }

  removeSide(clip) {
    clip.toggle();
    this.clipsChanged();
  }
}

export class ClipArrangement {
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

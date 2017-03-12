import {inject} from 'aurelia-framework';
import {Storage} from 'storage';

@inject(Storage)
export class DescriptorSocket{
  constructor(storage){
    this.storage = storage;
    this.socket0= new SocketArrangement();
    this.socket0.show = true;

    this.socket1 = new SocketArrangement();
    this.socket2 = new SocketArrangement();
    this.socket3 = new SocketArrangement();
    this.socket4 = new SocketArrangement();

    this.changeCallback = () => {
      this.socketsChanged();
    }
  }

  attached() {
    this.storage.read('descriptor')
      .then(doc => {
        doc.sockets = doc.sockets || [];
        doc.sockets.forEach( (h, index) => {
          this['socket' + index] = new SocketArrangement(h);
          if(index === 0) {
            this['socket' + index].show = true;
          }
        });
      });
  }

  socketsChanged() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.sockets = [
          Object.assign({}, this.socket0),
          Object.assign({}, this.socket1),
          Object.assign({}, this.socket2),
          Object.assign({}, this.socket3),
          Object.assign({}, this.socket4)
        ];
        return this.storage.update('descriptor', doc);
      })
  }

  removeSide(socket) {
    socket.toggle();
    this.socketsChanged();
  }
}

export class SocketArrangement {
    constructor(data) {
      data = data || {};
      this.max = data.max || '';
      this.min = data.min || '';
      this.adjustment = data.adjustment || '';

      this.show = (this.max || this.min || this.adjustment);
    }
    get total() {
      if(this.max || this.min || this.adjustment) {
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
        this.min = '';
        this.max = '';
        this.adjustment = '';
      }
      this.show = !this.show;
    }
}

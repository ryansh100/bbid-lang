import {Storage} from 'storage';
import {Encode} from 'encoding';
import {EightBrick} from 'clients/8brick';
import {inject} from 'aurelia-framework';

@inject(Storage, EightBrick)
export class CreateBbid {
  constructor(storage, eightBrick){
    this.eightBrick = eightBrick;
    this.storage = storage;
    this.elementId = '';
    this.photo = null;
    this.reader = new FileReader();
    this.photoData = '';

    this.reader.onloadend = () => {
      this.photoData = this.reader.result;
    };

    this.bbid = '';
    this.busy = false;
  }

  get fileInput(){
    return document.getElementById('photoUpload');
  }

  activate(){
    this.storage.read('descriptor', (doc) => {
      this.bbid = Encode.BBID(doc);
    });
  }

  previewImage(){
    let fileHandle = this.fileInput.files[0];
    if(fileHandle) {
      this.reader.readAsDataURL(fileHandle);
    }
  }

  create() {
    this.busy = true;
    return this.eightBrick.create(this.bbid, this.elementId, this.photoData)
      .catch(() => { })
      .then(() => {
        this.busy = false;
      });
  }
}

import {inject} from 'aurelia-framework';
import {Storage} from 'storage';
import {Router} from 'aurelia-router';

@inject(Storage, Router)
export class DescriptorDashboard {
   constructor(store, router) {
     this.router = router;
     this.storage = store;
     this.settingsListener = null;
     this.descriptor = {};
   }

   attached() {
     this.settingsListener = this.storage.listen('descriptor', (doc) => { this.settings(doc) });
   }

   activate(){
     return this.storage.read('descriptor')
      .then(doc => {
        this.descriptor = Object.assign({}, doc);
      }).catch(err => {});
   }

   settings(doc) {
     let keys = Object.keys(this.descriptor);
     keys.forEach(key => {
       this.descriptor[key] = undefined;
     })

     this.descriptor = Object.assign(this.descriptor, doc);
   }

   detached() {
     this.settingsListener.cancel();
   }
}

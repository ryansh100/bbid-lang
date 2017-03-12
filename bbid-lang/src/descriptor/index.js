import {Storage} from 'storage';
import {inject} from 'aurelia-framework';

/**
 * A viewmodel for the Descriptor Dashboard where you can configure different
 * options to describe the part.
 */
@inject(Storage)
export class DescriptorIndex{
  constructor(storage){
    this.storage = storage;
    this.navigatingTo = null;
    this.routes = [
      {
        route: '',
        name: 'descriptor-dashboard',
        moduleId: './dashboard'
      },
      {
        route:    'assembly',
        title:    'Assembly',
        name:     'descriptor-assembly',
        moduleId: './assembly',
        nav:      true,
        settings: {
            isAssembly: false
        }
      },
      {
        route:    'studs',
        title:    'Studs',
        name:     'descriptor-studs',
        moduleId: './studs',
        nav:      true
      },
      {
        route:    'height',
        title:    'Height',
        name:     'descriptor-height',
        moduleId: './height',
        nav:      true
      },
      {
        route:    'hinge',
        title:    'Hinges',
        name:     'descriptor-hinge',
        moduleId: './hinge',
        nav:       true
      },
      {
        route:    'sockets',
        title:    'Sockets',
        name:     'descriptor-sockets',
        moduleId: './sockets',
        nav:       true
      },
      {
        route:    'clips',
        title:    'Clips',
        name:     'descriptor-clips',
        moduleId: './clips',
        nav:       true
      },
      {
        route:    'axle-sockets',
        title:    'Axle Sockets',
        name:     'descriptor-axle-sockets',
        moduleId: './axle-sockets',
        nav:       true
      },
      {
        route:    'axles',
        title:    'Axles',
        name:     'descriptor-axles',
        moduleId: './axles',
        nav:       true
      },
      {
        route:    'pins',
        title:    'Pins',
        name:     'descriptor-pins',
        moduleId: './pins',
        nav:       true
      },
      {
        route:    'pin-sockets',
        title:    'Pin Sockets',
        name:     'descriptor-pin-sockets',
        moduleId: './pin-sockets',
        nav:       true
      },
      {
        route:    'bars',
        title:    'Clip Bars',
        name:     'descriptor-bars',
        moduleId: './bars',
        nav:       true
      },
      {
        route:    'sleeves',
        title:    'Bar Sleeves',
        name:     'descriptor-sleeves',
        moduleId: './sleeves',
        nav:       true
      },
      {
        route:    'mini-bar',
        title:    'Mini Bar',
        name:     'descriptor-mini-bar',
        moduleId: './mini-bar',
        nav:       true
      },
      {
        route:    'colors',
        title:    'Colors',
        name:     'descriptor-colors',
        moduleId: './colors',
        nav:       true
      },
      {
        route:    'sticker',
        title:    'Sticker',
        name:     'descriptor-sticker',
        moduleId: './sticker',
        nav:       true
      },
      {
        route:    'printed',
        title:    'Printed',
        name:     'descriptor-printed',
        moduleId: './printed',
        nav:       true
      }
    ];
  }

  activate(params, config, instruction) {
    this.navigatingTo = this.routes.find(r => r.route.indexOf(params.path) > -1);
  }

  configureRouter(config, router){
    this.router = router;
    config.map(this.routes);
  }

  clearAttributes(){
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc = {
          _rev: doc._rev
        };
        return this.storage.update('descriptor', doc);
      })
  }
}

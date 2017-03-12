export class App {
  constructor() {

  }
  configureRouter(config, router) {
    config.title = 'BBID';
    config.map([
      {
        route: ['', '*path'],
        name: 'home',
        viewPorts: {
          top: {
            moduleId: 'panel/index'
          },
          bottom: {
            moduleId: 'descriptor/index'
          }
        }
      }
    ]);
  }
}

export class Panel {
  configureRouter(config, router){
    this.router = router;
    config.map([
      {
        route:      ['', '*path'],
        name:       'responsive',
        title:      'Matches',
        moduleId:   './responsive'
      }
    ]);
  }
}

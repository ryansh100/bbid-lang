export class Panel {
  configureRouter(config, router){
    this.router = router;
    config.map([
      {
        route:      '',
        name:       'welcome',
        title:      'Welcome',
        moduleId:   './welcome',
        nav:        true
      },
      {
        route:      ['*path'],
        name:       'responsive',
        title:      'Matches',
        moduleId:   './responsive'
      }
    ]);
  }
}

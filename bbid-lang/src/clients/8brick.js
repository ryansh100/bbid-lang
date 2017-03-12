import {HttpClient, json} from 'aurelia-fetch-client';

export class EightBrick{
  constructor(){
    let httpClient = new HttpClient();
    httpClient.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8888/api/')
        .withDefaults({
          headers: {
            'X-Requested-With': 'Fetch'
          }
        });
    });
    this.http = httpClient;
  }

  create(bbid, elementId, photo) {
    let options = {
      method: 'POST',
      body: json({
        bbid: bbid,
        elementId: elementId,
        photo: photo
      })
    };
    return this.http.fetch('pieces', options);
  }
}

import {inject} from 'aurelia-framework';
import {Storage} from 'storage';
import {Colors, Color} from 'colorPalette';

@inject(Storage)
export class DescriptorColor{
  constructor(storage){
    this.storage = storage;
    this.changeCallback = () => {
      this.colorsChanged();
    }

    this.color0= new ColorOption(null, this.changeCallback);
    this.color0.show = true;

    this.color1 = new ColorOption(null, this.changeCallback);
    this.color2 = new ColorOption(null, this.changeCallback);
    this.color3 = new ColorOption(null, this.changeCallback);
  }

  attached() {
    this.storage.read('descriptor')
      .then(doc => {
        doc.colors = doc.colors || [];
        doc.colors.forEach( (h, index) => {
          this['color' + index] = new ColorOption(h);
          this['color' + index].cb = this.changeCallback;
          if(index === 0) {
            this['color' + index].show = true;
          }
        });
      });
  }

  colorsChanged() {
    this.storage.read('descriptor')
      .catch(err => { return {}; })
      .then(doc => {
        doc.colors = [
          { colorId: this.color0.colorId },
          { colorId: this.color1.colorId },
          { colorId: this.color2.colorId },
          { colorId: this.color3.colorId }
        ];
        return this.storage.update('descriptor', doc);
      })
  }

  removeColor(color) {
    color.toggle();
    this.colorsChanged();
  }

  clearColorId(color) {
    color.colorId = '';
    this.colorsChanged();
  }
}

export class ColorOption {
    constructor(data, cb) {
      data = data || {};
      this.colorId = data.colorId || '';
      this._searchTerm = '';
      this._searchMatches = [];
      this.show = (this.colorId);
      if(cb){
        this.cb = cb;
      }
    }

    get colors() {
      return Colors;
    }

    get searchTerm(){
      return this._searchTerm;
    }

    set searchTerm(value) {
      this._searchTerm = value
      if(this._searchTerm.length > 1){
        this.searchForColor();
      }else{
        this._searchMatches.splice(0);
      }
    }

    get searchMatches() {
      return this._searchMatches.sort((a, b) => {
        return b.usage - a.usage;
      });
    }

    get colorSelectedCss() {
      if(Colors.has(colorId)){
        return Colors.get(colorId).css;
      }
      return 'transparent';
    }

    searchForColor() {
      this._searchMatches.splice(0);
      let terms = this._searchTerm.toLowerCase();
      terms = terms.replace('transparent', 'trans');
      terms = terms.split(' ');

      let matches = new Map();
      for (let [colorId, color] of Colors) {
        let termHits = 0;
        terms.forEach(t => {
            let nameMatch = color.name.toLowerCase().indexOf(t) > -1;
            let commonMatch = color.common.toLowerCase().indexOf(t) > -1;
            let idMatch = color.id == t;
            let hasMatch = nameMatch || commonMatch || idMatch;
            if(hasMatch){
              termHits++;
            }
        });
        if(termHits == terms.length && !matches.has(color.id)){
          matches.set(color.id, color);
        }
      }
      for (let [key, match] of matches){
        this._searchMatches.push(match);
      }
    }

    selectColor(color){
      this.colorId = color.id;
      this._searchMatches.splice(0);
      this.searchTerm = '';
      this.cb();
    }

    toggle(){
      if(this.show){
        this.colorId = '';
      }
      this.show = !this.show;
    }
}

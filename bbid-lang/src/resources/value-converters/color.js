import {Colors} from 'colorPalette';

export class idToColorCssValueConverter{
  toView(colorId){
    if(Colors.has(colorId)){
      return Colors.get(colorId).css;
    }
    return 'transparent';
  }
}

export class idToColorCommonNameValueConverter{
  toView(colorId){
    if(Colors.has(colorId)){
      return Colors.get(colorId).common;
    }
    return '';
  }
}

export class idToColorNameValueConverter{
  toView(colorId){
    if(Colors.has(colorId)){
      return Colors.get(colorId).name;
    }
    return '';
  }
}

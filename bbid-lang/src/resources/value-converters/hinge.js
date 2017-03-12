import {HingeOrientation, HingeType} from 'descriptor/hinge';

export class toHingeOrientationValueConverter {
  toView(value){
    return HingeOrientation.get(value);
  }
}

export class toHingeTypeValueConverter {
  toView(value){
    return HingeType.get(value);
  }
}

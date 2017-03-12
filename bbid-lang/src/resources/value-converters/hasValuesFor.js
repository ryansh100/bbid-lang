export class hasValuesForValueConverter {
  toView() {
    let [source, ...properties] = Array.prototype.slice.call(arguments);
    let hasValues = properties.reduce((acc, value) => {
      if(source[value] || source[value]===0){
        acc++;
      }
      return acc;
    }, 0);
    return hasValues == properties.length;
  }
}

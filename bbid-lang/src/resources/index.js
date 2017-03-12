export function configure(config) {
  config.globalResources([
    './elements/descriptor-navigation.html',
    './value-converters/color',
    './value-converters/hasValuesFor',
    './value-converters/hinge'
  ]);
}

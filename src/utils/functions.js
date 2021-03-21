/*
* Get random number
* @param {Number} number - A number that must be generated randomly
* */
export function randomNumber(number = 1) {
  return Math.floor(Math.random() * number);
}

export const {isArray} = Array;

export function isObject(data) {
  return data !== null && typeof data === 'object' && !isArray(data);
}

export function isElement(data) {
  return isObject(data) && data.nodeType === 1;
}

export function isNumber(data) {
  return typeof data === 'number';
}

export function isBoolean(data) {
  return typeof data === 'boolean';
}

export function isColor(data) {
  if (isEmptyString(data)) return true;
  const colorPattern = /#(?:[a-f\d]{3}){1,2}\b|rgb\((?:(?:\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,){2}\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)|\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%(?:\s*,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%){2})\s*\)|hsl\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2}\)|(?:rgba\((?:(?:\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,){3}|(?:\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*,){3})|hsla\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2},)\s*0*(?:1|0(?:\.\d+)?)\s*\)/;
  const colorRegexp = new RegExp(colorPattern);
  return colorRegexp.test(data);
}

export function isColorProp(props, propName, componentName) {
  if (!isColor(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
}

export function isString(data) {
  return typeof data === 'string';
}

export function isEmpty(data) {
  return !(isArray(data) ?
    data.length : (
      isObject(data) ?
        isElement(data) || Object.keys(data).length : (
        !(isNumber(data) || isBoolean(data)) ? data : true
      )
    )
  );
}

export function isEmptyString(data) {
  return !(isString(data) ? data : false);
}

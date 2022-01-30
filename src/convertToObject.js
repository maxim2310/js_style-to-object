'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');
  const trimed = properties.map(prop =>
    prop.split(':').map(elem => elem.trim()));

  const styles = {};

  for (const prop of trimed) {
    if (prop[0] && prop[1]) {
      styles[prop[0]] = prop[1];
    }
  }

  return styles;
}

module.exports = convertToObject;

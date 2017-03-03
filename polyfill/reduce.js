// if (!Array.prototype.reduce) {
//
// }

Object.defineProperty(Array.prototype, 'custom', {
  value: function (callback /*, initialValue */) {

    // TODO. validate parameters

    if (!this) {
      throw new TypeError( 'Array.prototype.custom ' +
        'called on null or undefined' );
    }

    if (typeof callback !== "function") {
      throw new Error(callback +
        ' is not a function');
    }

    // 1. origin caller
    const origin = Object(this);

    let result = null;
    let index = 0;

    // 2. get length
    const len = origin.length;

    if (arguments.length === 2) {
      result = arguments[1];
    } else {
      while (index < len && !(index in origin)) {
        index++;
      }

      // 3. If len is 0 and initialValue is not present,
      //    throw a TypeError exception.
      if (index >= len) {
        throw new TypeError( 'Reduce of empty array ' +
          'with no initial value' );
      }

      result = origin[index++];
    }

    for (index; index < len; index++) {
      result = callback(result, origin[index], index, origin);
    }

    return result;
  }
});

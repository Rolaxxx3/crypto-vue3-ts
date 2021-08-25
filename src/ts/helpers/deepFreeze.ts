import isObjectLike from 'lodash.isobjectlike';
import forOwn from 'lodash.forown';

// eslint-disable-next-line @typescript-eslint/ban-types
function deepFreeze (object: Object): void {
  if (!isObjectLike(object)) {
    return;
  }

  Object.freeze(object);

  forOwn(object, function (value: never) {
    if (!isObjectLike(value) || Object.isFrozen(value)) {
      return;
    }

    deepFreeze(value);
  });
}

export default deepFreeze;

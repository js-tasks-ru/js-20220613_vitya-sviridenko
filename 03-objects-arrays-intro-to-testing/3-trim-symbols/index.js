/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  switch (size) {
    case undefined: return string;
    case 0: return '';
  }

  let result = '';
  let counter = 0;
  let previousChar;

  for (let i = 0; i < string.length; i++) {
    const currentChar = string.charAt(i);

    if (currentChar !== previousChar) {
      result += currentChar;
      previousChar = currentChar;
      counter = 0;
    }

    else if (counter < size) {
      result += currentChar;
    }

    counter++;
  }

  return result;
}

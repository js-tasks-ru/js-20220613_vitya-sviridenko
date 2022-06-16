const localeCompareParams = [
  ['ru', 'en'],
  { caseFirst: 'upper' },
];

/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} array - the array of strings
 * @param {string} [order="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(array, order = 'asc') {
  let multiplier;

  switch (order) {
    case 'asc': multiplier = 1; break;
    case 'desc': multiplier = -1; break;
    default: return null;
  }

  array = [...array];
  return array.sort((a, b) => multiplier * a.localeCompare(b, ...localeCompareParams));
}

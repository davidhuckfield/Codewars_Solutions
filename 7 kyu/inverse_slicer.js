// link : https://www.codewars.com/kata/586ec0b8d098206cce001141

function inverseSlice(items, a, b) {
    items.splice(a, b-a);
    return items;
  }
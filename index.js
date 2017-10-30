// Code your solution in this file
function findMatching(arr, name) {
  const result = [];
  for (const element of arr) {
    if (element.toLowerCase() === name.toLowerCase()) {
      result.push(element);
    }
  }
  return result;
}

function fuzzyMatch(arr, snippet) {
  const result = [];
  for (const element of arr) {
    if (
      element.slice(0, snippet.length).toLowerCase() === snippet.toLowerCase()
    ) {
      result.push(element);
    }
  }
  return result;
}

function matchName(arr, name) {
  const result = [];
  for (const obj of arr) {
    if (obj.name.toLowerCase() === name.toLowerCase()) {
      result.push(obj);
    }
  }
  return result;
}

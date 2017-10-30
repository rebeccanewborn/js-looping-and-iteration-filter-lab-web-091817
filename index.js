// Code your solution in this file
function findMatching(arr, name) {
  function nameMatch(elt) {
    return elt.toLowerCase() === name.toLowerCase();
  }

  return arr.filter(nameMatch);
  // const result = [];
  // for (const element of arr) {
  //   if (element.toLowerCase() === name.toLowerCase()) {
  //     result.push(element);
  //   }
  // }
  // return result;
}

function fuzzyMatch(arr, snippet) {
  function snippetMatch(elt) {
    return elt.slice(0, snippet.length).toLowerCase() === snippet.toLowerCase();
  }

  return arr.filter(snippetMatch);

  // const result = [];
  // for (const element of arr) {
  //   if (
  //     element.slice(0, snippet.length).toLowerCase() === snippet.toLowerCase()
  //   ) {
  //     result.push(element);
  //   }
  // }
  // return result;
}

function matchName(arr, name) {
  function nameMatch(obj) {
    return obj.name.toLowerCase() === name.toLowerCase();
  }

  return arr.filter(nameMatch);
  // const result = [];
  // for (const obj of arr) {
  //   if (obj.name.toLowerCase() === name.toLowerCase()) {
  //     result.push(obj);
  //   }
  // }
  // return result;
}

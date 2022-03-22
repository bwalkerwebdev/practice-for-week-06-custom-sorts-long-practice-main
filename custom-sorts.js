function ageSort(users) {
  // Your code here
  let sortedUsers = users.sort((a, b) => a.age - b.age);
  return sortedUsers;
}

function oddEvenSort(arr) {
  // Your code here
  // oddEvenSort sorts odds before evens
  arr.sort(function(a,b){
    if(a%2 !== 0 && b%2 === 0){
      return -1
    };

    if(a%2 === 0 && b&2!==0){
      return 1
    };
    return a-b;
  })
  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  let aArr = s.split("").sort().join("");
  let tArr = t.split("").sort().join("");
  if (aArr === tArr) {
    return true;
  }
  return false;
}

function reverseBaseSort(arr) {
  // Your code here
  // Given an array, sort it such that the numbers are grouped by its base in descending order, but ascending within each group.
  // reverseBaseSort sorts numbers by reverse base
  let sortedArr = arr.sort((a, b) => {
    let aBase = a.toString(10).length;
    let bBase = b.toString(10).length;
    if (aBase === bBase) {
      return a - b;
    } else {
      return bBase - aBase;
    }
  });
  return sortedArr;
}

function frequencySort(arr) {
  // Your code here
  // Given an array of integers, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order. Return the sorted array.
  let sortedArr = arr.sort((a, b) => {
    let aFreq = arr.filter((num) => num === a).length;
    let bFreq = arr.filter((num) => num === b).length;
    if (aFreq === bFreq) {
      return b - a;
    }
    return aFreq - bFreq;
  });
  return sortedArr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];

const BubbleSort = arr => {
  let swapped;
  let length = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < length; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

const SelectionSort = arr => {
  let length = arr.length;
  let minIndex;
  for (let i = 0; i < length; i++) {
    minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

const InsertionSort = arr => {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[i]) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

const MergeSort = arr => {
  let length = arr.length;
  if (length < 2) return arr;
  let mid = Math.floor(length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return Merge(MergeSort(left), MergeSort(right));
};

const Merge = (left, right) => {
  let array = [];
  let leftLength = left.length;
  let rightLength = right.length;
  let l = 0;
  let r = 0;
  while (l < leftLength && r < rightLength) {
    if (left[l] < right[r]) {
      array.push(left[l++]);
    } else {
      array.push(right[r++]);
    }
  }
  return array.concat(left.slice(l)).concat(right.slice(r));
};

const BinarySearch = (arr, target, min, max) => {
  if (min === undefined) min = 0;
  if (max === undefined) max = arr.length - 1;

  var guess = Math.floor((max - min) / 2 + min);
  if (max <= min && arr[guess] !== target) return null;
  else if (arr[guess] === target) return `Element Found at ${guess}`;
  else if (arr[guess] < target)
    return BinarySearch(arr, target, guess + 1, max);
  else return BinarySearch(arr, target, min, guess - 1);
};

const palindrome = word => {
  let letters = [];
  let rword = "";

  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (let j = 0; j < word.length; j++) {
    rword = rword + letters.pop();
  }

  if (word === rword) {
    return `${word} is a Palindrome`;
  } else {
    return "Not a Palindrome";
  }
};

const factorial = data => {
  let n = data;
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(`Bubble Sort: ${BubbleSort([9, 2, 8, 1, 3, 7, 4, 5])}`);
console.log(`Selection Sort: ${SelectionSort([9, 2, 8, 1, 3, 7, 4, 5])}`);
console.log(`Insertion Sort: ${InsertionSort([9, 2, 8, 1, 3, 7, 4, 5])}`);
console.log(`Merge Sort: ${MergeSort([9, 2, 8, 1, 3, 7, 4, 5])}`);
console.log(`Binay Search: ${BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)}`);
console.log(`Palindrome: ${palindrome("racecar")}`);
console.log(`Factorial: ${factorial(8)}`);

// https://school.programmers.co.kr/learn/courses/30/lessons/120890

// solution 1
function solution(array, n) {
  let myArray = array.sort((a, b) => a - b);
  let cArray = myArray.map((cur) => Math.abs(cur - n));

  return myArray[cArray.indexOf(Math.min(...cArray))];
}

// solution 2
function solution(array, n) {
  return array.reduce((a, c) => (Math.abs(a - n) < Math.abs(c - n) ? a : Math.abs(a - n) === Math.abs(c - n) ? Math.min(a, c) : c));
}

// solution 3
function solution(array, n) {
  array.sort((a, b) => {
    return Math.abs(n - a) - Math.abs(n - b) || a - b;
  });

  return array[0];
}

// result
console.log(solution([10, 11, 12], 13)); // 12

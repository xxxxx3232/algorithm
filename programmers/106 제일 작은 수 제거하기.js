// https://school.programmers.co.kr/learn/courses/30/lessons/12935

// solution 1
function solution(arr) {
  arr.splice(arr.indexOf([...arr].sort((a, b) => a - b).shift()), 1);
  return arr?.length ? arr : [-1];
}

// solution 2
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

// result
console.log(solution([4, -1, -3, 1]));
// [4,3,2,1]	[4,3,2]

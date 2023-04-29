// https://school.programmers.co.kr/learn/courses/30/lessons/120875

// 기울기란?
// https://ko.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-slope/a/slope-from-two-points

// solution 1
const solution = (dots) =>
  Math.abs((dots[0][0] - dots[1][0]) / (dots[0][1] - dots[1][1])) == Math.abs((dots[2][0] - dots[3][0]) / (dots[2][1] - dots[3][1])) ? 1 : 0; // 0, 1 배열의 기울기 비교 2, 3 배열의 기울기 비교

// solution 2
function solution(dots) {
  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3])) return 1;
  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3])) return 1;
  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2])) return 1;
  return 0;
}

function calculateSlope(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]); // 좌표의 기울기는 x1 - x2 / y1 - y2 이다.
}

// result
console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 1

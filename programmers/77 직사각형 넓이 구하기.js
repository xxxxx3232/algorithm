// https://school.programmers.co.kr/learn/courses/30/lessons/120860

// solution 1
function solution(dots) {
  let width = [];
  let height = [];

  for (let n of dots) {
    width.push(n[0]);
    height.push(n[1]);
  }

  return (-Math.min(...width) + Math.max(...width)) * (-Math.min(...height) + Math.max(...height)); // 직사각형의 중복되는 가로와 세로의 특성 때문에, Math.min(), Math.max()로 중복을 제거했다.
}

// solution 2
var s = Math.abs,
  solution = ([[a, b], [c, d], [e, f]]) => s(a - (a == c ? e : c)) * s(b - (b == d ? f : d)); // 변수를 연달아 지정할 수 있다. 구조분해를 활용

// solution 3
const solution = (dots) => {
  const x = [...new Set(dots.map((p) => p[0]))]; // 직사각형의 중복되는 가로와 세로의 특성 때문에, new Set()으로 중복을 제거했다.
  const y = [...new Set(dots.map((p) => p[1]))];
  return Math.abs((x[0] - x[1]) * (y[0] - y[1]));
};

// result
console.log(
  solution([
    [1, 5],
    [4, 5],
    [1, 3],
    [4, 3],
  ])
); // 6
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
); // 4
console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
); // 1

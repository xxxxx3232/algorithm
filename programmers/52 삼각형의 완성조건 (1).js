// https://school.programmers.co.kr/learn/courses/30/lessons/120889

// solution 1
const solution = (sides) => (sides.reduce((acc, cur) => acc + cur, 0) - Math.max(...sides) > Math.max(...sides) ? 1 : 2);

// solution 2
function solution(sides) {
  sides = sides.sort((a, b) => a - b); // 오름차순 배열을 생성하여 큰수를 찾는다.
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

// result
console.log(solution([1, 2, 3])); //	2

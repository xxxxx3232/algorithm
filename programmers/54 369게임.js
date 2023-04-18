// https://school.programmers.co.kr/learn/courses/30/lessons/120891

// solution 1
const solution = (order) =>
  String(order)
    .split("")
    .filter((n) => ~~n != 0 && ~~n % 3 == 0).length;

// solution 2
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length; // match 메서드는 정규식을 사용해 특정 패턴을 찾을 때, 유용하다.
  return answer;
}

// solution 3
function solution(order) {
  return ("" + order).split(/[369]/).length - 1; // 정규식 활용
}

// solution 4
function solution(order) {
  const mySet = new Set([3, 6, 9]); // Set 자료구조는 검색 속도가 빠르다.
  return String(order)
    .split("")
    .filter((num) => mySet.has(Number(num))).length;
}

// result
console.log(solution(1990603)); // 4

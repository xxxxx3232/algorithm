// https://school.programmers.co.kr/learn/courses/30/lessons/120912

// solution 1
const solution = (array) => (array.join("").match(/7/g) ? array.join("").match(/7/g).length : 0);

// solution 2
function solution(array) {
  return array
    .join()
    .split("")
    .filter((el) => {
      return el == "7";
    }).length;
}

// solution 3
function solution(array) {
  return array.join("").split("7").length - 1;
}

// result
console.log(solution([0, 0, 55, 84, 74, 77])); // 4

// https://school.programmers.co.kr/learn/courses/30/lessons/120924

// solution 1
function solution(common) {
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    return (common.pop() * common[1]) / common[0];
  }
}

// result
console.log(solution([1, 2, 3, 4])); // 5
// [1, 2, 3, 4]	5
// [2, 4, 8]	16

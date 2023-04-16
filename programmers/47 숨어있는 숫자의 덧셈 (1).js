// https://school.programmers.co.kr/learn/courses/30/lessons/120851

// solution 1
const solution = (my_string) =>
  my_string.match(/\d/g).reduce((acc, cur) => {
    return acc + ~~cur;
  }, 0);

// solution 2
function solution(my_string) {
  return [...my_string].reduce((acc, cur) => (Number(cur) ? +acc + +cur : acc), 0);
}

// result
console.log(solution("aAb1B2cC34oOp")); // 10

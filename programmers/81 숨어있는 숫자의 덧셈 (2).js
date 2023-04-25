// https://school.programmers.co.kr/learn/courses/30/lessons/120864

// solution 1
const solution = (my_string) => Math.floor(my_string.split(/[a-z, A-Z]/g).reduce((acc, cur) => ~~acc + ~~cur));

// solution 2
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0); // /\D+/ 정규식은 숫자가 아닌 모든 문자(예: 공백, 특수문자 등)를 기준으로 문자열을 분할합니다.
}

// result
console.log(solution("aAb1B2cC34oOp")); // 37

// https://school.programmers.co.kr/learn/courses/30/lessons/120892

// solution 1
function solution(cipher, code) {
  var answer = "";

  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }

  return answer;
}

// solution 2
function solution(cipher, code) {
  return cipher
    .split("")
    .filter((_, index) => (index + 1) % code === 0)
    .join("");
}

// result
console.log(solution("dfjardstddetckdaccccdegk", 4)); // "attack"

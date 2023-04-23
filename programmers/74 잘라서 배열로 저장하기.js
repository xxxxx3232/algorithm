// https://school.programmers.co.kr/learn/courses/30/lessons/120913

// solution 1
const solution = (my_str, n) =>
  [...my_str]
    .map((num, i) => ((i + 1) % n == 0 ? (my_str.length == i + 1 ? num : `${num} `) : num)) // n번째 마다 ' '를 추가하여 split(' ')으로 나누어 배열로 반환
    .join("")
    .split(" ");

// solution 2
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g")); // 정규식 활용
}

// solution 3
function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n)); // 배열을 slice()를 사용하여 push()하는 방법
  return res;
}

// result
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]

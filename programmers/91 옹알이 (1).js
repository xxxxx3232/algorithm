// https://school.programmers.co.kr/learn/courses/30/lessons/120956

// solution 1
const solution = (babbling) => babbling.reduce((acc, cur) => (cur.replace(/(aya|ye|woo|ma)/g, "") == "" ? acc + 1 : acc), 0);

// solution 2
function solution(babbling) {
  var answer = 0;

  const regex = /^(aya|ye|woo|ma)+$/;
  // ^는 문자열의 시작을 의미합니다.
  // (aya|ye|woo|ma)는 aya, ye, woo, ma 중 하나와 일치하는 것을 의미합니다. |는 OR 연산자를 의미합니다.
  // +는 앞의 패턴이 하나 이상 반복되는 것을 의미합니다.
  // $는 문자열의 끝을 의미합니다.
  // 따라서 /^(aya|ye|woo|ma)+$/는 aya, ye, woo, ma 중 하나로 시작하고, 이어서 하나 이상의 문자열이 오며, 문자열의 끝에 도달할 때까지 해당 문자열과 일치합니다.

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
    // test()는 자바스크립트의 정규식 객체 메서드 중 하나입니다.
    // 이 메서드는 주어진 문자열이 정규식 패턴과 일치하는지 검사하고, 일치하면 true를 반환하며, 일치하지 않으면 false를 반환합니다.
  });

  return answer;
}

// result
console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1

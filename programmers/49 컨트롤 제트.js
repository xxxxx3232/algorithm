// https://school.programmers.co.kr/learn/courses/30/lessons/120853

// solution 1
const solution = (s) => s.split(" ").reduce((acc, cur, i, array) => acc + (array[i] == "Z" || array[i + 1] == "Z" ? 0 : ~~cur), 0);

// solution 2
function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop(); // 모든 숫자를 stack에 할당하는 과정에서 Z가 나올때, stack에서 pop으로 제외한다.
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}

// result
console.log(solution("1 2 Z 3")); // 4

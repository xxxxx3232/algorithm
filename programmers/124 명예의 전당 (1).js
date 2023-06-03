// https://school.programmers.co.kr/learn/courses/30/lessons/138477

// solution 1
function solution(k, score) {
  let result = [];

  for (let i = 1; i <= score.length; i++) {
    let top = score
      .slice(0, i)
      .sort((a, b) => b - a)
      .slice(0, k);
    result.push(top[top.length - 1]);
  }

  return result;
}

// solution 2
function solution(k, score) {
  const stack = [];

  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}

// solution 3
function solution(k, score) {
  var answer = [];

  return score.reduce((acc, cur) => {
    answer.push(cur);
    answer = answer.sort((a, b) => b - a).slice(0, k);
    return [...acc, Math.min(...answer)];
  }, []);
}

// result
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
// 3	[10, 100, 20, 150, 1, 100, 200]	[10, 10, 10, 20, 20, 100, 100]

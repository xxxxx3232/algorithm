// https://school.programmers.co.kr/learn/courses/30/lessons/120852

// solution 1
function solution(n) {
  var answer = [];
  let i = 2;
  let j = 0;

  while (n >= 2) {
    if (n % i == 0) {
      if (!answer.includes(i)) {
        answer[j++] = i;
      }
      n = n / i;
    } else {
      i++;
    }
  }

  return answer;
}

// solution 2
function solution(n) {
  var answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      answer.push(i);
    }
  }

  return [...new Set(answer)]; // Set은 중복을 허용하지 않는 값의 집합을 나타낸다.
}

// solution 3
function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer)];
}

// result
console.log(solution(12)); // [2, 3]

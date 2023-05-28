// https://school.programmers.co.kr/learn/courses/30/lessons/131705

// solution 1
function solution(number) {
  let result = [];

  number.forEach((n, i1) => {
    number.forEach((j, i2) => {
      number.forEach((k, i3) => {
        i1 != i2 && i2 != i3 && i3 != i1 && n + j + k == 0
          ? !result.some((z) => JSON.stringify(z) == JSON.stringify([i1, i2, i3].sort())) && result.push([i1, i2, i3].sort())
          : "";
      });
    });
  });

  return result.length;
}

// solution 2
function solution(number) {
  let result = 0;

  const combination = (current, start) => {
    // 서로 다른 사람 3명을 필요로하므로 조합 활용 => 3명이 존재 => 그 합을 구하여 0이면 result++;
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  combination([], 0);
  return result;
}

// solution 3
function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        const sum = number[i] + number[j] + number[k];
        if (sum === 0) answer++;
      }
    }
  }
  return answer;
}

// result
console.log(solution([-2, -2, -1, 0, 1, 2, 3, 4]));
// [-2, 3, 0, 2, -5]	2

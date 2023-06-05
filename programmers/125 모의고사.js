// https://school.programmers.co.kr/learn/courses/30/lessons/42840

// solution 1
function solution(answers) {
  let result = [0, 0, 0];
  let giveUp = { first: [1, 2, 3, 4, 5], second: [2, 1, 2, 3, 2, 4, 2, 5], third: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] };

  let i = 0;
  while (answers.length > i * 5) {
    result[0] += answers
      .slice(giveUp.first.length * i, giveUp.first.length * i + giveUp.first.length)
      .filter((correct, i) => correct == giveUp.first[i]).length;
    result[1] += answers
      .slice(giveUp.second.length * i, giveUp.second.length * i + giveUp.second.length)
      .filter((correct, i) => correct == giveUp.second[i]).length;
    result[2] += answers
      .slice(giveUp.third.length * i, giveUp.third.length * i + giveUp.third.length)
      .filter((correct, i) => correct == giveUp.third[i]).length;
    i++;
  }

  return result.map((rank, i) => rank == Math.max(...result) && i + 1).filter((n) => n);
}

// solution 2
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

// result
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
// [1,2,3,4,5]	[1]

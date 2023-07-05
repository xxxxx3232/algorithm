// https://school.programmers.co.kr/learn/courses/30/lessons/77484

// solution 1
function solution(lottos, win_nums) {
  return lottos
    .reduce(
      ([win, lose], cur) => {
        win_nums.includes(cur) ? --win && --lose : cur == 0 ? --win : false;
        return [win, lose];
      },
      [7, 7]
    )
    .map((n) => (n == 7 ? 6 : n));
}

// solution 2
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]]; // 가독성 있는 코드
}

// result
console.log(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]));
// [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	[3, 5]

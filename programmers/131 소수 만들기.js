// https://school.programmers.co.kr/learn/courses/30/lessons/12977

// solution 1
function solution(nums) {
  let result = 0;

  nums.forEach((n, i) => {
    nums.slice(i + 1).forEach((j, t) => {
      nums.slice(i + t + 2).some((p) => {
        let add = n + j + p;
        for (let i = 2; i < add; i++) {
          if (add % i == 0) {
            return false;
          }
        }
        result++;
      });
    });
  });

  return result;
}

// result
console.log(solution([1, 2, 3, 4]));
// [1,2,3,4]	1

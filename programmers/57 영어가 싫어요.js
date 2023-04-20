// https://school.programmers.co.kr/learn/courses/30/lessons/120894

// solution 1
let nums = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const solution = (numbers) => Math.floor(numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (n) => nums[n])); // 정규식 활용, replace의 두번째 인자에 함수를 적용F

// solution 2
var solution = (n) => Number(["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].reduce((t, s, i) => t.replaceAll(s, i), n)); // reduce의 인덱스를 활용한 solution

// solution 3
function solution(numbers) {
  const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for (let i = 0; i < number.length; i++) {
    numbers = numbers.split(number[i]).join(i); // 해당 인덱스(i)를 자르고 join으로 return
  }
  return +numbers;
}

// result
console.log(solution("oneoneeightonefivesixoneeightzerozerooneone")); // 118156180011

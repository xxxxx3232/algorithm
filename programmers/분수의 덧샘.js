// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <denum1, num1, denum2, num2 < 1,000

// 입출력 예
// denum1	num1	denum2	num2	result
// 1	2	3	4	[5, 4]
// 9	2	1	3	[29, 6]

// 입출력 예 설명
// 입출력 예 #1
// 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.

// 입출력 예 #2
// 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.

function solution(denum1, num1, denum2, num2) {
  var answer = [0, 0];

  let first = num1 * denum2 + num2 * denum1;
  let second = num1 * num2;
  let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  let min = gcd(first, second);

  answer[0] = first / min;
  answer[1] = second / min;

  return answer;
}
console.log(solution(2, 55, 3, 8));

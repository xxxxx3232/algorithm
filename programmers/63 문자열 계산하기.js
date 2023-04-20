// https://school.programmers.co.kr/learn/courses/30/lessons/120902

// solution 1
function solution(my_string) {
  const operator = my_string.match(/[+,-]/g);
  const myString = my_string.replace(/[+,-]/g, "").split("  ");

  return myString.reduce((acc, cur, i) => (operator[i - 1] == "+" ? +acc + +cur : +acc - +cur));
}

// solution 2
const solution = (my_string) => eval(my_string); // eval() 함수는 문자열 수식을 계산한다. 하지만 임의의 코드를 실행할 수 있기 때문에, 입력값이 사용자로부터 외부에서 제공되는 경우에는 보안상의 문제가 발생할 수 있다.

// solution 3
var solution = eval; // 함수를 변수에 할당하면, 해당 변수는 함수가 된다. solution(my_string)함수처럼 호출이 가능해진다.

// result
console.log(solution("3 + 3 - 42 + 51")); // 7

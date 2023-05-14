// https://school.programmers.co.kr/learn/courses/30/lessons/12918

// solution 1
function solution(s) {
  return s.match(/[a-zA-Z]/g) ? false : s.length == 4 || s.length == 6 ? true : false;
}

// solution 2
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}

// result
console.log(solution("10e1"));
// "a234"	false
// "10e1" false

// https://school.programmers.co.kr/learn/courses/30/lessons/12901

// solution 1
function solution(a, b) {
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(2016, a - 1, b);
  return day[date.getDay()]; // getDay()는 일요일부터 토요일까지 해당 날짜의 요일을 인덱스로 반환한다.
}

// solution 2
function solution(a, b) {
  var tempDate = new Date(2016, a - 1, b);
  return tempDate.toString().slice(0, 3).toUpperCase(); // toString()으로 날짜를 문자열로 변환하게 되면 한국 표준 시간과 날짜가 표시된다.
}

// result
console.log(solution(5, 24));
// 5	24	"TUE"

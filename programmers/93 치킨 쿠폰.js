// https://school.programmers.co.kr/learn/courses/30/lessons/120884

// solution 1
function solution(chicken) {
  let coupon = 0;
  let service = 0;

  while (Math.floor(chicken / 10)) {
    service += Math.floor(chicken / 10);
    coupon += chicken % 10;
    chicken = Math.floor(chicken / 10);
  }

  coupon += chicken % 10;
  if (coupon > 10) {
    chicken = coupon;
    while (Math.floor(chicken / 10)) {
      service += Math.floor(chicken / 10);
      coupon = chicken % 10;
      chicken = Math.floor(chicken / 10);
    }
    coupon += chicken % 10;
  }

  return coupon > 9 ? Math.floor(coupon / 10) + service : service;
}

// solution 2
function solution(chicken) {
  var answer = parseInt((chicken - 1) / 9);
  return answer;
}

// solution 3
function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    answer = answer + parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  return answer;
}

// solution 4
function solution(chicken) {
  return ~~(chicken * 0.111111); // 궁극적으로 치킨 서비스는 11.111111...... 퍼센트를 받는다.
}

// result
console.log(solution(1999)); // 222
// 100	11
// 1,081	120
// 1999 222

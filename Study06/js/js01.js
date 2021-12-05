function 더하기(a, b = 10) {
  console.log(a + b);
}

function 더하기2(a, b = 2 * 5) {
  console.log(a + b);
}

function 더하기3(a, b = 2 * a) {
  console.log(a + b);
}

더하기(1);
더하기2(1);
더하기3(3);

function 임시함수() {
  return 10;
}

function 더하기4(a, b = 임시함수()) {
  console.log(a + b);
}

더하기4(3);

function 함수(a, b, c) {
  console.log(arguments);
}

함수(2, 3, 4);

function 함수2(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

함수2(2, 3, 4);

function 함수3(a, b, c) {
  for (let argument of arguments) {
    console.log(argument);
  }
}

함수3(2,3,4);

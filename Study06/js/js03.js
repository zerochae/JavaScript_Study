var a = [1, 2, 3];
var b = "김밥";
var c = [...b, ...a];
console.log(c);

function 더하기6(a, b, c) {
  console.log(a + b + c);
}

더하기6(1, 2, 3);

var arr = [10, 20, 30];

더하기6(...arr);

더하기6.apply(undefined, arr);

var person = {
  인사: function () {
    console.log(this.name + "안녕");
  },
};

var person2 = {
  name: "손흥민",
};

person.인사.apply(person2);
person.인사.call(person2);

person.인사.apply(person2, [1, 2, 3]);
person.인사.call(person2, 1, 2, 3);

var a = [1, 2, 3];
var b = ["you", "are"];
var c = function (a, b) {
  console.log([[...a], ...[...b]][1]);
};

function 함수7(a = 5, b = a * 2) {
  console.log(a + b);
  return 10;
}

함수7(3);

함수7(undefined, undefined);

function makeArr() {
  var newArr = [];

  for (let argument of arguments) {
    newArr.push(argument);
  }

  return newArr;
}

function makeArr2(...rest) {
  return rest;
}

var newArray = makeArr(1, 2, 3, 4, 5);

console.log(newArray);

console.log(Math.max(5, 6, 4, 3));

var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];

console.log(Math.max(...numbers))

console.log(["b", "c", "a"].sort());

function 정렬(글자) {
  console.log(...[...글자].sort());
}

정렬("bear");

function 글자세기(글){
    var 결과 = {};
    [...글].forEach(function(a){
        if( 결과[a] > 0){
            결과[a]++
        } else {
            결과[a] = 1
        }
        console.log(결과)
    });
}


console.log(this); 

function func(){
    console.log(this);
}

func()

window.func()

var object = {

    data : 'kim',
    myfunction : function(){
        console.log('hi')
        console.log(this)
    }

}

object.myfunction();

var object2 = {

    data : {

        myfunction : function(){

            console.log(this)

        }
    },
    data2 : () => {

        console.log(this)

    }

}

object2.data.myfunction()
object2.data2()








function factory(){

    this.name = "kim"

}

var object = new factory();

console.log(object)

document.getElementById('btn').addEventListener('click',function(e){
    console.log(this);
    console.log(e.currentTarget);

    var arr = [1,2,3];

    arr.forEach(function(a){
        console.log(a);
        console.log(this);
    });

});

function myfun1(){
}

var myfun2 = function(){
    
}

var myfun3 = (a) => {
    return a + 10;
}

console.log(myfun3(3))

var myfun4 = a => {
    return a + 1;
}

console.log(myfun4(4));

var myfun5 = a => a + 5;

console.log(myfun5(5));

var myfun6 = a => {
  return console.log(a);
}
console.log(myfun6(5));

[1,2,3,4].forEach(function(a){
    console.log(a)
})

var arr = [1,2,3,4]

arr.forEach( (a) => console.log(a) )

document.getElementById('btn').addEventListener('click', (e) => {
    console.log(this);
    console.log(e.currentTarget);
});

var object = {

    myfun7 : () => {
        return this;
    }

}

object.myfun7()

var man = {

    name : 'son',
    sayHi : function() {
        return console.log('hi im ' + this.name);
    }

}

man.sayHi();

var data = {
    data : [1,2,3,4,5],
};

data.total = function(){
    var sum = 0;
    this.data.forEach( (a) => {
        sum += a;
    });
    console.log(sum);
}

data.total()


document.getElementById('btn').addEventListener('click',function(){
    setTimeout(() => {console.log(this.innerHTML)},1000);
});

// var a = 1;
// console.log(a)
// var a = 2;
// console.log(a)
// let b = 1;
// console.log(b);
// let b = 2;  -> ?????? ??????
b = 2;
console.log(b);
const c = 1;
console.log(c);
// const c = 2; -> ??????
// c = 3; -> ??????

function myfun8(){

    var aa = 3;
    let bb = 4;
    const cc = 5;

    console.log(aa);
    console.log(bb);
    console.log(cc);

}

myfun8();

console.log(hoi)
var hoi = "hoi"
console.log(hoi)

if(true){
    let a = 1;
    var b = 2;
    if(true){
        let b = 3;
    }
}

// function myfn1(){
//     console.log(hi);
//     let hi = 'hello';
// }

// myfn1()


// setTimeout(function() {console.log(1); }, 1000);
// setTimeout(function() {console.log(2); }, 2000);
// setTimeout(function() {console.log(3); }, 3000);
// setTimeout(function() {console.log(4); }, 4000);
// setTimeout(function() {console.log(5); }, 5000);

for( var i = 1; i< 6; i++){
    setTimeout(function(){
        console.log(i);
    },1000 * i)
}

var ????????? = document.querySelectorAll('button');
var ???????????? = document.querySelectorAll('div');

for (var i = 0; i < 3; i++){

  ?????????[i].addEventListener('click', function(){
    ????????????[i].style.display = 'block';
  });

}

var pants = 0;
var socks = 100;
`??????${pants} ??????${socks}`;

function ???????????????(?????????, ?????????1, ?????????2){

    if(?????????1 == 0){
        ?????????1 = "???????????????";
    }

    console.log(?????????[0] + ?????????1 + ?????????[1] + ?????????2);
}

???????????????`??????${pants} ??????${socks}`; 

var arr = ['hello','world'];

console.log(arr);
console.log(...arr);
console.log(...arr[0])

var a = [1,2,3];
var b = [4,5];

var cc = [...a,...b];

console.log(cc)

var a = [1,2,3,4];
var b = a;

console.log(a)
console.log(b)

a = [1,2,3]

console.log(a)
console.log(b)

// var o1 = { a : 1, b : 2 };
// var o2 = { c : 3, ????????? o1??? ????????? ??????.. }

var o1 = {a:1, b:2}
var o2 = {c:3 , ...o1}

console.log(o2)

var o1 = {a:1, b:2}
var o2 = {a:3 , ...o1}

console.log(o2)

function ?????????(a,b,c){
    console.log(a + b + c)
 }
 
 var ????????? = [10, 20, 30];
 ?????????(...?????????);
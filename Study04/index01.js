

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
// let b = 2;  -> 이거 안돼
b = 2;
console.log(b);
const c = 1;
console.log(c);
// const c = 2; -> 안돼
// c = 3; -> 안돼

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

var 버튼들 = document.querySelectorAll('button');
var 모달창들 = document.querySelectorAll('div');

for (var i = 0; i < 3; i++){

  버튼들[i].addEventListener('click', function(){
    모달창들[i].style.display = 'block';
  });

}

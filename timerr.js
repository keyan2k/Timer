var i =0;

function f (){
  console.log("printing five times");
  i += 1;

if(i===5){
  console.log("Task completed");
  clearInterval(v);
  
}
};

var v = setInterval(f,3000);


//

function delayy (delay) {

  console.log("okay delayed"+ " " + 'delay');
  
}

setTimeout(delayy,3000)

//

setTimeout(()=>console.log("success"),2000);

//setInterval(()=>(console.log("no loop"),3000));

//

var i =0;
function f (){
  console.log(i);
  i += 1;
  if(i===5){
  console.log(i +" " + " Equals to 5" + "Condition failed so loop stopped and Terminated");
  clearInterval(v);
  
}
};

var v = setInterval(f,3000);


var first = setTimeout(function A() {
    return console.log("Hello World!");
}, 3000);
  

var second = setTimeout(function B() {
    return console.log("Hello Geeks!");
}, 3000);
  
clearTimeout(first);


setImmediate(function a() {
    setImmediate(function b() {
        console.log(10);

        setImmediate(function functionc() {
            console.log(20);
        });
    });
    
});


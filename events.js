var result = document.getElementById("result").innerHTML;
var latestOperator = "";
var number1 = "";
var number2 = "";

function buttonpress(){

  var ele = event.target;
  ele.classList.add("highlight");
  setTimeout(function () {
    ele.classList.remove("highlight");
  }, 300);
  if (number1 != "" && number2 === "") {
    document.getElementById("result").innerHTML =""
  }
  if(latestOperator != 0) {
    number2=document.getElementById("result").innerHTML+event.target.innerText;
  }
  document.getElementById("result").innerHTML=document.getElementById("result").innerHTML+event.target.innerText;;
}

function textbuttonpress(){

  var ele = event.target;
  ele.classList.add("highlight");
  setTimeout(function () {
    ele.classList.remove("highlight");
  }, 300);
}

function buttonpress_AC(){
    var ele = event.target;
  ele.classList.add("highlight");
  setTimeout(function () {
    ele.classList.remove("highlight");
  }, 300);
  document.getElementById("result").innerHTML="";
  latestOperator = "";
  number1 = "";
  number2 = "";
}
function operatorpress() {
    var ele = event.target;
  ele.classList.add("orangehighlight");
  setTimeout(function () {
    ele.classList.remove("orangehighlight");
  }, 300);
  
    var operatorPressValue = event.target.innerText;
    number1 = Number(document.getElementById("result").innerHTML);
    latestOperator = operatorPressValue;
  }

function buttonpress_equal(){
    var ele = event.target;
  ele.classList.add("highlight");
  setTimeout(function () {
    ele.classList.remove("highlight");
  }, 300);
  if (number1 !== "" && latestOperator !== "") {

    number2 = Number(document.getElementById("result").innerHTML);
  }
  if (number1 !== "" && number2 !== "") {
    document.getElementById("result").innerHTML= functionality(number1,number2, latestOperator);
  }
}

function functionality (a, b, c)
{
  if(c == "+")
  {
    return getadd(a,b);
  }
  if(c == "-")
  {
    return getsub(a,b);
  }
  if(c == "*")
  {
    return getmultiply(a,b);
  }
  if(c == "/")
  {
    return getdivide(a,b);
  }
}
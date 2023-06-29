let btn1=document.getElementById('dec');
let btn2=document.getElementById('inc');
let res= document.getElementById('ans');
btn2.addEventListener("click",function fun2() {
    let value=Number(res.innerText);
  
  
    document.
    getElementById('ans').innerText  = value+1;
  
  
  });


btn1.addEventListener("click",function fun() {
  let value=Number(res.innerText);

if(value>0){
  document.getElementById('ans').innerText=value - 1;

}
}
);



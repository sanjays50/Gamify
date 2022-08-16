// const { json } = require("body-parser");

var idx,imgary,dots;
var t =4000;
function show(){
    idx=0;
    imgary=document.querySelectorAll(".slidebar-img");
    
    dots=[];
    var ds=document.getElementById("dot-simble");
    for(var i=0;i<imgary.length;i++){
            var dot=document.createElement("span");
            dot.classList.add("dots");
        dot.setAttribute("onclick","ms("+i+")");
            ds.append(dot);
            dots.push(dot);
        }
}

show();

 
function ps(n){
    ms(idx+n);
}
function ms(n){
    var i,c,nx;
    var mvcs={forCurrent:"" , forNext:""}
    if(n>idx){
        if(n>=imgary.length) {n=0}
        mvcs.forCurrent="mlc";
        mvcs.forNext="mnc";
    }
    else if(n<idx){
        if(n<0){n=imgary.length-1}
        mvcs.forCurrent="mlc";
        mvcs.forNext="mnc";
    }
    if(n!=idx){
        nx=imgary[n];
        c=imgary[idx];
        for(i=0;i<imgary.length;i++)
            {
                imgary[i].className="slidebar-img";
                imgary[i].style.opacity=0;
                dots[i].classList.remove("active");
            }
        c.classList.add(mvcs.forCurrent);
        nx.classList.add(mvcs.forNext);
        dots[n].classList.add("active");
        idx=n;
    }
}
var ss = ()=> {
    setTimeout(()=>{
        var r=0;
        r++;
        ps(r);
    },0)
    setInterval(() => {
        var r=0;
        r++;
        ps(r);
    },t);
}
ss();


var b2=document.querySelectorAll(".b2 div");
var a=document.querySelector(".b3");
var a1=document.querySelector(".b3a");
var a2=document.querySelector(".b3b");
var a3=document.querySelector(".b3c");
var lst=[a,a1,a2,a3]
        
for(var i=0;i<b2.length;i++)
{
    b2[i].addEventListener("click",function(){
        b2[0].classList.remove("act");
        b2[1].classList.remove("act");
        b2[2].classList.remove("act");
        b2[3].classList.remove("act");
        this.classList.add("act");
    });
}
for(var i=0;i<lst.length;i++)
{
    b2[0].addEventListener("click",function(){
        lst[1].removeAttribute("id");
        lst[2].removeAttribute("id");
        lst[3].removeAttribute("id");
        lst[0].setAttribute("id","so");
 });
    
    b2[1].addEventListener("click",function(){
        lst[0].removeAttribute("id");
        lst[2].removeAttribute("id");
        lst[3].removeAttribute("id");
        lst[1].setAttribute("id","so");
 });
    
    b2[3].addEventListener("click",function(){
        lst[0].removeAttribute("id");
        lst[1].removeAttribute("id");
        lst[2].removeAttribute("id");
        lst[3].setAttribute("id","so");
 });
    
    b2[2].addEventListener("click",function(){
        lst[0].removeAttribute("id");
        lst[1].removeAttribute("id");
        lst[3].removeAttribute("id");
        lst[2].setAttribute("id","so");
 });
}


function payment(){
    alert("Payment method currently Unavailable");
}
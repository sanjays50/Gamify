// alert("karan");

//random color
const newcolor = () => {
    let a = Math.floor(Math.random() * 1000) % 256;
    let b = Math.floor(Math.random() * 1000) % 256;
    let c = Math.floor(Math.random() * 1000) % 256;
    return `rgb(${a},${b},${c})`;
}

//var decleration
var k;
var l;
var m,n,o,p;
var flag = 0;

//initialization function
const initialize = () => {
    flag = 0;
    k = Math.floor(Math.random() * 3);
    l = (k + 1) % 3;
    m = (2 + k) % 3;
    
    console.log(k, l, m,n,o,p);
    var initcolor = newcolor().toUpperCase();
    document.getElementById('dv22').style.visibility = "hidden";
    document.getElementById('rgb').innerHTML = initcolor;
    document.getElementById('dv1').style.backgroundColor = newcolor();
    document.getElementById(`${k}`).style.backgroundColor = initcolor;
    document.getElementById(`${l}`).style.backgroundColor = newcolor();
    document.getElementById(`${m}`).style.backgroundColor = newcolor();
    
    document.getElementById(`${l}`).onclick = hid1;
    document.getElementById(`${m}`).onclick = hid2;
    document.getElementById(`${k}`).onclick = hid3;
    if(document.getElementById('hard').style.backgroundColor=="aquamarine")
    { 
        k = Math.floor(Math.random() * 6);
        l = (k + 1) % 6;
        m = (2 + k) % 6;
        n = (k + 3) % 6;
        o = (4 + k) % 6;
        p = (k + 5) % 6;
        
    document.getElementById(`${k}`).style.backgroundColor = initcolor;
    document.getElementById(`${l}`).style.backgroundColor = newcolor();
    document.getElementById(`${m}`).style.backgroundColor = newcolor();
    document.getElementById(`${n}`).style.backgroundColor = newcolor();
    document.getElementById(`${o}`).style.backgroundColor = newcolor();
    document.getElementById(`${p}`).style.backgroundColor = newcolor();
    
    document.getElementById(`${l}`).onclick = hid1;
    document.getElementById(`${m}`).onclick = hid2;
    document.getElementById(`${k}`).onclick = hid31;
    document.getElementById(`${p}`).onclick = hid4;
    document.getElementById(`${o}`).onclick = hid5;
    document.getElementById(`${n}`).onclick = hid6;
    }
}
initialize();
//hard mode
function eh() {
    document.getElementById('hard').style.backgroundColor = "aquamarine";
    document.getElementById('hard1').style.visibility="visible";
    document.getElementById('easy').style.backgroundColor = "white";
    initialize();
}
document.getElementById('hard').onclick = eh;

//easy mode
function he() {
    document.getElementById('easy').style.backgroundColor = "aquamarine";
    document.getElementById('hard1').style.visibility="hidden";
    document.getElementById('hard').style.backgroundColor = "white";
}
document.getElementById('easy').onclick = he;

//hiding wrong answer
function hid1() {
    if (flag == 0)
        document.getElementById(`${l}`).style.backgroundColor = "rgb(15, 10, 152)";
}

function hid2() {
    if (flag == 0)
        document.getElementById(`${m}`).style.backgroundColor = "rgb(15, 10, 152)";
}
function hid4() {
    if (flag == 0)
        document.getElementById(`${p}`).style.backgroundColor = "rgb(15, 10, 152)";
}

function hid5() {
    if (flag == 0)
        document.getElementById(`${o}`).style.backgroundColor = "rgb(15, 10, 152)";
}
function hid6() {
    if (flag == 0)
        document.getElementById(`${n}`).style.backgroundColor = "rgb(15, 10, 152)";
}

function hid3() {
    let initcolor = document.getElementById(`${k}`).style.backgroundColor;
    document.getElementById(`${l}`).style.backgroundColor = initcolor;
    document.getElementById(`${m}`).style.backgroundColor = initcolor;
    document.getElementById('dv1').style.backgroundColor = initcolor;
    document.getElementById('dv22').style.visibility = "visible";
    document.getElementById('dv21').innerHTML = "Play Again";
    flag = 1;
}
function hid31() {
    let initcolor = document.getElementById(`${k}`).style.backgroundColor;
    document.getElementById(`${l}`).style.backgroundColor = initcolor;
    document.getElementById(`${m}`).style.backgroundColor = initcolor;
    document.getElementById(`${n}`).style.backgroundColor = initcolor;
    document.getElementById(`${p}`).style.backgroundColor = initcolor;
    document.getElementById(`${o}`).style.backgroundColor = initcolor;
    document.getElementById('dv1').style.backgroundColor = initcolor;
    document.getElementById('dv22').style.visibility = "visible";
    document.getElementById('dv21').innerHTML = "Play Again";
    flag = 1;
}

document.getElementById('dv21').onclick = initialize;
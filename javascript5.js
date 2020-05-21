
console.log("ok");

console.dir(document.getElementById("box1"));
console.dir(document.getElementById("box2"));

var addCss = false;
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

box1.onclick = function () {
    addCss = !addCss;
    boxOne();

}

box1.sajatFn = function () {
    console.log("Én egy html elem vagyok");
}


function boxOne() {

    if (addCss) {
        box1.classList.add("myStyle");
    }
    else {
        box1.classList.remove("myStyle");
    }
}

/**Hozzunk létre egy függvényt (procedúrát),
 * melynek van egy bemeneti paramétere (logikai), ami vagy true vagy false, és 
 * ennek függvényében kapcsolja a css class-t
 * 
 */

function addRemoveClass(elem, p, cn) {
    if (p === true) {
        elem.classList.add(cn);
    }
    else {
        elem.classList.remove(cn);
    }
}


box2.onmouseover = function () {
    addRemoveClass(this, true, "myStyle");
}

box2.onmouseout = function () {
    addRemoveClass(this, false, "myStyle");
}

var box3 = document.getElementById("box3");


/**
 * Az alábbiakat anonim függvényeknek is hívják
 * 
 * duplaklikkre cserélje ki a 3-ast egy véletlenszerűen generált számra 1 és 20 között
 * 
 */

function sorsolas(tol, ig) {

    //floor> ceil<
    return tol + Math.floor(Math.random() * (ig - tol));
}
var s = 0;
box3.ondblclick = function () {
    s = sorsolas(10, 20);
    //box3.firstChild.innerHTML = s;
    this.children[0].innerText = s;

}
console.dir(document.getElementById("box3"));

/*
Házi feladat: 

Írjatok egy olyan függvényt, ami bemeneti paraméternek megkap egy dom elemet, vagy selectort, vagy id-t (kinek ahogy szimpatikusabb), 
egy style kulcsnevet (style attributumot), pl 'backgroundColor', és egy attributumértéket, majd az elemen végrehajtja a módosításokat. 
Az elem style attributuma megkapja a harmadik bemeneti paraméterként megadott értéket!

function addStyle(elem, styleAttr, styleValue){
    
}

Majd készítsetek egy másolatot erről a függvényről, és oldjátok meg úgy, hogy a függvény 2 utolsó bemeneti paramétere helyett egy statikus objektum legyen,
melyben több stílus elemet is átadhatunk egy függvényhívással. Majd az első paraméterként megadott elemen beállítjuk az egyes stíluselemeket.

function addStyleO(elem, o){

    ......
}

.........

addStyleO(e, {
    color: '#f00',
    backgroundColor: '#eee',
    

    .
    .
});

Jó munkát!

*/


function addStyle(elem, styleAttr, styleValue) {

    elem.style[styleAttr] = styleValue;
    //elem.style[backgroundColor] = styleValue;
}



addStyle(box3, "backgroundColor", "#456123");


function addStyleO(elem, o) {
    //elem.style[styleAttr] = styleValue;

    for (const key in o) {
        elem.style[key] = o[key];

    }

}

var box4 = document.getElementById("box4");

addStyleO(box4, {
    color: '#f00',
    backgroundColor: '#eee',
    borderRadius: '10px'
});

/***
 * 
 * document.querySelectorAll
 * 
 * Egy szabály szerinti összes elem kiválasztása!
 * 
 * 
*/

console.log(document.querySelectorAll(".box"));


var box5 = document.getElementById("box5");
var ve = document.querySelectorAll(".box");


// for(const k in ve){
//     var e = ve[k];
//     e.style.borderRadius = "50%";
//     //addStyle(e, "borderRadius", "50%");
// }

for (var k = 0; k < ve.length; k++) {
    addStyle(ve[k], "borderRadius", "50%");

}


function createElementsByQ(v, c) {

    var v1 = [];
    for (const key in v) {
        if (c === 'id') {
            v1.push(document.getElementById(v[key]));
        }
        else if (c === "query") {
            v1.push(document.querySelector(v[key]));
        }
        return v1;
    }
}

var elemek = createElementsByQ([".box.proba", "#box3"], "query");


function getTargetVal(event, inputName) {
    return event.target.children[inputName].value;
}

document.getElementById("form1").onsubmit = function (event) {

    event.preventDefault();

    document.getElementById("box5").firstChild.innerText = getTargetVal(event, "numBox");
    console.log(event);
}


/**
 * Házi feladat
 * Egy számológép, mely egy 3 mezős űrlapból áll
 * (2 operandus és egy operátor)
 * A hatos mezőbe írjuk bele az eredményt
 * A feladat a submit hatására jöjjjön létre
 * 
 * szorgalmi: számológép forma
 */

document.getElementById("szamologep").onsubmit = function (event) {

    event.preventDefault();

    var operandus1 = getTargetVal(event, "operandus1");
    var operandus2 = getTargetVal(event, "operandus2");

    var result;

    var operator = getTargetVal(event, "operator");

    switch (operator) {
        case 'mult':
            result = operandus1 * operandus2;
            break;
        case 'div':
            result = operandus1 / operandus2;
            break;
        case 'add':
            result = parseInt(operandus1) + parseInt(operandus2);
            break;
        case 'subtr':
            result = operandus1 - operandus2;
            break;
        default:
            break;
    }

    document.getElementById("box6").firstChild.innerText = result;

}



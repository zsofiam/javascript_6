
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

/* document.getElementById("szamologep").onsubmit = function (e) {

    e.preventDefault();

    var operandus1 = parseInt(getTargetVal(e, "operandus1"));
    var operandus2 = parseInt(getTargetVal(e, "operandus2"));

    var result;

    var operator = getTargetVal(e, "operator");

    switch (operator) {
        case 'mult':
            result = operandus1 * operandus2;
            break;
        case 'div':
            result = operandus1 / operandus2;
            break;
        case 'add':
            result = operandus1 + operandus2;
            break;
        case 'subtr':
            result = operandus1 - operandus2;
            break;
        default:
            break;
    }

    document.getElementById("box6").firstChild.innerText = result;

} */


//az if elágazásokat így tudjuk kiküszöbölni:

var calculator = {
    mult: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    },
    add: function (a, b) {
        return a + b;
    },
    subtr: function (a, b) {
        return a - b;
    }
};


document.getElementById("szamologep").onsubmit = function (e) {

    e.preventDefault();

    var operandus1 = parseInt(getTargetVal(e, "operandus1"));
    var operandus2 = parseInt(getTargetVal(e, "operandus2"));


    var operator = getTargetVal(e, "operator");



    document.getElementById("box6").firstChild.innerText = calculator[operator](operandus1, operandus2);

}

/**
 * Újabb for ciklus
 * 
 * tomb = [1, 2, 3, 4];
 * 
 * for (var i in tomb){
 * tomb[i]
 * }
 * 
 * for (t of tomb){
 * t
 * }
 */

var cars = ["Audi", "BMW", "zsiguli"];

for (car of cars) {
    console.log(car);
}

for (var i in cars) {
    console.log(cars[i]);
}

var products = [

    {
        name: "kézigyalu",
        price: 4000,
        inStock: true
    },
    {
        name: "kalapács",
        price: 1500,
        inStock: false
    },
    {

        name: "fűrész",
        price: 3400,
        inStock: true
    },
    {

        name: "szög",
        price: 12000,
        inStock: false
    },

];

//csak, ami elérhető

var filteredProducts = [];

for (product of products) {
    if (product.inStock) {
        filteredProducts.push(product);
    }
}

console.log(filteredProducts);

/**
 * 
 * Map
 * 
 * Egy tömbbe gyűjtsük össze azon termékek árait, amelyek készleten vannak
 * 
 */

var prices = [];

//var prices = new Array();

for (fp of filteredProducts) {
    prices.push(fp.price);
}

console.log(prices);


function isInStock(p){
return p.inStock;
}

products.filter(isInStock);

console.log("<----------------filter------------------>");

var pf = products.filter(function (p){
    return p.inStock;
});

console.log(pf);

function priceMap(p){
    return p.price;
}

prices = products.map(priceMap);

console.log("<-------map------>");

console.log(prices);

function myMap(t, fn) {

    var m = [];

    for (te of t) {
        m.push(fn(te));
    }
    return m;
}

// felüldefiniálhatjuk az array metódusait a következő módon

Array.prototype.myMap = function (fn) {
    var m = [];
    for (te of this) {
        m.push(fn(te));
    }
    return m;
}

function myMapPrices(tombelem){
    return tombelem.price;
}

var rest = myMap(products, myMapPrices);

console.log("<---------------My map------------->");

console.log(rest);

console.log("<---------------End my map------------->");
/**
 * 
 * maxár products-ok közül
 * 
 * aggregálás
 */

var maxPrice = 0;


function maxAr() {



    for (product of products) {
        if (product.price > maxPrice) {
            maxPrice = product.price;
        }
    }
    return maxPrice;

}

console.log(maxPrice);


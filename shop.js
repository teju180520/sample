"use strict";
window.onload = function() {
    const   plus    = document.querySelector(".plus"),
            minus   = document.querySelector(".minus"),
            num     = document.querySelector(".num");

    let     a = 1;

    plus.addEventListener("click", ()=>{
        if  (a < 999) {
            a++;
            insertingText();
        }
    });

    minus.addEventListener("click", ()=>{
        if (a > 1) {
            a--;
            insertingText();
        }
    });

    function insertingText() {
        a = (a < 10) ? "0" + a : a;
        num.innerText =  a;
    }
}


"use strict";
window.onload = function() {
    const   plus    = document.querySelector(".plus"),
            minus   = document.querySelector(".minus"),
            num     = document.querySelector(".num");

    let     a = 1;

    plus.addEventListener("click", ()=>{
        if  (a < 999) {
            a++;
            insertingText();
        }
    });

    minus.addEventListener("click", ()=>{
        if (a > 1) {
            a--;
            insertingText();
        }
    });

    function insertingText() {
        a = (a < 10) ? "0" + a : a;
        num.innerText =  a;
    }
}
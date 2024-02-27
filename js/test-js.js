const clickMe = document.querySelector(".js-click");
const box = document.querySelector(".js-box");

let mrgn = 0;

function clickHandler(){
    mrgn += 50;
    box.style.margin = `${mrgn}px 0 0 ${mrgn}px`
}
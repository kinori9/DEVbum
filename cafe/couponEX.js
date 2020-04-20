const coupon = document.querySelector(".coupon");
const couponEX = document.querySelector(".couponEX");
const SHOWING_CN = "showing";

function exClick(event){
    event.preventDefault();
    if(couponEX.className == "couponEX"){
        couponEX.classList.add(SHOWING_CN);
    }else if(couponEX.className == "couponEX "+SHOWING_CN){
        couponEX.classList.remove(SHOWING_CN);
    } 
}

function init(){
    coupon.addEventListener('click',exClick);
}

init();
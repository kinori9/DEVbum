const form = document.querySelector(".calculator");
const w50000 = document.getElementById("1");
const w10000 = document.getElementById("2");
const w5000 = document.getElementById("3");
const w1000 = document.getElementById("4");
const w500 = document.getElementById("5");
const w100 = document.getElementById("6");
const result = document.querySelector(".result");
const changeMoneyShop = document.querySelector(".changeMoneyShop");
const NONE = "none";
const SHOWING_CN = "showing";

function calculator(){
    const value = w50000.value*50000+w10000.value*10000+w5000.value*5000+w1000.value*1000+w500.value*500+w100.value*100;
    form.classList.add(NONE);
    result.innerText=`총 ${value}원 입니다.`;
}
function changeMoney(){
    if(changeMoneyShop.className == "changeMoneyShop"){
        changeMoneyShop.classList.add(SHOWING_CN);
    }else if(changeMoneyShop.className == "changeMoneyShop "+SHOWING_CN){
        changeMoneyShop.classList.remove(SHOWING_CN);
    }
    
    
}
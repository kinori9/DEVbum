const Seteve = document.querySelector(".Seteve");
const Benjamin = document.querySelector(".Benjamin");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");

const SHOWING_CN = "showing";

function changeContent1(event){
    event.preventDefault;
    console.log(content1.className);
    if(content1.className == "content1"){
        content1.classList.add(SHOWING_CN);
    }else if(content1.className == "content1 "+SHOWING_CN){
        content1.classList.remove(SHOWING_CN);
    }
    
}

function changeContent2(event){
    event.preventDefault;
    console.log(content2.className);
    if(content2.className == "content2"){
        content2.classList.add(SHOWING_CN);
    }else if(content2.className == "content2 "+SHOWING_CN){
        content2.classList.remove(SHOWING_CN);
    }
    
}

function change(){
    Seteve.addEventListener('click',changeContent1);
    Benjamin.addEventListener('click',changeContent2);
}

function init(){
    change();
}
init();
function suucc() {
    alert('Save')
}


let section =document.querySelector(".progress");
let nums=document.querySelectorAll(".nums .num");

let started=false;
window.onscroll=function(){
    if (window.scrollY>=section.offsetTop){
        if(!started){
            nums.forEach((num)=> startCount(num));

        }
        started= true;
    }
};

function startCount(el){
    let goal=el.dataset.goal;
    let count=setInterval(()=> {
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(count);
        }
    } ,2000/goal);
}
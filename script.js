var nav=document.querySelectorAll(".nav-menu a");
var scrollInterval=null;


for(var i=0;i<nav.length;i++){
    nav[i].addEventListener('click',function(event){
        event.preventDefault();
        var sectionLink=this.getAttribute("href");
        sectionId=sectionLink.replace('#','').trim();
        var section=document.getElementById(sectionId);
        console.log(section.getBoundingClientRect().top); 
        scrollInterval=setInterval(scrollVertically,50,section);
    });
}


function scrollVertically(section){
    window.scrollBy(0,50);
    if(section.getBoundingClientRect().top<=0){
        clearInterval(scrollInterval);
    }
}

document.addEventListener('scroll',checkScroll);
var animationFlag=0;
var skillBars=document.querySelectorAll(".skill > div");;
console.log(skillBars);

function setBarZero(){
    for(let bar of skillBars){
        bar.style.width= 0 + '%';
    }
}

setBarZero();

function fillBars(){
    console.log("visible")
    for(let bar of skillBars){
        let target=bar.getAttribute("data-skill");
        let current=0;
        let skillInterval=setInterval(function(){
            if(current>target){
                clearInterval(skillInterval);
                return;
            }
            current++;
            bar.style.width= current + '%';
        },10);
    }
}

function checkScroll(){
    var skillSection=document.getElementById("skills");
    if(skillSection.getBoundingClientRect().top <= window.innerHeight&&animationFlag==0){
        animationFlag=1;
        fillBars();
    }else if(skillSection.getBoundingClientRect().top > window.innerHeight){
        animationFlag=0;
        setBarZero();
    }
}
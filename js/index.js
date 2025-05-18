const burgerIcon = document.querySelector("header .burger-icon")
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const showAnswerButtons = document.querySelectorAll('.show-answer')

// Mobile Nav Logic
burgerIcon.addEventListener('click' , ()=>{
    menu.classList.toggle('active-menu');
    menu.classList.remove('-z-10');
    if(!menu.classList.contains("z-10")) {
        menu.classList.add('z-10');
    }
})
close.addEventListener('click' , ()=>{
    console.log("close");
     menu.classList.remove("z-10");
    if(!menu.classList.contains("-z-10")) {
        menu.classList.add("-z-10");
    }
    menu.classList.remove("active-menu");

})


// FAQs Logic
showAnswerButtons.forEach((btn , index)=>{
    btn.addEventListener('click',(e)=>{

        if (btn.nextElementSibling.classList.contains('active-answer')){

            btn.querySelector("i").style.transform = "rotate(0deg)"
            btn.nextElementSibling.classList.toggle('active-answer')
        }else{
            
            btn.nextElementSibling.classList.toggle('active-answer')
            btn.querySelector("i").style.transform = "rotate(90deg)"
            showAnswerButtons.forEach((btn , i)=>{
                if (i != index){
                    btn.nextElementSibling.classList.remove('active-answer')
                }
            })
        }
    })
})
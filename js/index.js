// Handling Menu 
const burgerIcon = document.querySelector("header .burger-icon")
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
burgerIcon.addEventListener('click' , ()=>{
    document.body.style.overflow = "hidden";
    setTimeout( ()=>{
        menu.style.opacity = 100
    }, 0)
    menu.classList.add('active-menu')
})
close.addEventListener('click' , ()=>{
    document.body.style.overflow = "visible"
    menu.style.opacity = 0
    setTimeout(()=>{
        menu.classList.remove('active-menu')
    }, 0)

})
// Small check to handle the dissappearance of navbar while resizing
window.addEventListener('resize' , (e)=>{
    if(window.innerWidth > 1024){
        menu.classList.add('active')
        menu.style.opacity = 100
    }else{
        menu.classList.remove('active')
    }
})

const showAnswerButtons = document.querySelectorAll('.show-answer')
showAnswerButtons.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        console.log(btn.nextElementSibling)
        if (btn.nextElementSibling.classList.contains('active-answer')){

            btn.querySelector("i").style.transform = "rotate(0deg)"
            btn.nextElementSibling.classList.toggle('active-answer')
        }else{
            
            btn.nextElementSibling.classList.toggle('active-answer')
            btn.querySelector("i").style.transform = "rotate(90deg)"
        }
    })
})
// Handling Menu 
const burgerIcon = document.querySelector("header .burger-icon")
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
burgerIcon.addEventListener('click' , ()=>{
    document.body.style.overflow = " hidden";
    setTimeout( ()=>{
        menu.style.opacity = 100
    }, 0)
    menu.style.display = 'flex'
})
close.addEventListener('click' , ()=>{
    document.body.style.overflow = "visible"
    menu.style.opacity = 0
    setTimeout(()=>{
        menu.style.display = 'none'
    }, 0)

})
// Small check to handle the dissappearance of navbar while resizing
window.addEventListener('resize' , (e)=>{
    if(window.innerWidth > 1024){
        menu.style.opacity = 100
        menu.style.display = 'flex'
    }
})
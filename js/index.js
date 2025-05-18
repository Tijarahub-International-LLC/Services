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
//  sliding animation
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.classList.add('show');
    }
  });
});

// Pricing Plan Toggle
const annuallyButton = document.getElementById("annually");
const monthlyButton = document.getElementById("monthly");

const standardPrice = document.getElementById("standard-price");
const premiumPrice = document.getElementById("premium-price");

const annuallyPrices = {
    standard: "193 USD / Monthly",
    premium: "320 USD / Monthly"
};

const monthlyPrices = {
    standard: "275 USD / Monthly",
    premium: "460 USD / Monthly"
};
 
document.querySelector(".togglePlan").addEventListener('click' , (e)=>{
    if (e.target.id === "annually" || e.target.id === "monthly"){
        annuallyButton.classList.toggle('active' ,e.target.id === "annually")
        monthlyButton.classList.toggle('active' ,e.target.id === "monthly")

        
        const standardButton = document.querySelector(".standard-button")
        const premiumButton = document.querySelector(".premium-button")

        const yearlyCost = document.querySelectorAll(".perYear") 
        if (e.target.id === "annually") {
            standardPrice.innerText = annuallyPrices.standard;
            premiumPrice.innerText = annuallyPrices.premium;
            standardButton.href  = "https://tijarahub.com/vendor-registration/?plan_id=5"
            premiumButton.href  = "https://tijarahub.com/vendor-registration/?plan_id=6"
            yearlyCost.forEach(e=>{
                e.style.display="block"
            })
        }else if (e.target.id === "monthly"){
            standardPrice.innerText = monthlyPrices.standard;
            premiumPrice.innerText = monthlyPrices.premium;
            standardButton.href  = "https://tijarahub.com/vendor-registration/?plan_id=3"
            premiumButton.href  = "https://tijarahub.com/vendor-registration/?plan_id=4"
            yearlyCost.forEach(e=>{
                e.style.display="none"
            })
        }
}
})
//  sliding animation
AOS.init();

const burgerIcon = document.querySelector("header .burger-icon")
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const showAnswerButtons = document.querySelectorAll('.show-answer')
const langToggle = document.querySelector("#lang-toggle");
const langMenu = document.querySelector("#lang-menu");

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


// Handle the lang options toggle
const handleLangOptions = () => {
    langMenu.classList.toggle("opacity-0")
    langMenu.classList.toggle("-z-10")
}


document.body.addEventListener("click", (e) => {
    if(e.target != document.querySelector(".lang-icon") && e.target != langMenu) {
        if(!langMenu.classList.contains("opacity-0")) {
            handleLangOptions()
        }
    }
})


langToggle.addEventListener("click",handleLangOptions)

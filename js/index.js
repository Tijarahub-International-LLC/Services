//  sliding animation
AOS.init();

const burgerIcon = document.querySelector("header .burger-icon")
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const showAnswerButtons = document.querySelectorAll('.show-answer')
const langToggle = document.querySelector("#lang-toggle");
const langMenu = document.querySelector("#lang-menu");

// Mobile Nav Logic
burgerIcon?.addEventListener('click', () => {
  menu.classList.toggle('active-menu');
  menu.classList.remove('-z-10');
  if (!menu.classList.contains("z-10")) {
    menu.classList.add('z-10');
  }
})
close?.addEventListener('click', () => {
  menu.classList.remove("z-10");
  if (!menu.classList.contains("-z-10")) {
    menu.classList.add("-z-10");
  }
  menu.classList.remove("active-menu");

})


// FAQs Logic
showAnswerButtons?.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {

    if (btn.nextElementSibling.classList.contains('active-answer')) {

      btn.querySelector("i").style.transform = "rotate(0deg)"
      btn.nextElementSibling.classList.toggle('active-answer')
    } else {

      btn.nextElementSibling.classList.toggle('active-answer')
      btn.querySelector("i").style.transform = "rotate(90deg)"
      showAnswerButtons.forEach((btn, i) => {
        if (i != index) {
          btn.nextElementSibling.classList.remove('active-answer')
          btn.querySelector("i").style.transform = "rotate(0deg)"
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
  standard: "$193",
  premium: "$320"
};

const monthlyPrices = {
  standard: "$275",
  premium: "$460"
};

document.querySelector(".togglePlan")?.addEventListener('click', (e) => {
  if (e.target.id === "annually" || e.target.id === "monthly") {
    annuallyButton.classList.toggle('active', e.target.id === "annually")
    monthlyButton.classList.toggle('active', e.target.id === "monthly")


    const standardButton = document.querySelector(".standard-button")
    const premiumButton = document.querySelector(".premium-button")

    const yearlyCost = document.querySelectorAll(".perYear")
    if (e.target.id === "annually") {
      standardPrice.innerText = annuallyPrices.standard;
      premiumPrice.innerText = annuallyPrices.premium;
      standardButton.href = "https://tijarahub.com/vendor-registration/?plan_id=5"
      premiumButton.href = "https://tijarahub.com/vendor-registration/?plan_id=6"
      yearlyCost.forEach(e => {
        e.style.display = "block"
      })
    } else if (e.target.id === "monthly") {
      standardPrice.innerText = monthlyPrices.standard;
      premiumPrice.innerText = monthlyPrices.premium;
      standardButton.href = "https://tijarahub.com/vendor-registration/?plan_id=3"
      premiumButton.href = "https://tijarahub.com/vendor-registration/?plan_id=4"
      yearlyCost.forEach(e => {
        e.style.display = "none"
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
  if (e.target != document.querySelector(".lang-icon") && e.target != langMenu) {
    if (!langMenu.classList.contains("opacity-0")) {
      handleLangOptions()
    }
  }
})


langToggle.addEventListener("click", handleLangOptions)
const submitButton = document.querySelector('.formkit-submit')

const email = document.getElementById('emailInput')

email?.addEventListener('keyup', (e) => {
  function isBusinessEmail(email) {
    const businessEmailRegex = /^(?!.*(@gmail\.com|@yahoo\.com|@outlook\.com|@hotmail\.com|@aol\.com|@protonmail\.com|@icloud\.com|@mail\.com|@zoho\.com|@yandex\.com))[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return businessEmailRegex.test(email);
  }
  if (isBusinessEmail(e.target.value)) {
    submitButton.type = 'submit'
  } else {
    submitButton.type = 'button'
  }
})



// Handle Calc Modal

const modal = document.querySelector("#calc-modal");
const modalResult = document.querySelector("#calc-modal h4");
const closeModalBtn = document.querySelector("#close-calc-modal");
const calcSection = document.querySelector("#calc-section")


const closeCalcModal = () => {
  modal.classList.toggle("flex");
  modal.classList.toggle("hidden");
}



closeModalBtn?.addEventListener("click", () => {
  closeCalcModal()
})


// Calc Logic 
const clacForm = document.querySelector("#calc-form");
const inputs = document.querySelectorAll("#calc-form select")

clacForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  closeCalcModal()

  let growthResult = (inputs[0].value * 0.5 + inputs[1].value * 0.7 + inputs[2].value * 0.8 + inputs[3].value * 0.9 + inputs[4].value * 0.2) + 20
  modalResult.innerHTML = `Your Potential Growth is: ${growthResult}%`
  window.scrollTo({
    top: window.scrollY + calcSection.getBoundingClientRect().top - 50,
    behavior: "smooth"
  })
})

// Carousel Arrows 

const leftArrow = document.querySelector(".arrows .left-arrow")
const rightArrow = document.querySelector(".arrows .right-arrow")
const journeyCarousel = document.querySelector('.journey-carousel')
let slideWidth = +document.querySelector(".slide")?.getBoundingClientRect().width + 16 //slide + gap
if (document.body.dir == "rtl") slideWidth = -slideWidth
let autoScrollInterval
rightArrow?.addEventListener('click', () => {

  journeyCarousel?.scrollBy({ left: slideWidth, behavior: "smooth" })

})
leftArrow?.addEventListener('click', () => {

  journeyCarousel?.scrollBy({ left: -slideWidth, behavior: 'smooth' })

})

autoScroll = () => {
  autoScrollInterval = setInterval(() => {

    journeyCarousel?.scrollBy({ left: slideWidth, behavior: "smooth" });

    if (journeyCarousel?.scrollLeft + journeyCarousel?.offsetWidth >= journeyCarousel?.scrollWidth) {
      journeyCarousel?.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 3000);
};

autoScroll()
// Draging animation Handling
let startLocation = 0
let holding = false;
let baseScrollLeft

journeyCarousel?.addEventListener("touchstart", dragStart)
journeyCarousel?.addEventListener("touchmove", drag)
journeyCarousel?.addEventListener("touchend", dragEnd)

journeyCarousel?.addEventListener("mousedown", dragStart)
journeyCarousel?.addEventListener("mouseup", dragEnd)
journeyCarousel?.addEventListener("mouseleave", dragEnd)
journeyCarousel?.addEventListener("mousemove", drag)

function dragStart(e) {
  clearInterval(autoScrollInterval)
  journeyCarousel.style.cursor = "grabbing"
  holding = true
  e.type == "touchstart" ? startLocation = e.changedTouches[0].pageX : startLocation = e.pageX

  baseScrollLeft = journeyCarousel.scrollLeft;
}
let translation = 0
function drag(e) {
  if (!holding) {
    clearInterval(autoScrollInterval)
    return
  }
  if (e.type == 'touchmove') {
    journeyCarousel.scrollLeft = baseScrollLeft - (e.changedTouches[0].pageX - startLocation)
    return
  }
  journeyCarousel.scrollLeft = baseScrollLeft - (e.pageX - startLocation)
}
function dragEnd() {
  clearInterval(autoScrollInterval)
  autoScrollInterval = setInterval(() => {
    journeyCarousel?.scrollBy({ left: slideWidth, behavior: "smooth" });
    if (journeyCarousel?.scrollLeft + journeyCarousel?.offsetWidth >= journeyCarousel?.scrollWidth) {
      journeyCarousel?.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 3000);
  journeyCarousel.scrollLeft = Math.round(journeyCarousel.scrollLeft / slideWidth) * slideWidth
  journeyCarousel.style.cursor = "grab"
  holding = false
}


//  sliding animation
AOS.init();
let index;

const caseStudies = [
  {
    id:1,
    vendor: {
      img: "./assets/Sellers/Sellers-Logos-06.png",
      name: "LIBRA",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet minustemporibus saepe fugiat aperiam explicabo alias hic officiis rem assumenda ipsa dolorem exercitationem beatae optio laudantium ad,sed quibusdam recusandae.",
      services: ["Women Sports Wear", "Middle East", "Deals Facilitated", "Seller"],
      industry: "Software",
      location: "Egypt",
      challenge: ["challenge 1","challenge 2","challenge 3"],
      solution: ["solution 1", "solution 2", "solution 3"],
      results: ["result 1", "result 2", "result 3"],
    },
    caseStudy: {
      img: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis alias totam quaerat, illo quisquam eos impedit hic. Dolor cum recusandae ipsam est sint, qui itaque accusamus labore hic sit.",
      storyURL: "./case-study.html",
      testimonialsURL: ""
    },
    buyer: {
      img: "./assets/Parteners-Logos-06.png",
      name: "BEAUTY GIRL",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet minustemporibus saepe fugiat aperiam explicabo alias hic officiis rem assumenda ipsa dolorem exercitationem beatae optio laudantium ad,sed quibusdam recusandae.",
      services: ["Women Sports Wear", "Middle East", "Deals Facilitated", "Seller"],
      industry: "",
      location: "",
      challenge: "",
      solution: "",
      results: ""
    }
  },

]

const services = [{
  title: "",
  img: "",
  services: [
    {
      icon: "",
      text: "+9.5k Wholesale buyers"
    },
    {
      icon: "",
      text: "+9.5k Wholesale buyers"
    },
  ]
}]

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
      if (btn.querySelector("i").classList.contains("fa-chevron-right")) {
        btn.querySelector("i").style.transform = "rotate(90deg)"
      } else {
        btn.querySelector("i").style.transform = "rotate(-90deg)"
      }
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


caseStudies.forEach(({ id,buyer, caseStudy, vendor }, index) => {
  const caseStudiesContainer = document.querySelector("#caseStudiesContainer");

  // Vendor Content
  const vendorContent = `<div
      data-aos="fade-right"
      class="flex-col items-center justify-center hidden gap-5 p-8 xl:flex text-secondary-100 bg-gradient-to-b from-lighter-dark-blue to-secondary rounded-3xl"
    >
      <div>
        <img
          src="${vendor.img}"
          alt="${vendor.name}"
          class="mx-auto rounded w-[300px]"
        />
      </div>
      <p class="p-2 text-base leading-5">
        ${vendor.desc}
      </p>
      <div
        class="flex flex-col flex-wrap items-center justify-center w-full gap-6 text-sm font-semibold 2xl:flex-row md:flex-row"
      >
        ${vendor.services.map((item) => `<div class='stat-card min-w-1/4'><p>${item}</p></div>`).join('')}
      </div>
    </div>`;

  // Case Study Content
  const caseStudyContent = ` <div
      data-aos="fade-up"
      class="flex flex-col items-center justify-around p-8 gap-7 text-secondary-100 bg-gradient-to-b from-secondary-500 to-secondary rounded-3xl"
    >
      <h3 class="text-center capitalize h2">Case Study</h3>
      <div class="flex flex-wrap items-center justify-center gap-6 body">
        <p class="text-center h4">
          ${caseStudy.desc}
        </p>
      </div>
      <div class="relative mx-auto w-fit">
   

        <a
          href="${caseStudy.storyURL}?i=${index}"
          class="relative flex items-center gap-2 px-4 py-3 duration-300 rounded-full hover:shadow-md  size-full bg-secondary-100 text-secondary"
        >
          <img src="./assets/checkicon.svg" alt="icon" />
          Check Story</a
        >
      </div>
    </div>`;

  // Buyer Content
  const buyerContent = `
  <div
          data-aos="fade-left"
          class="flex-col items-center justify-center hidden gap-5 p-8 xl:flex text-secondary-100 bg-gradient-to-b from-lighter-dark-blue to-secondary rounded-3xl"
        >
          <div>
            <img
              src="${buyer.img}"
              alt="${buyer.name}"
              class="mx-auto rounded w-[300px]"
            />
          </div>
          <p class="p-2 text-base leading-5">
            ${buyer.desc}
          </p>
          <div
            class="flex flex-col flex-wrap items-center justify-center w-full gap-6 text-sm font-semibold 2xl:flex-row md:flex-row"
          >
          ${buyer.services.map((item) => ` <div class="stat-card min-w-1/4">
              <p>${item}</p>
            </div>`).join("")}
          </div>
        </div>`

  const content = `
    ${vendorContent}
    ${caseStudyContent}
    ${buyerContent}
  `;

  caseStudiesContainer?.insertAdjacentHTML("beforeend", content);
})


function addContentToPage(index){
const caseStudiesContainer = document.querySelector("#caseStudyContainer");

  let {id, vendor , caseStudy , buyer} = caseStudies[index]


  let storyContent = `
            <h2 class="h2 text-secondary-200 lg:text-3xl">Case Study</h2>
            <div class="w-[250px]">
              <img src=${vendor.img} alt=${vendor.name} />
            </div>
            <p class="text-3xl font-black tracking-wide text-secondary-200">
              ${vendor.desc}
            </p>
            <span class="info"> Industry: Performance Marketing </span>
            <span class="info"> Location : ${vendor.location} </span>
            <p class="body text-secondary-100">
              They were struggling with high hiring costs, low conversion rates,
              and slow sales cycles.
            </p>
            <span class="info"> The Challenge </span>
            <p class="h4 text-secondary-200">
              Before partnering with TijaraHub, G&S faced:
            </p>
            <div class="flex flex-col gap-6">
            ${vendor.challenge.map(one=>
                `
                <p class="h4 text-secondary-200">
                <i
                  class="pr-2 text-2xl text-red-600 fa-solid fa-caret-down"
                ></i>
                  ${one}
                </p>`
              ).join("")}
            </div>
            <span class="info"> The Solution</span>
            <p class="font-semibold body text-secondary-200">
              TijaraHub provided a comprehensive medical services solution:
            </p>
            <div class="flex flex-col gap-3 pl-5">
            ${vendor.solution.map(one=>
                `
                <p class="h4 text-secondary-200">
                 <i class="pr-2 text-green-400 fa-solid fa-square-check"></i>
                  ${one}
                </p>
                `
              ).join("")}
            </div>
            <span class="info">Results</span>
            <div class="flex flex-col gap-3 pl-5">
            ${vendor.results.map(one=>
              `
               <p class="h4 text-secondary-200">
                🎯 ${one}
              </p>`
              ).join("")}           
            </div>
          `
  caseStudiesContainer?.insertAdjacentHTML("beforeend", storyContent);
}

const searchParams = new URLSearchParams(window.location.search);
if(searchParams.get('i')){

  addContentToPage(searchParams.get('i'))
}
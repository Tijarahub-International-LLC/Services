//  sliding animation
AOS.init();
let index;


let chartContentColor = "#fff";
const caseStudies = [
  {
    id: 1,
    vendor: {
      img: "./assets/case-studies/prem-food.png",
      name: "Premium Food Industries",
      desc: "certified Egyptian food manufacturer specializing in snack production for global markets",
      industry: "High-Volume Snack Chips",
      brands: [,
        {
          name: "Nosh",
          img: "./assets/case-studies/nosh.png"
        },
        {
          name: "Ridge",
          img: "./assets/case-studies/ridge.png"
        }
      ],
      location: "Egypt",
      challenge: ["Expand Market into Saudi Arabia"],
      info: ["Manufacture", "Egypt", "Nosh - Ridge", "Targeting Saudi Arabia"]
    },
    caseStudy: {
      orderNum: "#485",
      desc: "Delivering High-Volume Snack Products",
      inspection: {
        name: "Intertek",
        ref: "INT-Prim-00332"
      },
      shippingInfo: {
        method: "Sea Freight",
        quantity: "1 x 40 FT container",
        date: "June 19, 2024",
        containerNum: "WHSU557402-9",
        sealSerial: "104593",
        coo: "0092052",
        telexNum: "196EA02584",
        ods: {
          name: "FedEx",
          tracking: "#7768429117",
        }
      },
      manageBy: {
        name: "DHL",
        ref: "AWB: 378359966"
      },
      outcome: {
        otf: "with full documentation, COO, and telex release",
        cg: "Product met Saudi market health and safety standards",
        bve: "Premium shelf-ready packaging for Ridge & Nosh chips",
        ste: "All processes managed via TijaraHub from order to door",
      },
      tradeSumm: "TijaraHub empowered this transaction by managing sourcing, compliance, and end-to-end logistics—all within a B2B interface that ensures reliability and trust between exporters and importers.",
      quote: {
        text: "This successful transaction proves how TijaraHub bridges premium Egyptian manufacturers with high-demand Gulf distributors seamlessly.",
        by: "TijaraHub Trade Management Team"
      },
      productsOrder: {
        brand: ["Nosh", "Ridge"],
        type: ["Flavored Potato Chips", "Crinkle-Cut Potato Chips"],
        quantity: ["850 Cartons", "400 Cartons"],
      },
      preWorksImgs: ["./assets/case-studies/485-01.png", "./assets/case-studies/485-02.png", "./assets/case-studies/485-03.png"],
    },
    buyer: {
      img: "./assets/case-studies/gourmet.png",
      name: "The World of Gourmet Trading Co.",
      desc: "The World of Gourmet Trading Co. is a Saudi Arabian importer and distributor of premium specialty food brands. Since 1990, we've brought world-class products to the region, offering exceptional quality, design, and flavour through a trusted retail network.",
      industry: "Premium Food Import & Distribution",
      destination: "Jeddah, Saudi Arabia",
      info: ["Importer and Distributor", "Jeddah, Saudi Arabia"],
      orderInfo: {
        date: "June 02, 2024",
        value: "$7,537.50"
      },
    }
  },
]

const services = [
  {
    title: "Generation Qualified Leads",
    img: "./assets/services-icons/leads.png",
    services: ["Inbound Campaigns", "Outbound Prospecting", "CRM & Lead Scoring", "Webinars & Interactive Content"]
  },
  {
    title: "International Export Sales",

    img: "./assets/services-icons/intl-sales.png",
    services: [
      "Market Entry Strategy",
      "Partner Development",
      "Compliance Support",
      "Sales Enablement"
    ]
  },
  {
    title: "Marketing",
    img: "./assets/services-icons/marketing.png",
    services: ["Paid Digital Marketing", "Email & WhatsApp Campaigns", "Trade Missions", "Exhibitions & Events"]
  },
  {
    title: "Market Research",
    img: "./assets/services-icons/research.png",
    services: [
      "Industry Reports",
      "Competitor Insights",
      "Customer Profiling",
      "Surveys & Focus Groups"
    ]
  },
  {
    title: "Customer Service",
    img: "./assets/services-icons/cust-serv.png",
    services: [
      "Omnichannel Support",
      "Helpdesk & Ticketing",
      "Full Trading Cycle Support",
      "Feedback Management"
    ]
  },
  {
    title: "AI-Powerd Proposal Tool",
    img: "./assets/services-icons/gear.png",
    services: [
      "Automated RFQs",
      "Required Export Documents",
      "Proposal Analytics",
      "Digital Sales Rooms"
    ]
  },

]

const burgerIcon = document.querySelector("header .burger-icon")
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const showAnswerButtons = document.querySelectorAll('.show-answer')
const langToggle = document.querySelector("#lang-toggle");
const langMenu = document.querySelector("#lang-menu");
const servicesContainer = document.querySelector("#servicesContainer");
// Mobile Nav Logic
burgerIcon?.addEventListener('click', () => {
  menu.classList.toggle('active-menu');
  menu.classList.remove('-z-10');
  if (!menu.classList.contains("z-10")) {
    menu.classList.add('z-10');
  }
  document.body.style.overflow = "hidden"
})
close?.addEventListener('click', () => {
  menu.classList.remove("z-10");
  if (!menu.classList.contains("-z-10")) {
    menu.classList.add("-z-10");
  }
  menu.classList.remove("active-menu");
  document.body.style.overflow = "auto"
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


const plansContent = {
  services: [
    {
      text: "Services"
    },
    {
      text: "International Export Sales",
      info: "",
      gain: "1 Sales",
    },
    {
      text: "Tailor made Market Research",
      info: "",
      gain: "1 Time / Year",
    }, {
      text: "Identifying Potential Buyers",
      info: "",
      gain: "8 / Month",
    }, {
      text: "Logistcs support for Door to Door",
      info: "",
      gain: true,
    }, {
      text: "Building a brand by Drop-Shipping Services",
      info: "",
      gain: true,
    }, {
      text: "Buyers from DataBase",
      info: "",
      gain: "6 / Month",
    }, {
      text: "Sample Support Services",
      info: "",
      gain: true,
    }, {
      text: "Ads in Home page",
      info: "",
      gain: false,
    },
  ],
  marketing: [
    { text: "Marketing" },
    {
      text: "WhatsApp and email Marketing",
      info: "",
      gain: "1 Campaign / Month",
    },
    {
      text: "Paid Social Media Ads",
      info: "",
      gain: "1 Campaign / Month",
    }, {
      text: "Product Popup through SEO Support",
      info: "",
      gain: true,
    }, {
      text: "Landing Company Profile webpage on Tijarahub",
      info: "",
      gain: false,
    }, {
      text: "Trade Missions in target countries",
      info: "",
      gain: true,
    }, {
      text: "Social Media Designs",
      info: "",
      gain: "3 Designs / Month",
    }
  ],
  techFeatures: [
    {
      text: "Platform & Technology Features"
    },
    {
      text: "Platform Access",
      info: "",
      gain: true,
    },
    {
      text: "Ai One click Proposal Calculator",
      info: "",
      gain: true,
    }, {
      text: "Dedicattrueed Catalog Team",
      info: "",
      gain: false,
    }, {
      text: "Products Listing",
      info: "",
      gain: "Maximum 25",
    }, {
      text: "Images Per Product",
      info: "",
      gain: "Maximum 5",
    }
    , {
      text: "Videos",
      info: "",
      gain: true,
    }
    , {
      text: "Ai Search Optimization",
      info: "",
      gain: true,
    }
  ],
  standard: {
    annually: {
      price: "$193",
      services: ["", "1 Sales", "1 Time / Year", "8 / Month", true, true, "6 / Month", true, false],
      marketing: ["", "1 Campaign / Month", "1 Campaign / Month", true, false, true, "3 Designs / Month"],
      techFeatures: ["", true, true, false, "Maximum 25", "Maximum 5", true, true],
    },
    monthly: {
      price: "$275",
      services: ["", false, "With Cost", "5 / Month", true, true, "5 / Month", true, false],
      marketing: ["", "1 Campaign / Month", "1 Campaign / Month", true, false, false, "2 Designs / Month"],
      techFeatures: ["", true, true, false, "Maximum 12", "Maximum 5", true, true],
    }
  },
  premium: {
    annually: {
      price: "$320",
      services: ["", "2 Sales", "2 Time / Year", "15 / Month", true, true, "12 / Month", true, true],
      marketing: ["", "2 Campaign / Month", "2 Campaign / Month", true, true, true, "6 Designs / Month"],
      techFeatures: ["", true, true, true, "Maximum 60", "Maximum 8", true, true],
    },
    monthly: {
      price: "$460",
      services: ["", "1 Sales", "With Cost", "12 / Month", true, true, "10 / Month", true, true],
      marketing: ["", "2 Campaign / Month", "2 Campaign / Month", true, true, false, "4 Designs / Month"],
      techFeatures: ["", true, true, true, "Maximum 30", "Maximum 8", true, true],
    }
  },
}

const togglePlan = document.querySelector("#togglePlan");
const standardContent = document.querySelector("#standard-content");
const premiumContent = document.querySelector("#premium-content");
togglePlan?.addEventListener("click", (e) => {
  // initial variable
  let isAnnually = true;
  let isMonthly = false;
  if (e.target.id === "annually") {
    isAnnually = true
    isMonthly = false
  } else {
    isAnnually = false;
    isMonthly = true
  }
  // add active to the current plan
  annuallyButton.classList.toggle('active', isAnnually)
  monthlyButton.classList.toggle('active', isMonthly)

  // empty all content
  standardContent.querySelectorAll("li").forEach(li => li.remove())
  premiumContent.querySelectorAll("li").forEach(li => li.remove())

  const yearlyCost = document.querySelectorAll(".perYear");
  const standardPrice = document.querySelector("#standard-price-page");
  const premiumPrice = document.querySelector("#premium-price-page");
  const standardLink = document.querySelector("#standard-link");
  const premiumLink = document.querySelector("#premium-link");

  // toggle plans content logic
  if (isAnnually) {
    // Price 
    standardPrice.textContent = plansContent.standard.annually.price;
    premiumPrice.textContent = plansContent.premium.annually.price;
    premiumLink.href = "https://tijarahub.com/vendor-registration/?plan_id=6"
    standardLink.href = "https://tijarahub.com/vendor-registration/?plan_id=5"


    //====== Standard Content ======//
    // services Content
    plansContent.services.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.standard.annually.services[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.standard.annually.services[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.standard.annually.services[index]}
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content)
    })
    // marketing Content
    plansContent.marketing.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.standard.annually.marketing[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.standard.annually.marketing[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.standard.annually.marketing[index]}
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content)
    })
    // Technology Featuers Content
    plansContent.techFeatures.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.standard.annually.techFeatures[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.standard.annually.techFeatures[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.standard.annually.techFeatures[index]}
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content)
    })

    //====== Premium Content ======//
    // services Content
    plansContent.services.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.premium.annually.services[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.premium.annually.services[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.premium.annually.services[index]}
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content)
    })
    // marketing Content
    plansContent.marketing.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.premium.annually.marketing[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.premium.annually.marketing[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.premium.annually.marketing[index]}
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content)
    })
    // Technology Featuers Content
    plansContent.techFeatures.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.premium.annually.techFeatures[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.premium.annually.techFeatures[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.premium.annually.techFeatures[index]}
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content)
    })

    // toggle the annually per year price text
    yearlyCost.forEach(e => {
      e.style.display = "block"
    })
  } else {
    premiumLink.href = "https://tijarahub.com/vendor-registration/?plan_id=4"
    standardLink.href = "https://tijarahub.com/vendor-registration/?plan_id=3"
    // Price 
    standardPrice.textContent = plansContent.standard.monthly.price;
    premiumPrice.textContent = plansContent.premium.monthly.price;
    //====== Standard Content ======//
    // services Content
    plansContent.services.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.standard.monthly.services[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.standard.monthly.services[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.standard.monthly.services[index]}
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content)
    })
    // marketing Content
    plansContent.marketing.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.standard.monthly.marketing[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.standard.monthly.marketing[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.standard.monthly.marketing[index]}
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content)
    })
    // Technology Featuers Content
    plansContent.techFeatures.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.standard.monthly.techFeatures[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.standard.monthly.techFeatures[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.standard.monthly.techFeatures[index]}
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content)
    })

    //====== Premium Content ======//
    // services Content
    plansContent.services.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.premium.monthly.services[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.premium.monthly.services[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.premium.monthly.services[index]}
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content)
    })
    // marketing Content
    plansContent.marketing.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.premium.monthly.marketing[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.premium.monthly.marketing[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.premium.monthly.marketing[index]}
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content)
    })
    // Technology Featuers Content
    plansContent.techFeatures.map((service, index) => {
      const content =
        `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${index === 0 ? "h4 text-light-cyan pt-4" : ""}">
          
            ${service.text}
          </p>
          ${plansContent.premium.monthly.techFeatures[index] === true ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>` : plansContent.premium.monthly.techFeatures[index] === false ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>` : plansContent.premium.monthly.techFeatures[index]}
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content)
    })

    // toggle the annually per year price text
    yearlyCost.forEach(e => {
      e.style.display = "none"
    })
  }
})


const annuallyPrices = {
  standard: "$193",
  premium: "$320"
};

const monthlyPrices = {
  standard: "$275",
  premium: "$460"
};

const monthlyDetails = {
  standard: [
    "5 / Month",
    "5 / Month",
    "1 Sales",
    "1 Campaign / Month",
    ` <span class="text-red-500"
    ><i class="fa-solid fa-x"></i
    ></span>`,

    ` <span class="text-red-500"
    ><i class="fa-solid fa-x"></i
    ></span>`,
    "Maximum 12"
  ],
  premium: [
    "8 / Month",
    "12 / Month",

    "2 Campaign / Month",
    ` <span class="text-red-500"
    ><i class="fa-solid fa-x"></i
    ></span>`,
    "1 Sales",
    "Maximum 30"
  ]
}
const yearlyDetails = {
  standard: [
    "8 / Month",
    "6 / Month",
    "1 Sales",
    "1 Campaign / Month",
    ` <span class="text-dark-cyan"
    ><i class="fa-solid fa-check"></i></span>`,

    `1 Sales`,
    "Maximum 25"
  ],
  premium: [
    "15 / Month",
    "12 / Month",

    "2 Campaign / Month",
    ` <span class="text-dark-cyan"
    ><i class="fa-solid fa-check"></i></span>`,
    "2 Sales",
    "Maximum 60"
  ]
}

function fillPlanContent(type) {

  const planDetailsContent = ` <p class="h4">What you will get</p>
                <ul class="flex flex-col gap-3 text-sm">
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      Identifying Potential Buyers
                    </p>
                    ${type[0]}
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      Buyers from DataBase
                    </p>
                    ${type[1]}
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      Paid Social Media Marketing
                    </p>
                    ${type[2]}
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      Exhibitions and Trade Mission
                    </p>
                    ${type[3]}
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      International Export Sales
                    </p>
                    ${type[4]}
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      Product Listing
                    </p>
                    ${type[5]}
                  </li>
                </ul>`

  return planDetailsContent
}
let premiumDetails = document.querySelector('.premium-details')
let standardDetails = document.querySelector('.standard-details')

document.querySelector(".togglePlan")?.addEventListener('click', (e) => {
  if (e.target.id === "annually" || e.target.id === "monthly") {
    annuallyButton.classList.toggle('active', e.target.id === "annually")
    monthlyButton.classList.toggle('active', e.target.id === "monthly")


    const standardButton = document.querySelector(".standard-button")
    const premiumButton = document.querySelector(".premium-button")
    const yearlyCost = document.querySelectorAll(".perYear")
    if (e.target.id === "annually") {
      if (premiumDetails.hasChildNodes() && standardDetails.hasChildNodes()) {
        premiumDetails.innerHTML = ""
        standardDetails.innerHTML = ""
      }
      premiumDetails.insertAdjacentHTML("beforeend", fillPlanContent(yearlyDetails.premium))
      standardDetails.insertAdjacentHTML("beforeend", fillPlanContent(yearlyDetails.standard))

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
      if (premiumDetails.hasChildNodes() && standardDetails.hasChildNodes()) {
        premiumDetails.innerHTML = ""
        standardDetails.innerHTML = ""
      }
      premiumDetails.insertAdjacentHTML("beforeend", fillPlanContent(monthlyDetails.premium))
      standardDetails.insertAdjacentHTML("beforeend", fillPlanContent(monthlyDetails.standard))
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
  langMenu?.classList.toggle("opacity-0")
  langMenu?.classList.toggle("-z-10")
}


document.body.addEventListener("click", (e) => {
  if (e.target != document.querySelector(".lang-icon") && e.target != langMenu) {
    if (!langMenu?.classList.contains("opacity-0")) {
      handleLangOptions()
    }
  }
})


langToggle?.addEventListener("click", handleLangOptions)
const submitButton = document.querySelector('.formkit-submit')

const email = document.getElementById('emailInput')

email?.addEventListener('keyup', (e) => {
  function isBusinessEmail(email) {
    const businessEmailRegex = /^(?!.*(@gmail\.com|@yahoo\.com|@outlook\.com|@hotmail\.com|@aol\.com|@protonmail\.com|@icloud\.com|@mail\.com|@zoho\.com|@yandex\.com))[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return businessEmailRegex.test(email);
  }
  if (isBusinessEmail(e.target.value)) {
    email.style.border = "none"
    submitButton.type = 'submit'
  } else {
    email.style.border = "1px solid red"
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
if (document.dir == "rtl") slideWidth = -slideWidth
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
      
   
      if (Math.abs(journeyCarousel?.scrollLeft) + journeyCarousel?.offsetWidth >= journeyCarousel?.scrollWidth) {
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


caseStudies.forEach(({ id, buyer, caseStudy, vendor }, index) => {
  const caseStudiesContainer = document.querySelector("#caseStudiesContainer");

  // Vendor Content
  const vendorContent = `<div
      data-aos="fade-right"
      class="flex-col  justify-center hidden gap-5 p-8 xl:flex text-secondary-100 ocean-gradient rounded-3xl"
    >
      <div>
        <img
          src="${vendor.img}"
          alt="${vendor.name}"
          class="mx-auto rounded w-[200px]"
        />
      </div>
      <h4 class="h4 text-center">${vendor.name} <span class="block text-center text-gray-300 text-xs pt-1">${vendor.industry} Industry</span></h4>
      <p class="p-2  capitalize text-center text-base leading-5">
        ${vendor.desc}
      </p>
      <div
        class="flex  flex-col flex-wrap items-center justify-center w-full gap-4 text-sm font-semibold md:flex-row"
      >
        ${vendor.info.map((item) => `<div class='stat-card !bg-black/40 min-w-1/3'><p>${item}</p></div>`).join('')}
      </div>
    </div>`;

  // Case Study Content
  const caseStudyContent = ` <div
      data-aos="fade-up"
      class="flex flex-col items-center justify-around p-8 gap-5 text-secondary-100 bg-white/5 backdrop-blur-md rounded-3xl"
    >
      <h3 class="text-center capitalize h2">Export Order
      <br />
      ${caseStudy.orderNum}
      </h3>
      <div class="flex flex-wrap items-center justify-center gap-6 body">
       <div class="flex text-center flex-col gap-1">
        <p class="text-center h4">
          ${caseStudy.desc} 
        </p>
         <p>
          from ${vendor.location} to ${buyer.destination}
          </p>
       </div>
      </div>
      <div class="flex flex-col md:flex-row gap-5 w-full justify-between *:flex-1 items-center">
       <ul class="flex flex-col gap-2 text-base">
        <li>
        <p>Order Date: <span class="text-gray-400 italic">${buyer.orderInfo.date}</span></p>
        </li>
        <li>
        <p>Shipping Date: <span class="text-gray-400 italic">${caseStudy.shippingInfo.date}</span></p>
        </li>
        <li>
        <p>Shipping Method:  <span class="text-gray-400 italic">${caseStudy.shippingInfo.method}</span></p>
        </li>
        </ul>
        <a
          href="./case-study.html?i=${index}"
          class="relative max-w-fit md:self-end flex items-center gap-2 px-4 py-2  rounded-full  bg-secondary-100 text-secondary"

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
          class="flex-col items-center justify-center hidden gap-5 p-8 xl:flex  text-secondary-100 ocean-gradient rounded-3xl"
        >
         <div>
        <img
          src="${buyer.img}"
          alt="${buyer.name}"
          class="mx-auto rounded w-[200px]"
        />
      </div>
      <h4 class="h4 text-center">${buyer.name} <span class="block text-center text-gray-300 text-xs pt-1">${buyer.industry} Industry</span></h4>
      <p class="p-2  capitalize text-center text-base leading-5">
        ${buyer.desc}
      </p>
      <div
        class="flex  flex-col flex-wrap items-center justify-center w-full gap-4 text-sm font-semibold md:flex-row"
      >
      ${buyer.info.map(item => `<div class='stat-card !bg-black/40 min-w-1/3'><p>${item}</p></div>`).join("")}
        
      </div>
        </div>`

  const content = `
    ${vendorContent}
    ${caseStudyContent}
    ${buyerContent}
  `;

  caseStudiesContainer?.insertAdjacentHTML("beforeend", content);
})


function addContentToPage(index) {
  const caseStudiesContainer = document.querySelector("#caseStudyContainer");

  let { id, vendor, caseStudy, buyer } = caseStudies[index]


  let storyContent = `
            <h2 class="h2 text-secondary-200 lg:text-3xl">Export Order ${caseStudy.orderNum}</h2>
            <p class="text-3xl font-black tracking-wide text-secondary-200">
              ${caseStudy.desc}
            </p>
            <div class="flex w-full flex-col  gap-5">
                <div class="flex flex-col lg:flex-row items-center gap-5 ">
                  <div class="flex items-center gap-2 lg:flex-row flex-col">
                    <img src=${vendor.img} class="w-[100px]" alt=${vendor.name} />
                    <h3 class="h4">
                    ${vendor.name}
                    </h3>
                  </div>
                  <div class="flex items-center gap-2 lg:flex-row flex-col">
                    <img src=${buyer.img} class="w-[100px]" alt=${buyer.name} />
                    <h3 class="h4">
                    ${buyer.name}
                    </h3>
                  </div>
                </div>
                <div class="flex flex-1 flex-col lg:flex-row lg:items-center gap-2 *:flex-1">
            ${vendor.brands.map(({ name, img }) => `<div class='stat-card lg:max-w-[320px] !text-secondary !bg-white'>
                  <img src="${img}" alt="${name} Image" class="h-10" />
                  <p>${name}</p>
                </div>`).join("")}
              </div>
            </div>
          <div class="space-y-3 w-full">
            <h3 class="h3 text-light-cyan font-semibold">Overview</h3>
            <ul class="flex flex-col gap-2 text-base">
              <li>
                <p>Buyer: <span class="text-gray-300 italic">${buyer.name}</span></p>
              </li>
              <li>
                <p>Destination: <span class="text-gray-300 italic">${buyer.destination}</span></p>
              </li>
              <li>
                <p>Order Value: <span class="text-gray-300 italic">${buyer.orderInfo.value}</span></p>
              </li>
              <li>
                <p>Order Date: <span class="text-gray-300 italic">${buyer.orderInfo.date}</span></p>
              </li>
              <li>
                <p>Shipping Method:  <span class="text-gray-300 italic">${caseStudy.shippingInfo.method} (${caseStudy.shippingInfo.quantity})</span></p>
              </li>
              <li>
                <p>Inspection &amp; Quality Control: <span class="text-gray-300 italic">Completed By${caseStudy.inspection.name} Ref(${caseStudy.inspection.ref})</span></p>
              </li>
              <li>
                <p>Managed via: <span class="text-gray-300 italic">Completed By${caseStudy.manageBy.name} (${caseStudy.manageBy.ref})</span></p>
              </li>
              <li>
                <p>Shipping Date: <span class="text-gray-300 italic">${caseStudy.shippingInfo.date}</span></p>
              </li>
            </ul>
            <h3 class="h3 text-light-cyan font-semibold">Products Ordered</h3>
            <div class="border w-full border-gray-500">
              <div class="flex *:flex-1 *:p-2 items-center border-b border-b-gray-500">
                <h6 class="border-r border-gray-500 font-semibold">Brand</h6>
                <h6 class="font-semibold">Quantity</h6>
              </div>
            ${caseStudy.productsOrder.brand.map((brand, index) => `
              <div class="flex *:flex-1 *:p-2 items-center">
              <p class="border-r border-gray-500 ${index !== caseStudy.productsOrder.brand.length - 1 ? "border-b" : ""}">${brand}</p>
              <p class="border-gray-500 ${index !== caseStudy.productsOrder.brand.length - 1 ? "border-b" : ""}">${caseStudy.productsOrder.quantity[index]}</p>
              </div>    
                `).join("")}
            </div>
            <div class="flex items-center gap-5 *:rounded-2xl">
              ${caseStudy.preWorksImgs.map(img => `<img src="${img}" alt="${caseStudy.orderNum}" class="max-w-[calc(100%_/_${caseStudy.preWorksImgs.length}_-_1.25rem)]"/>`).join("")}
            </div>
            <hr class="text-gray-500"/>
            <h3 class="h3 text-light-cyan font-semibold">Manufacturer</h3>
            <p class="body"><span class="font-bold">${vendor.name}</span>, a ${vendor.desc}</p>

            <hr class="text-gray-500"/>

            <h3 class="h3 text-light-cyan font-semibold">Buyer Information</h3>
            <ul class="flex flex-col gap-2 text-base">
              <li>
                <p>Company: <span class="text-gray-300 italic">${buyer.name}</span></p>
              </li>
              <li>
                <p>Location: <span class="text-gray-300 italic">${buyer.destination}</span></p>
              </li>
              <li>
                <p>Sector: <span class="text-gray-300 italic">${buyer.industry}</span></p>
              </li>
            </ul>

            <hr class="text-gray-500"/>

            <h3 class="h3 text-light-cyan font-semibold">Logistics &amp; Shipment Details</h3>
            <ul class="flex flex-col gap-2 text-base">
              <li>
                <p>Container Number: <span class="text-gray-300 italic">${caseStudy.shippingInfo.containerNum}</span></p>
              </li>
              <li>
                <p>Seal Serial: <span class="text-gray-300 italic">${caseStudy.shippingInfo.sealSerial}</span></p>
              </li>
              <li>
                <p>Shipping Date: <span class="text-gray-300 italic">${caseStudy.shippingInfo.date}</span></p>
              </li>
              <li>
                <p>Country of Origin Certificate: <span class="text-gray-300 italic">${caseStudy.shippingInfo.coo}</span></p>
              </li>
              <li>
                <p>Telex Release Number: <span class="text-gray-300 italic">${caseStudy.shippingInfo.telexNum}</span></p>
              </li>
              <li>
                <p>Original Documents Sent via ${caseStudy.shippingInfo.ods.name}: Tracking <span class="text-gray-300 italic">${caseStudy.shippingInfo.ods.tracking}</span></p>
              </li>
            </ul>
            <hr class="text-gray-500"/>
            <h3 class="h3 text-light-cyan font-semibold">Quality Assurance</h3>
            <p class="body">Inspection and pre-shipment verification conducted by <span class="font-bold">${caseStudy.inspection.name}</span>, ensuring
            conformity to Gulf import standards.
            <br />
            <span class="font-bold"> Inspection Ref</span> :${caseStudy.inspection.ref}
            </p>
            <hr class="text-gray-500"/>
            <h3 class="h3 text-light-cyan font-semibold">Outcome &amp; Value Delivered</h3>
            <ul class="flex flex-col gap-2 text-base">
              <li>
                <p>On-Time Fulfillment: <span class="text-gray-300 italic">${caseStudy.outcome.otf}</span></p>
              </li>
              <li>
                <p>Compliance Guaranteed: <span class="text-gray-300 italic">${caseStudy.outcome.cg}</span></p>
              </li>
              <li>
                <p>Brand Visibility Enhanced: <span class="text-gray-300 italic">${caseStudy.outcome.bve}</span></p>
              </li>
              <li>
                <p>Streamlined Trade Experience: <span class="text-gray-300 italic">${caseStudy.outcome.ste}</span></p>
              </li>
            </ul>
            <hr class="text-gray-500"/>
            <p class="h4 !leading-[1.5] max-w-[780px] font-bold">
              <q>${caseStudy.quote.text}</q>
              <br />
              <span class="italic flex font-normal text-gray-300">---${caseStudy.quote.by}</span>
            </p>

            <hr class="text-gray-500"/>
            <h3 class="h3 text-light-cyan font-semibold">Trade Summary</h3>
            <p class="h4 !font-normal !leading-[1.5] max-w-[780px]">
              <span class="font-bold">TijaraHub</span> empowered this transaction by managing sourcing, compliance,
                and end-to-end logistics—all within a B2B interface that ensures reliability
                and trust between exporters and importers.
            </p>
            </div>
          `;
  caseStudiesContainer.innerHTML = "";
  caseStudiesContainer?.insertAdjacentHTML("beforeend", storyContent);
}

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.get("i")) {
  addContentToPage(searchParams.get('i'))
}

services.forEach(({ title, img, services }, index) => {
  const colIndex = index % 3;

  const card = `
        <div
          data-aos="${colIndex === 0 ? "fade-right" : colIndex === 1 ? "fade-up" : "fade-left"}"
          class="flex flex-col gap-5 p-6 lg:gap-6 lg:p-10 ${colIndex === 1 ? "bg-white/5 backdrop-blur-md" : "ocean-gradient"} rounded-3xl"
        >
          <h3 class="text-4xl font-bold capitalize">${title}</h3>
          <div class="py-5">
            <img
              src="${img}"
              alt="${title}"
              class="mx-auto h-[200px]"
            />
          </div>
          <div class="flex-1">
            <div
              class="flex flex-wrap items-center justify-center h-full gap-4 body"
            >
            ${services.map((text) => `<div class="flex-grow text-sm ${colIndex !== 1 ? "!bg-black/20" : ""} stat-card basis-w-1/4">
                <p>${text}</p>
              </div>`).join("")}
              
            </div>
          </div>
        </div>
  
  `;

  servicesContainer?.insertAdjacentHTML("beforeend", card);
})



document.addEventListener('DOMContentLoaded', function () {
  if (!window.location.href.includes("index") || !window.location.href.includes("indexar") || !window.location.href.includes("pricing") || !window.location.href.includes("pricingar")) return
  const planSelect = document.getElementById('plan');
  const calculateBtn = document.getElementById('calculate-btn');
  const customPlanForm = document.getElementById('custom-plan-form');
  const customBuyers = document.getElementById('custom-buyers');
  const customSales = document.getElementById('custom-sales');
  const customResearch = document.getElementById('custom-research');
  const customCampaigns = document.getElementById('custom-campaigns');
  const customListings = document.getElementById('custom-listings');

  // Chart initialization
  const ctx = document.getElementById("growth-chart")?.getContext("2d");
  let growthChart;

  // Plan data
  const plans = {
    "standard-monthly": {
      monthlyCost: 275,
      annualCost: 275 * 12,
      buyers: 8,
      sales: 1,
      research: 1,
      campaigns: 1,
      listings: 25,
      name: "Standard Monthly",
    },
    "premium-monthly": {
      monthlyCost: 460,
      annualCost: 460 * 12,
      buyers: 15,
      sales: 2,
      research: 2,
      campaigns: 2,
      listings: 60,
      name: "Premium Monthly",
    },
    "standard-annual": {
      monthlyCost: 195,
      annualCost: 2340,
      buyers: 8,
      sales: 1,
      research: 1,
      campaigns: 1,
      listings: 25,
      name: "Standard Annual",
    },
    "premium-annual": {
      monthlyCost: 320,
      annualCost: 3840,
      buyers: 15,
      sales: 2,
      research: 2,
      campaigns: 2,
      listings: 60,
      name: "Premium Annual",
    },
    custom: {
      monthlyCost: 0,
      annualCost: 0,
      buyers: 8,
      sales: 1,
      research: 1,
      campaigns: 1,
      listings: 25,
      name: "Custom Plan",
    },
  };

  // Traditional cost benchmark
  const traditionalCost = 7250;

  function formatCurrency(amount) {
    return (
      "$" +
      amount?.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }
  function format(amount) {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
  function calculateCustomPlanCost() {
    // Pricing model for custom plan
    const buyers = parseInt(customBuyers.value) || 0;
    const sales = parseInt(customSales.value) || 0;
    const research = parseInt(customResearch.value) || 0;
    const campaigns = parseInt(customCampaigns.value) || 0;
    const listings = parseInt(customListings.value) || 0;

    // Calculate costs
    const buyersCost = buyers * 10;
    const salesCost = sales * 150;
    const researchCost = research * 250;
    const campaignsCost = campaigns * 50;
    const listingsCost = listings * 5;

    // Base fee for the platform
    const baseFee = 50;

    // Monthly and annual cost
    const monthlyCost =
      baseFee +
      buyersCost +
      salesCost +
      campaignsCost +
      listingsCost / 12;
    const annualCost =
      baseFee * 12 +
      buyersCost * 12 +
      salesCost * 12 +
      researchCost +
      campaignsCost * 12 +
      listingsCost;

    return {
      monthlyCost,
      annualCost,
      buyers,
      sales,
      research,
      campaigns,
      listings,
    };
  }

  function updateGrowthChart(
    planData,
    targetLeeads,
    targeetRevenuePerLead
  ) {
    if (growthChart) {
      growthChart.destroy();
    }

    //const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const months = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];
    // Extract target values from planData
    const targetLeads = targetLeeads; // e.g., 96
    const targetRevenuePerLead = targeetRevenuePerLead; // e.g., 15000

    // Generate linearly increasing leads (from 0 to targetLeads)
    const leadsData = [];
    const leadIncrement = targetLeads / (months.length - 1);

    // Generate linearly increasing revenue per lead (from 5000 to targetRevenuePerLead)
    const revenuePerLeadData = [];
    const revenueIncrement = targetRevenuePerLead / (months.length - 1);
    //(targetRevenuePerLead - 15000) / (months.length - 1)
    // Generate monthly data
    const revenueData = [];
    let totalRevenue = 0;

    months.forEach((_, index) => {
      // Calculate leads for this month
      const leads = Math.min(targetLeads, index * leadIncrement);
      leadsData.push(Math.round(leads));

      // Calculate revenue per lead for this month
      const revPerLead =
        15000 +
        index * ((targetRevenuePerLead - 15000) / (months.length - 1));
      revenuePerLeadData.push(revPerLead);

      // Calculate monthly revenue and cumulative total
      const monthlyRevenue = leads * revPerLead;
      totalRevenue += monthlyRevenue;
      revenueData.push(Math.round(totalRevenue));
    });

    growthChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: months,
        datasets: [
          {
            label: "No. of Leads",
            data: leadsData,
            backgroundColor: "rgba(52, 152, 219, 0.7)",
            borderColor: "rgba(52, 152, 219, 1)",
            borderWidth: 1,
          },
          {
            label: "Cumulative Revenue",
            data: revenueData,
            type: "line",
            fill: false,
            borderColor: "rgba(231, 76, 60, 1)",
            backgroundColor: "rgba(231, 76, 60, 0.2)",
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: "rgba(231, 76, 60, 1)",
            yAxisID: "y1",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              color: "#f5f5f5",
            },
            beginAtZero: true,
            title: {
              display: true,
              text: "No. of Leads",
              color: chartContentColor,
            },
            max: targetLeads * 1.1, // Add 10% headroom
          },
          y1: {
            ticks: {
              color: "#f5f5f5",
            },
            position: "right",
            beginAtZero: true,
            title: {
              display: true,
              text: "Revenue ($)",
              color: chartContentColor
            },
            grid: {
              drawOnChartArea: false,
            },
            // Set max to final cumulative revenue + 10%
            max: revenueData[revenueData.length - 1] * 1.1,
          },
          x: {
            ticks: {
              color: "#f5f5f5" // Set x-axis tick labels color
            }
          }

        },
        plugins: {
          title: {
            display: true,
            text: "Annual Sales Projection for " + planData.name,
            font: {
              size: 16,
            },
            color: chartContentColor
          },
          legend: {
            position: "top",
            labels: {
              color: "#f5f5f5"
            }
          },
          tooltip: {
            callbacks: {
              afterBody: function (context) {
                const index = context[0].dataIndex;
                return `Revenue/Lead: $${revenuePerLeadData[
                  index
                ].toFixed(2)}`;
              },
            },
          },
        },
      },
    });
  }
  function updateCalculator() {
    const selectedPlan = planSelect?.value;
    let planData = { ...plans[selectedPlan] }; // Clone plan data
    features_table = document.querySelector(".features-table");
    features_title = document.querySelector(".features-title");
    annualsavings = document.getElementById("savings-box");
    // Show/hide custom plan form
    if (selectedPlan === "custom") {
      customPlanForm.classList.add("container-active");
      features_title.style.display = "none";
      features_table.style.display = "none";
      annualsavings.style.display = "none";
      planData = { ...planData, ...calculateCustomPlanCost() };
    } else {
      customPlanForm?.classList.remove("container-active");
      features_title ? features_title.style.display = "flex" : null;
      features_table ? features_table.style.display = "flex" : null;
      annualsavings ? annualsavings.style.display = "block" : null;
    }

    // Update features display
    document.getElementById("buyers-value") ? document.getElementById("buyers-value").textContent =
      planData.buyers + " buyers/month" : null;

    document.getElementById("sales-value") ? document.getElementById("sales-value").textContent =
      planData.sales +
      " sale" +
      (planData.sales !== 1 ? "s" : "") +
      "/month" : null;
    document.getElementById("research-value") ? document.getElementById("research-value").textContent =
      planData.research + " / year" : null;
    document.getElementById("campaigns-value") ? document.getElementById("campaigns-value").textContent =
      planData.campaigns + " / month" : null;
    document.getElementById("listings-value") ? document.getElementById("listings-value").textContent =
      planData.listings + " products" : null;

    // Update cost display
    document.getElementById("monthly-cost") ? document.getElementById("monthly-cost").textContent = formatCurrency(
      planData.monthlyCost
    ) : null;
    document.getElementById("annual-cost") ? document.getElementById("annual-cost").textContent = formatCurrency(
      planData.annualCost
    ) : null;

    // Calculate savings
    const savings = traditionalCost - planData.annualCost;
    document.getElementById("savings") ? document.getElementById("savings").textContent =
      formatCurrency(savings) : null;
    document.getElementById("Avg_order") ? document.getElementById("Avg_order").textContent =
      "$" +
      format(Math.floor(planData.buyers * 12 * 0.03) * 5000) +
      " to " +
      "$" +
      format(Math.floor(planData.buyers * 12 * 0.05) * 50000) +
      " /year" : null;
    document.getElementById("tijara-cost") ? document.getElementById("tijara-cost").textContent =
      format(Math.floor(planData.buyers * 12 * 0.03)) +
      " to " +
      format(Math.floor(planData.buyers * 12 * 0.05)) +
      " Buyers/year" : null;
    document.getElementById("Potential-Leeds") ? document.getElementById("Potential-Leeds").textContent =
      planData.buyers * 12 + " Leeds/year" : null;
    document.getElementById("Retention-Rate") ? document.getElementById("Retention-Rate").textContent =
      format(Math.floor(Math.floor(planData.buyers * 12 * 0.03) * 0.75)) +
      " to " +
      format(Math.floor(Math.floor(planData.buyers * 12 * 0.05) * 0.75)) +
      " Buyers/year" : null;
    // Update savings display style
    const savingsBox = document.getElementById("savings-box");
    if (savings < 0) {
      savingsBox.classList.remove("savings");
      savingsBox.classList.add("negative", "bg-red-50", "border-red-500"); // Added Tailwind classes
    } else {
      savingsBox?.classList.remove(
        "negative",
        "bg-red-50",
        "border-red-500"
      ); // Removed Tailwind classes
      savingsBox?.classList.add(
        "savings",
        "bg-blue-50",
        "border-green-500"
      ); // Added Tailwind classes
    }

    targetLeads = planData.buyers * 12;
    targetRevenuePerLead =
      (planData.buyers * 12 * 0.03 * 5000 +
        planData.buyers * 12 * 0.05 * 50000) /
      2; // Average of min and max revenue

    // Update growth chart
    updateGrowthChart(planData, targetLeads, targetRevenuePerLead);
  }

  // Initial calculation
  updateCalculator();

  // Event listeners
  calculateBtn?.addEventListener("click", updateCalculator);
  planSelect?.addEventListener("change", updateCalculator);

  // Listen to custom plan input changes
  customBuyers?.addEventListener("change", function () {
    if (planSelect.value === "custom") updateCalculator();
  });
  customSales?.addEventListener("change", function () {
    if (planSelect.value === "custom") updateCalculator();
  });
  customResearch?.addEventListener("change", function () {
    if (planSelect.value === "custom") updateCalculator();
  });
  customCampaigns?.addEventListener("change", function () {
    if (planSelect.value === "custom") updateCalculator();
  });
  customListings?.addEventListener("change", function () {
    if (planSelect.value === "custom") updateCalculator();
  });
});


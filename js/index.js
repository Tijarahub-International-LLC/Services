//  sliding animation
AOS.init();
let index;

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

function isEnglishVersion() {
  return document.documentElement.getAttribute("dir") === "ltr"
}

const plansContent = {
  services: [
    {
      text: isEnglishVersion() ? "Services" : "الخدمات"
    },
    {
      text: isEnglishVersion() ? "International Export Sales" : "دعم الصادرات الدولية",
      info: "",
      gain: "1 Sales",
    },
    {
      text: isEnglishVersion() ? "Tailor made Market Research" : "أبحاث السوق المخصصة",
      info: "",
      gain: "1 Time / Year",
    }, {
      text: isEnglishVersion() ? "Identifying Potential Buyers" : "تحديد المشترين المحتملين",
      info: "",
      gain: "8 / Month",
    }, {
      text: isEnglishVersion() ? "Logistcs support for Door to Door" : "دعم لوجستي شامل",
      info: "",
      gain: true,
    }, {
      text: isEnglishVersion() ? "Building a brand by Drop-Shipping Services" : "بناء العلامة التجارية عبر الدروب شيبنج",
      info: "",
      gain: true,
    }, {
      text: isEnglishVersion() ? "Buyers from DataBase" : "خدمة العملاء للمشترين",
      info: "",
      gain: "6 / Month",
    }, {
      text: isEnglishVersion() ? "Sample Support Services" : "دعم طلب العينات",
      info: "",
      gain: true,
    }, {
      text: isEnglishVersion() ? "Ads in Home page" : "عرض في الصفحة الرئيسية",
      info: "",
      gain: false,
    },
  ],
  marketing: [
    {
      text: isEnglishVersion() ? "Marketing" : "التسويق"
    },
    {
      text: isEnglishVersion() ? "WhatsApp and email Marketing" : "التسويق عبر واتساب والبريد الإلكتروني",
      info: "",
      gain: "1 Campaign / Month",
    },
    {
      text: isEnglishVersion() ? "Paid Social Media Ads" : "إعلانات مدفوعة - ميتا وجوجل",
      info: "",
      gain: "1 Campaign / Month",
    }, {
      text: isEnglishVersion() ? "Product Popup through SEO Support" : "دعم تحسين محركات البحث للمنتجات",
      info: "",
      gain: true,
    }, {
      text: isEnglishVersion() ? "Landing Company Profile webpage on Tijarahub" : "صفحة ويب للشركة لدعم التصدير",
      info: "",
      gain: false,
    }, {
      text: isEnglishVersion() ? "Trade Missions in target countries" : "بعثات تجارية مستهدفة",
      info: "",
      gain: true,
    }, {
      text: isEnglishVersion() ? "Social Media Designs" : "تصميم الحملات الإعلانية",
      info: "",
      gain: "3 Designs / Month",
    }
  ],
  techFeatures: [
    {
      text: isEnglishVersion() ? "Platform & Technology Features" : "ميزات المنصة والتكنولوجيا"
    },
    {
      text: isEnglishVersion() ? "Platform Access" : "الوصول إلى المنصة",
      info: "",
      gain: true,
    },
    {
      text: isEnglishVersion() ? "Ai One click Proposal Calculator" : "حاسبة عروض الشحن الفورية",
      info: "",
      gain: true,
    }, {
      text: isEnglishVersion() ? "Dedicattrueed Catalog Team" : "فريق كتالوج مخصص",
      info: "",
      gain: false,
    }, {
      text: isEnglishVersion() ? "Products Listing" : "إدراج المنتجات",
      info: "",
      gain: "Maximum 25",
    }, {
      text: isEnglishVersion() ? "Images Per Product" : "صور للمنتج",
      info: "",
      gain: "Maximum 5",
    }
    , {
      text: isEnglishVersion() ? "Videos" : "مقاطع فيديو",
      info: "",
      gain: true,
    }
    , {
      text: isEnglishVersion() ? "Ai Search Optimization" : "تحسين البحث بالذكاء الاصطناعي",
      info: "",
      gain: true,
    }
  ],
  standard: {
    annually: {
      price: "$193",
      services: isEnglishVersion() ? ["", "1 Sales", "1 Time / Year", "8 / Month", true, true, "6 / Month", true, false] : ["", "1 موظف مبيعات", "1 مرة / سنة", "8 / شهر", true, true, "6 / شهر", true, false],
      marketing: isEnglishVersion() ? ["", "1 Campaign / Month", "1 Campaign / Month", true, false, true, "3 Designs / Month"] : ["", "1 حملة / شهريا", "1 حملة / شهريا", true, false, true, "3 تصاميم / شهريا"],
      techFeatures: isEnglishVersion() ? ["", true, true, false, "Maximum 25", "Maximum 5", true, true] : ["", true, true, false, "كحد اقصى 25", "كحد اقصى 5", true, true],
    },
    monthly: {
      price: "$275",
      services: isEnglishVersion() ? ["", false, "With Cost", "5 / Month", true, true, "5 / Month", true, false] : ["", false, "مع تكلفة", "5 / شهريا", true, true, "5 / شهريا", true, false],
      marketing: isEnglishVersion() ? ["", "1 Campaign / Month", "1 Campaign / Month", true, false, false, "2 Designs / Month"] : ["", "1 حملة / شهريا", "1 حملة / شهريا", true, false, false, "2 تصاميم / شهريا"],
      techFeatures: isEnglishVersion() ? ["", true, true, false, "Maximum 12", "Maximum 5", true, true] : ["", true, true, false, "كحد اقصى 12", "كحد اقصى 5", true, true],
    }
  },
  premium: {
    annually: {
      price: "$320",
      services: isEnglishVersion() ? ["", "2 Sales", "2 Time / Year", "15 / Month", true, true, "12 / Month", true, true] : ["", "2 مبيعات", "2 مرة / سنة", "15 / شهريا", true, true, "12 / شهريا", true, true],
      marketing: isEnglishVersion() ? ["", "2 Campaign / Month", "2 Campaign / Month", true, true, true, "6 Designs / Month"] : ["", "2 حملة / شهريا", "2 حملة / شهريا", true, true, true, "6 تصاميم / شهريا"],
      techFeatures: isEnglishVersion() ? ["", true, true, true, "Maximum 60", "Maximum 8", true, true] : ["", true, true, true, "كحد اقصى 60", "كحد اقصى 8", true, true],
    },
    monthly: {
      price: "$460",
      services: isEnglishVersion() ? ["", "1 Sales", "With Cost", "12 / Month", true, true, "10 / Month", true, true] : ["", "1 مبيعات", "مع تكلفة", "12 / شهريا", true, true, "10 / شهريا", true, true],
      marketing: isEnglishVersion() ? ["", "2 Campaign / Month", "2 Campaign / Month", true, true, false, "4 Designs / Month"] : ["", "2 حملة / شهريا", "2 حملة / شهريا", true, true, false, "4 تصاميم / شهريا"],
      techFeatures: isEnglishVersion() ? ["", true, true, true, "Maximum 30", "Maximum 8", true, true] : ["", true, true, true, "كحد اقصى 30", "كحد اقصى 8", true, true],
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
  en:{
  standard: [
    "5 / Month",
    "5 / Month",

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
    "12 / Month",
    "10 / Month",

    "2 Campaign / Month",
    ` <span class="text-red-500"
    ><i class="fa-solid fa-x"></i
    ></span>`,

    "1 Sales",
    "Maximum 30"
  ]
} ,
ar:{
  standard: [
    "5 / شهريا",
    "5 / شهريا",
    
    "1 حملة / شهريا",
   ` <span class="text-red-500"
    ><i class="fa-solid fa-x"></i
    ></span>`,

    ` <span class="text-red-500"
    ><i class="fa-solid fa-x"></i
    ></span>`,
    "كحد اقصى 12"
  ],
  premium: [
    "12 / شهريا",
    "10 / شهريا",

    "2 حملة / شهريا",
    `<span class="text-red-500"
    ><i class="fa-solid fa-x"></i
    ></span>`,
    "1 موظف مبيعات",
    "كحد اقصى 30"
  ]
}
}
const yearlyDetails = {
  en:{
  standard: [
    "8 / Month",
    "6 / Month",
    
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
},
  ar:{
  standard: [
    "8 / شهريا",
    "6 / شهريا",
    
    "1 حملة / شهريا",
    ` <span class="text-dark-cyan"
    ><i class="fa-solid fa-check"></i></span>`,

    `1 موظف مبيعات`,
    "كحد اقصى 25"
  ],
  premium: [
    "15 / شهريا",
    "12 / شهريا",

    "2 حملة / شهريا",
    ` <span class="text-dark-cyan"
    ><i class="fa-solid fa-check"></i></span>`,
    "2 موظف مبيعات",
    "كحد اقصى 60"
  ]
}
}

function fillPlanContent(type , lang) {
  
  const planDetailsContent = ` <p class="h4">  ${lang == "en" ? "What you will get" : "ما ستحصل عليه"}</p>
                <ul class="flex flex-col gap-3 text-sm">
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${lang == "en" ? "Identifying Potential Buyers" : "تحديد المشترين المحتملين"}
                    </p>
                    <p class="text-end">
                    ${type[0]}
                    </p>
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${lang == "en" ? "Buyers from DataBase" : "المشترين من قاعدة البيانات"}
                    </p>
                    <p class="text-end">
                    ${type[1]}
                    </p>
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${lang == "en" ? "Paid Social Media Marketing" : "التسويق عبر وسائل التواصل الاجتماعي المدفوعة"}
                    </p>
                    <p class="text-end">
                    ${type[2]}
                    </p>
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${lang == "en" ? "Exhibitions and Trade Mission" : "المعارض والبعثات التجارية"}
                    </p>
                    <p class="text-end">
                    ${type[3]}
                    </p>
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${lang == "en" ? "International Export Sales" : "دعم الصادرات الدولية"}
                    </p>
                    <p class="text-end">
                    ${type[4]}
                    </p>
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${lang == "en" ? "Product Listing" : "إدراج المنتجات"}
                    </p>
                    <p class="text-end">
                    ${type[5]}
                    </p>
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
      if (document.dir == "ltr"){
        premiumDetails.insertAdjacentHTML("beforeend", fillPlanContent(yearlyDetails.en.premium , "en"))
        standardDetails.insertAdjacentHTML("beforeend", fillPlanContent(yearlyDetails.en.standard , "en"))
      }else{
        premiumDetails.insertAdjacentHTML("beforeend", fillPlanContent(yearlyDetails.ar.premium , "ar"))
        standardDetails.insertAdjacentHTML("beforeend", fillPlanContent(yearlyDetails.ar.standard , "ar"))
      }

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

      if (document.dir == "ltr"){
        premiumDetails.insertAdjacentHTML("beforeend", fillPlanContent(monthlyDetails.en.premium , "en"))
        standardDetails.insertAdjacentHTML("beforeend", fillPlanContent(monthlyDetails.en.standard , "en"))
      }else{
        premiumDetails.insertAdjacentHTML("beforeend", fillPlanContent(monthlyDetails.ar.premium , "ar"))
        standardDetails.insertAdjacentHTML("beforeend", fillPlanContent(monthlyDetails.ar.standard , "ar"))
      }

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
    email.style.border = "none"
    email.setCustomValidity("");
  } else {
    e.target.setCustomValidity('Please enter a business email address!')
   
    email.style.border = "1px solid red"
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
window.addEventListener('resize',()=>{
  slideWidth = +document.querySelector(".slide")?.getBoundingClientRect().width + 16
  
})
if (document.dir == "rtl") slideWidth = -slideWidth
let autoScrollInterval
rightArrow?.addEventListener('click', () => {

  // journeyCarousel?.scrollBy({ left: slideWidth, behavior: "smooth" })
  journeyCarousel.scrollTo({ left: Math.round((journeyCarousel.scrollLeft + slideWidth) / slideWidth) * slideWidth, behavior: "smooth" })
})
leftArrow?.addEventListener('click', () => {

  // journeyCarousel?.scrollBy({ left: -slideWidth, behavior: 'smooth' })
  journeyCarousel.scrollTo({ left: Math.round((journeyCarousel.scrollLeft - slideWidth) / slideWidth) * slideWidth, behavior: "smooth" })
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
  journeyCarousel.scrollTo({ left: Math.round(journeyCarousel.scrollLeft / slideWidth) * slideWidth, behavior: "smooth" })
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
            <div class="flex flex-wrap items-center gap-5 *:rounded-2xl">
              ${caseStudy.preWorksImgs.map(img => `<img src="${img}" alt="${caseStudy.orderNum}" class="max-w-[calc(100%_/_3-_1.25rem)]"/>`).join("")}
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
            <div class="flex flex-col items-center gap-10 relative my-20">
          <h3 class="h3 text-light-cyan font-semibold">Customer Feedback</h3>
          <h3
            class="h3 quote"
          >
            Huge thanks to Tijarahub, Their amazing support helped us land our first Saudi order and ensured swift delivery,We're thrilled with their dedication and look forward to a lasting partnership
          </h3>
          <div class="flex flex-col gap-1 text-center">
            <h4 class="h4">Anas Elwy</h4>
            <span class="text-gray-400">Founder & CEO Premium Food Industries</span>
          </div>
          </div>
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


// Calculate
const planSelect = document.getElementById('plan');
const calculateBtn = document.getElementById('calculate-btn');
const customPlanForm = document.getElementById('custom-plan-form');
const customBuyers = document.getElementById('custom-buyers');
const customSales = document.getElementById('custom-sales');
const customResearch = document.getElementById('custom-research');
const customCampaigns = document.getElementById('custom-campaigns');
const customListings = document.getElementById('custom-listings');




// Chart initialization
const ctx = document.getElementById('growth-chart')?.getContext('2d');
let growthChart;

// Plan data
const plans = {
  'standard-monthly': {
    monthlyCost: 275,
    annualCost: 275 * 12,
    buyers: 8,
    sales: 1,
    research: 1,
    campaigns: 1,
    listings: 25,
    name: "Standard Monthly"
  },
  'premium-monthly': {
    monthlyCost: 460,
    annualCost: 460 * 12,
    buyers: 12,
    sales: 2,
    research: 2,
    campaigns: 2,
    listings: 60,
    name: "Premium Monthly"
  },
  'standard-annual': {
    monthlyCost: 195,
    annualCost: 2340,
    buyers: 8,
    sales: 1,
    research: 1,
    campaigns: 1,
    listings: 25,
    name: "Standard Annual"
  },
  'premium-annual': {
    monthlyCost: 320,
    annualCost: 3840,
    buyers: 15,
    sales: 2,
    research: 2,
    campaigns: 2,
    listings: 60,
    name: "Premium Annual"
  },
  'custom': {
    monthlyCost: 0,
    annualCost: 0,
    buyers: 8,
    sales: 1,
    research: 1,
    campaigns: 1,
    listings: 25,
    name: "Custom Plan"
  }
};

// Traditional cost benchmark
const traditionalCost = 7250;

let totalBuyersMinMaxTextContent = 10 + " to " + 15 + " / year";

function formatCurrency(amount) {
  return '$' + amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function format(amount) {
  return amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
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
  const monthlyCost = baseFee + buyersCost + salesCost + campaignsCost + (listingsCost / 12);
  const annualCost = (baseFee * 12) + (buyersCost * 12) + (salesCost * 12) +
    (researchCost) + (campaignsCost * 12) + listingsCost;

  return {
    monthlyCost,
    annualCost,
    buyers,
    sales,
    research,
    campaigns,
    listings
  };
}
//Calc Quarter
function quarterCalculationByLeads(count, isFirst = false, prevRetcount) {
  let totalLeads = count * 4;
  let minLeadsAvg = totalLeads * 0.03;
  let maxLeadsAvg = totalLeads * 0.05;
  let minRetetionBuyers, maxRetetionBuyers, minOrderValue, maxOrderValue;
  if (isFirst) {
    minRetetionBuyers = 0;
    maxRetetionBuyers = 0;
    minOrderValue = minLeadsAvg * 5000;
    maxOrderValue = maxLeadsAvg * 50000;
  } else {
    minRetetionBuyers = minLeadsAvg * 0.75;
    maxRetetionBuyers = maxLeadsAvg * 0.75;

    if (prevRetcount) {
      minOrderValue = (minLeadsAvg + minRetetionBuyers + prevRetcount.min) * 5000;
      maxOrderValue = (maxLeadsAvg + maxRetetionBuyers + prevRetcount.max) * 50000;
      minRetetionBuyers += prevRetcount.min
      maxRetetionBuyers += prevRetcount.max
    }
  }

  return { minLeadsAvg, maxLeadsAvg, minOrderValue, maxOrderValue, minRetetionBuyers, maxRetetionBuyers }
}

function getAllQuarters(planData) {
  let q1 = quarterCalculationByLeads(planData.buyers, true,);

  let q2 = quarterCalculationByLeads(planData.buyers, false, {
    min: q1.minRetetionBuyers,
    max: q1.maxRetetionBuyers
  });

  let q3 = quarterCalculationByLeads(planData.buyers, false, {
    min: q2.minRetetionBuyers,
    max: q2.maxRetetionBuyers
  });

  let q4 = quarterCalculationByLeads(planData.buyers, false, {
    min: q3.minRetetionBuyers,
    max: q3.maxRetetionBuyers
  });

  const minCalcObj = { q1: Math.ceil(q1.minRetetionBuyers + q1.minLeadsAvg), q2: Math.ceil(q2.minRetetionBuyers + q2.minLeadsAvg), q3: Math.ceil(q3.minRetetionBuyers + q3.minLeadsAvg), q4: Math.ceil(q4.minRetetionBuyers + q4.minLeadsAvg) }
  const maxCalcObj = { q1: Math.ceil(q1.maxRetetionBuyers + q1.maxLeadsAvg), q2: Math.ceil(q2.maxRetetionBuyers + q2.maxLeadsAvg), q3: Math.ceil(q3.maxRetetionBuyers + q3.maxLeadsAvg), q4: Math.ceil(q4.maxRetetionBuyers + q4.maxLeadsAvg) }

  const minTotalBuyers = minCalcObj.q1 + minCalcObj.q2 + minCalcObj.q3 + minCalcObj.q4;
  const maxTotalBuyers = maxCalcObj.q1 + maxCalcObj.q2 + maxCalcObj.q3 + maxCalcObj.q4;

  let minTotal = q1.minOrderValue + q2.minOrderValue + q3.minOrderValue + q4.minOrderValue;
  let maxTotal = q1.maxOrderValue + q2.maxOrderValue + q3.maxOrderValue + q4.maxOrderValue;

  //Col Bars 
  let q1Col = q1.maxOrderValue;
  let q2Col = q2.maxOrderValue + q2.minOrderValue + q1Col + q1.minOrderValue;
  let q3Col = q3.maxOrderValue + q3.minOrderValue + q2Col;
  let q4Col = q4.maxOrderValue + q4.minOrderValue + q3Col;

  return {
    q1, q2, q3, q4, minTotalBuyers, maxTotalBuyers, minTotal, maxTotal, q1Col
    , q2Col
    , q3Col,
    q4Col
  }
}

function updateGrowthChart(
  planData,
) {
  if (growthChart) {
    growthChart.destroy();
  }
  const { q1, q2, q3, q4, minTotal, maxTotal, q1Col, q2Col, q3Col, q4Col } = getAllQuarters(planData)
  const months = ["Q1", "Q2", "Q3", "Q4"];
  if (window.location.href.includes("index.html")) {
    growthChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          {
            label: "Net Growth",
            data: [q1Col, q2Col, q3Col, q4Col],
            backgroundColor: "rgba(52, 152, 219, 0.2)",
            borderColor: "rgba(52, 152, 219, 1)",
            borderWidth: 1,
            order: 2,
          },
          {
            // label: "Cumulative Revenue",
            data: [q1Col, q2Col, q3Col, q4Col],
            type: 'line',
            fill: false,
            borderColor: 'rgba(11, 156, 49, 0.7)',
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(11, 156, 49, 1)',
            yAxisID: 'y1',
            order: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: {
              color: "#f5f5f5",
              display: false
            },
            position: "right",
            beginAtZero: true,
            title: {
              display: true,
              text: 'Total Buyers',
              color: "#f5f5f5",
            },
            min: minTotal,
            max: maxTotal * 1.1,
            ticks: {
              color: "#f5f5f5",
              callback: (value) => {
                return value.toLocaleString('en-US', { maximumFractionDigits: 0 })
              }
            }
          },
          y1: {
            beginAtZero: true,
            display: false,
            title: {
              display: true,
              text: 'Revenue ($)',
              color: "#f5f5f5"
            },
            grid: {
              drawOnChartArea: false,
              display: false,
            },
            ticks: {
              color: "#f5f5f5" // Set x-axis tick labels color
            },
            min: minTotal,
            max: maxTotal * 1.1,
          },
          x: {
            ticks: {
              color: "#f5f5f5" // Set x-axis tick labels color
            },
            grid: {
              color: "#f5f5f5",
              display: false
            },
          }
        },
        plugins: {
          title: {
            text: 'Annually Growth Rate for ' + planData.name,
            font: {
              size: 20
            },
            color: "#f5f5f5"
          },
          legend: {
            position: 'top',
            labels: {
              color: "red",
            },
            display: false,
          },
          tooltip: {
            callbacks: {
              label: () => {
                return ""
              },

              afterBody: function (context) {
                const index = context[0].dataIndex;
                let quarters = [q1, q2, q3, q4]

                return [
                  `Min Total Revenue: ${quarters[index].minOrderValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
                  `Max Total Revenue: ${quarters[index].maxOrderValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
                  `Total Buyers: Min: ${Math.ceil(quarters[index].minLeadsAvg + quarters[index].minRetetionBuyers)} Max: ${Math.ceil(quarters[index].maxRetetionBuyers + quarters[index].maxLeadsAvg)}`,
                ];
              },
            }
          }
        }
      }
    });
  }
}
const selectedPlan = planSelect?.value;
let planData = { ...plans[selectedPlan] };

updateGrowthChart(planData);

function updateFeaturesDisplay(planData) {
  // Update features display
  document.getElementById('buyers-value').textContent = planData.buyers + ' buyers/month';
  document.getElementById('sales-value').textContent = planData.sales + ' sale' + (planData.sales !== 1 ? 's' : '') + '/month';
  document.getElementById('research-value').textContent = planData.research + ' /year';
  document.getElementById('campaigns-value').textContent = planData.campaigns + ' /month';
  document.getElementById('listings-value').textContent = planData.listings + ' products';
}

function updateCostDisplay(planData) {
  // Update cost display
  document.getElementById('monthly-cost').textContent = formatCurrency(planData.monthlyCost);
  document.getElementById('annual-cost').textContent = formatCurrency(planData.annualCost);
}
// Event listeners
calculateBtn?.addEventListener('click', () => {
  let annualsavings = document.getElementById("savings-box");
  const selectedPlan = planSelect.value;
  // Clone plan data
  let planData = { ...plans[selectedPlan] };

  // Update features display
  updateFeaturesDisplay(planData)

  // Update cost display
  updateCostDisplay(planData)

  // Check for Custom Plan
  if (customPlanForm.classList.contains('container-active')) {
    planData = { ...planData, ...calculateCustomPlanCost() };
    updateCostDisplay(planData)
  } else {
    annualsavings.style.display = 'block';
  }
  // Calculate savings
  const savings = traditionalCost - planData.annualCost;

  //Update Leads/Buyers Table
  const { minTotalBuyers, maxTotalBuyers } = getAllQuarters(planData);
  const totalLeadsTextContent = planData.buyers * 12 + ' / year';
  totalBuyersMinMaxTextContent = "";
  totalBuyersMinMaxTextContent = minTotalBuyers + " to " + maxTotalBuyers + " / year";
  document.getElementById('Potential-Leeds').textContent = totalLeadsTextContent;
  document.getElementById('savings').textContent = formatCurrency(savings);
  document.getElementById('total-an-buyers').textContent = totalBuyersMinMaxTextContent;

  updateGrowthChart(planData);
});
planSelect?.addEventListener('change', (e) => {
  const selectedPlan = e.target.value;
  let planData = { ...plans[selectedPlan] };

  updateFeaturesDisplay(planData)
  let features_table = document.querySelector(".features-table");
  let features_title = document.querySelector(".features-title");
  let annualsavings = document.getElementById("savings-box");
  // Show Hide Custom Plan Select
  if (e.currentTarget.value === 'custom') {
    customPlanForm.classList.add('container-active');
    features_title.style.display = 'none';
    features_table.style.display = 'none';
    annualsavings.style.display = 'none';
    planData = { ...planData, ...calculateCustomPlanCost() };

  } else {
    customPlanForm.classList.remove('container-active');
    features_title.style.display = 'flex';
    features_table.style.display = 'flex';
  }
});

// Listen to custom plan input changes
customBuyers?.addEventListener('change', function (e) {
  planData = { ...planData, ...calculateCustomPlanCost() };
});




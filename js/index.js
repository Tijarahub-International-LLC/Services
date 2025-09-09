//  sliding animation
AOS.init();
let index;

const caseStudies = isEnglishVersion()
  ? [
      {
        id: 1,
        vendor: {
          img: "./assets/case-studies/prem-food.webp",
          name: "Premium Food Industries",
          desc: "certified Egyptian food manufacturer specializing in snack production for global markets",
          industry: "High-Volume Snack Chips",
          brands: [
            {
              name: "Nosh",
              img: "./assets/case-studies/nosh.webp",
            },
            {
              name: "Ridge",
              img: "./assets/case-studies/ridge.webp",
            },
          ],
          location: "Egypt",
          challenge: ["Expand Market into Saudi Arabia"],
          info: ["Manufacture", "Egypt", "Nosh - Ridge", " Saudi Arabia"],
        },
        caseStudy: {
          orderNum: "#485",
          desc: "Delivering High-Volume Snack Products",
          inspection: {
            name: "Intertek",
            ref: "INT-Prim-00332",
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
            },
          },
          manageBy: {
            name: "DHL",
            ref: "AWB: 378359966",
          },
          outcome: {
            otf: "with full documentation, COO, and telex release",
            cg: "Product met Saudi market health and safety standards",
            bve: "Premium shelf-ready packaging for Ridge & Nosh chips",
            ste: "All processes managed via TijaraHub from order to door",
          },
          tradeSumm: `<span class="font-bold">TijaraHub</span> empowered this transaction by managing sourcing, compliance, and end-to-end logistics—all within a B2B interface that ensures reliability and trust between exporters and importers.`,
          quote: {
            text: "This successful transaction proves how TijaraHub bridges premium Egyptian manufacturers with high-demand Gulf distributors seamlessly.",
            by: "TijaraHub Trade Management Team",
          },
          productsOrder: {
            brand: ["Nosh", "Ridge"],
            type: ["Flavored Potato Chips", "Crinkle-Cut Potato Chips"],
            quantity: ["850 Cartons", "400 Cartons"],
          },
          preWorksImgs: [
            "./assets/case-studies/485-01.webp",
            "./assets/case-studies/485-02.webp",
            "./assets/case-studies/485-03.webp",
          ],
          customerFeedback: {
            text: "Huge thanks to Tijarahub, Their amazing support helped us land our first Saudi order and ensured swift delivery,We're thrilled with their dedication and look forward to a lasting partnership.",
            author: {
              name: "Anas Elwy",
              title: "Founder & CEO Premium Food Industries",
            },
          },
        },
        buyer: {
          img: "./assets/case-studies/gourmet.webp",
          name: "The World of Gourmet Trading Co.",
          desc: "The World of Gourmet Trading Co. is a Saudi Arabian importer and distributor of premium specialty food brands. Since 1990, we've brought world-class products to the region, offering exceptional quality, design, and flavour through a trusted retail network.",
          industry: "Premium Food Import & Distribution",
          destination: "Jeddah, Saudi Arabia",
          info: ["Importer and Distributor", "Jeddah, Saudi Arabia"],
          orderInfo: {
            date: "June 02, 2024",
            value: "$7,537.50",
          },
        },
      },
      {
        id: 2,
        vendor: {
          img: "./assets/case-studies/Order-545/TijaraHubLogo.webp",
          name: "Al-Yasmine for Textiles",
          desc: "is a Certified Egyptian manufacturer known for producing high-grade fabrics tailored for professionals across global markets.",
          industry: "Supplying Premium Egyptian Fabrics",
          brands: [],
          location: "Egypt",
          challenge: ["Expand Market into Saudi Arabia"],
          info: ["Manufacture", "Egypt", "Melton Fabric", " Saudi Arabia"],
        },
        caseStudy: {
          orderNum: "#545",
          desc: "Supplying Premium Egyptian Fabrics to the Saudi Market",
          inspection: {
            name: "Intertek",
            ref: "INT-Prim-00332",
          },
          shippingInfo: {
            method: "Land Freight",
            quantity: "",
            date: "July 22, 2024",
            containerNum: "WHSU557402-9",
            sealSerial: "104593",
            coo: "0092052",
            telexNum: "196EA02584",
            ods: {
              name: "FedEx",
              tracking: "#7768429117",
            },
          },
          manageBy: {
            name: "DHL",
            ref: "AWB: 378359966",
          },
          outcome: {
            otf: "The order was shipped on schedule with complete documentation.",
            cg: "Full conformity with GCC quality standards ensured.",
            bve: "The fabric was delivered in professional-grade packaging, ready for distribution",
            ste: "From sourcing to logistics, the transaction was fully managed through TijaraHub.",
          },
          tradeSumm: `<span class="font-bold">TijaraHub</span> handled the entire B2B trade lifecycle—from supplier coordination and quality inspection to delivery and document management—providing Royal Ross Co. with a seamless and trustworthy import experience.`,
          quote: {
            text: "This order showcases TijaraHub’s efficiency in connecting Egyptian manufacturers with reliable partners in Saudi Arabia.",
            by: "TijaraHub Trade Management Team",
          },
          productsOrder: {
            brand: ["Al-Yasmine for Textiles"],
            type: ["Flavored Potato Chips", "Crinkle-Cut Potato Chips"],
            quantity: ["350Kg"],
          },
          preWorksImgs: ["./assets/case-studies/Order-545/545-01.webp"],
          customerFeedback: {
            text: "",
            author: {
              name: "",
              title: "",
            },
          },
        },
        buyer: {
          img: "./assets/case-studies/Order-545/RoyalROse.webp",
          name: "Royal Roses Co.",
          desc: "Royal Roses Co. Supplying Premium Egyptian Fabrics to the Saudi Market.",
          industry: "Wholesale Distribution",
          destination: "Riyadh, Saudi Arabia",
          info: ["Importer and Distributor", "Riyadh, Saudi Arabia"],
          orderInfo: {
            date: "July 10, 2024",
            value: "$7,537.50",
          },
        },
      },
      {
        id: 3,
        vendor: {
          img: "./assets/case-studies/Order-1499/3G-Hom.webp",
          name: "3G Hom For Food and Beverages",
          desc: " is a certified Egyptian manufacturer recognized for producing high-quality beverage solutions tailored to meet international standards. Their product lines are designed for both mass distribution and premium retail markets.",
          industry: "Premium Egyptian Beverage Products",
          brands: [
            {
              name: "So Plus",
              img: "./assets/case-studies/Order-1499/So-Plus.webp",
            },
          ],
          location: "Egypt",
          challenge: ["Expand Market into Saudi Arabia"],
          info: [
            "Manufacture",
            "Egypt",
            "Flavor Water Enhancer",
            " Saudi Arabia",
          ],
        },
        caseStudy: {
          orderNum: "#1499",
          desc: "Delivering Premium Egyptian Beverage Products to Saudi Arabia",
          inspection: {
            name: "Intertek",
            ref: "INT-Prim-00332",
          },
          shippingInfo: {
            method: "Land Freight",
            quantity: "",
            date: "June 10, 2025",
            containerNum: "WHSU557402-9",
            sealSerial: "104593",
            coo: "0092052",
            telexNum: "196EA02584",
            ods: {
              name: "FedEx",
              tracking: "#7768429117",
            },
          },
          manageBy: {
            name: "DHL",
            ref: "AWB: 378359966",
          },
          outcome: {
            otf: "The order was processed, packed, and shipped as scheduled.",
            cg: "Intertek inspection confirmed the products met GCC import standards.",
            bve: "The So Plus cartons were delivered in export-grade, retail-ready packaging.",
            ste: "All stages—from sourcing to shipping—were managed seamlessly through TijaraHub’s B2B platform.",
          },
          tradeSumm: `<span class="font-bold">TijaraHub</span> facilitated the complete export process—connecting the manufacturer with the buyer, overseeing inspection and quality control, and coordinating logistics. The outcome was a smooth, transparent, and trusted trade experience, reinforcing TijaraHub’s role as a key link in Egypt-to-Gulf B2B commerce.`,
          quote: {
            text: "This transaction highlights TijaraHub’s capability in managing reliable, cross-border trade between Egyptian producers and Saudi buyers, ensuring speed, safety, and compliance every step of the way.",
            by: "TijaraHub Trade Management Team",
          },
          productsOrder: {
            brand: ["So Plus"],
            type: ["Flavored Potato Chips", "Crinkle-Cut Potato Chips"],
            quantity: ["300 Carton"],
          },
          preWorksImgs: [
            "./assets/case-studies/Order-1499/1499-01.webp",
            "./assets/case-studies/Order-1499/1499-02.webp",
            "./assets/case-studies/Order-1499/1499-03.webp",
          ],
          customerFeedback: {
            text: "",
            author: {
              name: "",
              title: "",
            },
          },
        },
        buyer: {
          img: "./assets/case-studies/Order-1499/Al-Gabry.webp",
          name: "Modern Landmarks Foundation.",
          desc: "",
          industry: "Wholesale Distribution",
          destination: "Jeddah, Saudi Arabia",
          info: ["Importer and Distributor", "Jeddah, Saudi Arabia"],
          orderInfo: {
            date: "May 29, 2025",
            value: "$7,537.50",
          },
        },
      },
    ]
  : [
      {
        id: 1,
        vendor: {
          img: "./assets/case-studies/prem-food.webp",
          name: "شركة Premium Food Industries",
          desc: "شركة مصرية مصنّعة للأغذية حاصلة على شهادات اعتماد، متخصصة في إنتاج الوجبات الخفيفة للأسواق العالمية.",
          industry: "رقائق خفيفة بكميات كبيرة",
          brands: [
            {
              name: "Nosh",
              img: "./assets/case-studies/nosh.webp",
            },
            {
              name: "Ridge",
              img: "./assets/case-studies/ridge.webp",
            },
          ],
          location: "مصر",
          challenge: ["التوسع في السوق السعودي"],
          info: ["مصنع", "مصر", "Nosh - Ridge", "السعودية"],
        },
        caseStudy: {
          orderNum: "#485",
          desc: "إنتاج وتوريد الوجبات الخفيفة بكميات ضخمة",
          inspection: {
            name: "Intertek",
            ref: "INT-Prim-00332",
          },
          shippingInfo: {
            method: "شحن بحري",
            quantity: "حاوية واحدة 40 قدم",
            date: "19 يونيو 2024",
            containerNum: "WHSU557402-9",
            sealSerial: "104593",
            coo: "0092052",
            telexNum: "196EA02584",
            ods: {
              name: "FedEx",
              tracking: "#7768429117",
            },
          },
          manageBy: {
            name: "DHL",
            ref: "AWB: 378359966",
          },
          outcome: {
            otf: "مع الوثائق الكاملة، شهادة المنشأ (COO)، وتيليكس الإفراج",
            cg: "المنتج متوافق مع معايير الصحة والسلامة في السوق السعودي",
            bve: "تغليف فاخر وجاهز للعرض على الرف لرقائق Ridge & Nosh",
            ste: "تم إدارة جميع العمليات عبر TijaraHub من الطلب وحتى التسليم",
          },
          tradeSumm: `<span class="font-bold">TijaraHub</span> نجحت في تنفيذ هذه الصفقة عبر إدارة التوريد، والامتثال، والخدمات اللوجستية من البداية إلى النهاية، ضمن منصة B2B تضمن الثقة والاحتراف بين المصدرين والمستوردين.`,
          quote: {
            text: "تُثبت هذه الصفقة الناجحة كيف تُوفّر TijaraHub حلقة وصل سلسة بين المصنّعين المصريين المتميزين والموزّعين الخليجيين ذوي الطلب العالي.",
            by: "فريق TijaraHub لإدارة الصفقات التجارية",
          },
          productsOrder: {
            brand: ["Nosh", "Ridge"],
            type: ["رقائق بطاطس بنكهة", "رقائق بطاطس مقطعة تمويجياً"],
            quantity: ["850 كرتونة", "400 كرتونة"],
          },
          preWorksImgs: [
            "./assets/case-studies/485-01.webp",
            "./assets/case-studies/485-02.webp",
            "./assets/case-studies/485-03.webp",
          ],
          customerFeedback: {
            text: "شكر جزيل لمنصة TijaraHub! دعمهم الرائع ساعدنا في الحصول على أول طلب تصدير إلى السعودية، وضمان تسليمه بسرعة. نحن ممتنون لالتزامهم ونتطلع إلى شراكة طويلة الأمد معهم.",
            author: {
              name: "أنس علوي",
              title: "المؤسس والمدير التنفيذي لشركة Premium Food Industries",
            },
          },
        },
        buyer: {
          img: "./assets/case-studies/gourmet.webp",
          name: "شركة The World of Gourmet Trading Co.",
          desc: "شركة سعودية لاستيراد وتوزيع العلامات الغذائية الفاخرة. منذ 1990، نقدم منتجات عالمية متميزة عبر شبكة بيع موثوقة.",
          industry: "استيراد وتوزيع الأغذية الفاخرة",
          destination: "جدة، المملكة العربية السعودية",
          info: ["مستورد وموزع", "جدة، المملكة العربية السعودية"],
          orderInfo: {
            date: "02 يونيو 2024",
            value: "$7,537.50",
          },
        },
      },

      {
        id: 2,
        vendor: {
          img: "./assets/case-studies/Order-545/TijaraHubLogo.webp",
          name: "شركة الياسمين للنسيج",
          desc: "شركة مصرية حاصلة على شهادات اعتماد، مشهورة بإنتاج الأقمشة عالية الجودة لأسواق عالمية.",
          industry: "توريد الأقمشة المصرية الفاخرة",
          brands: [],
          location: "مصر",
          challenge: ["التوسع في السوق السعودي"],
          info: ["مصنع", "مصر", "قماش ميلتون", "السعودية"],
        },
        caseStudy: {
          orderNum: "#545",
          desc: "تصدير الأقمشة المصرية الفاخرة إلى السعودية",
          inspection: {
            name: "Intertek",
            ref: "INT-Prim-00332",
          },
          shippingInfo: {
            method: "شحن بري",
            quantity: "",
            date: "22 يوليو 2024",
            containerNum: "WHSU557402-9",
            sealSerial: "104593",
            coo: "0092052",
            telexNum: "196EA02584",
            ods: {
              name: "FedEx",
              tracking: "#7768429117",
            },
          },
          manageBy: {
            name: "DHL",
            ref: "AWB: 378359966",
          },
          outcome: {
            otf: "تم شحن الطلب في الوقت المحدد مع الوثائق الكاملة.",
            cg: "تم التأكد من مطابقة المنتج لمعايير الجودة الخليجية.",
            bve: "تم تسليم الأقمشة في تغليف احترافي وجاهزة للتوزيع.",
            ste: "من التوريد إلى اللوجستيات، تمت إدارة الصفقة بالكامل عبر TijaraHub.",
          },
          tradeSumm: `<span class="font-bold">TijaraHub</span> قامت بإدارة دورة التجارة كاملة من التنسيق مع المورد والفحص إلى التسليم وإدارة الوثائق، لتوفر تجربة استيراد سلسة وموثوقة لشركة Royal Ross.`,
          quote: {
            text: "تُبرز هذه الصفقة كفاءة TijaraHub في ربط المصنّعين المصريين بشركاء موثوقين في السعودية.",
            by: "فريق TijaraHub لإدارة الصفقات التجارية",
          },
          productsOrder: {
            brand: ["الياسمين للنسيج"],
            type: ["قماش ميلتون"],
            quantity: ["350 كيلوجرام"],
          },
          preWorksImgs: ["./assets/case-studies/Order-545/545-01.webp"],
          customerFeedback: {
            text: "",
            author: {
              name: "",
              title: "",
            },
          },
        },
        buyer: {
          img: "./assets/case-studies/Order-545/RoyalROse.webp",
          name: "شركة Royal Roses Co.",
          desc: "شركة Royal Roses تقوم بتوزيع الأقمشة المصرية الفاخرة في السوق السعودي.",
          industry: "توزيع الجملة",
          destination: "الرياض، المملكة العربية السعودية",
          info: ["مستورد وموزع", "الرياض، المملكة العربية السعودية"],
          orderInfo: {
            date: "10 يوليو 2024",
            value: "$7,537.50",
          },
        },
      },

      {
        id: 3,
        vendor: {
          img: "./assets/case-studies/Order-1499/3G-Hom.webp",
          name: "شركة 3G Hom للأغذية والمشروبات",
          desc: "شركة مصرية حاصلة على اعتماد، متخصصة في إنتاج حلول مشروبات عالية الجودة وفقًا للمعايير الدولية، موجهة للتوزيع الشامل والتجزئة الفاخرة.",
          industry: "منتجات مشروبات مصرية فاخرة",
          brands: [
            {
              name: "So Plus",
              img: "./assets/case-studies/Order-1499/So-Plus.webp",
            },
          ],
          location: "مصر",
          challenge: ["التوسع في السوق السعودي"],
          info: ["مصنع", "مصر", "منكهات مياه الشرب", "السعودية"],
        },
        caseStudy: {
          orderNum: "#1499",
          desc: "تصدير مشروبات مصرية عالية الجودة إلى السعودية",
          inspection: {
            name: "Intertek",
            ref: "INT-Prim-00332",
          },
          shippingInfo: {
            method: "شحن بري",
            quantity: "",
            date: "10 يونيو 2025",
            containerNum: "WHSU557402-9",
            sealSerial: "104593",
            coo: "0092052",
            telexNum: "196EA02584",
            ods: {
              name: "FedEx",
              tracking: "#7768429117",
            },
          },
          manageBy: {
            name: "DHL",
            ref: "AWB: 378359966",
          },
          outcome: {
            otf: "تم تجهيز وشحن الطلب حسب الجدول الزمني.",
            cg: "تقرير Intertek أكد تطابق المنتج مع معايير الاستيراد الخليجية.",
            bve: "تم تغليف عبوات So Plus بتغليف تصديري وجاهزة للبيع بالتجزئة.",
            ste: "جميع المراحل من التوريد للشحن تمت بسلاسة عبر منصة TijaraHub B2B.",
          },
          tradeSumm: `<span class="font-bold">TijaraHub</span> سهّلت العملية التصديرية بالكامل، من الربط بين المصنع والمشتري، إلى الفحص، إلى تنسيق اللوجستيات، ما نتج عنه تجربة تجارة شفافة وموثوقة.`,
          quote: {
            text: "تُبرز هذه الصفقة قدرة TijaraHub على إدارة تجارة عابرة للحدود بموثوقية وكفاءة بين مصر والسعودية.",
            by: "فريق TijaraHub لإدارة الصفقات التجارية",
          },
          productsOrder: {
            brand: ["So Plus"],
            type: ["منكهات مياه الشرب"],
            quantity: ["300 كرتونة"],
          },
          preWorksImgs: [
            "./assets/case-studies/Order-1499/1499-01.webp",
            "./assets/case-studies/Order-1499/1499-02.webp",
            "./assets/case-studies/Order-1499/1499-03.webp",
          ],
          customerFeedback: {
            text: "",
            author: {
              name: "",
              title: "",
            },
          },
        },
        buyer: {
          img: "./assets/case-studies/Order-1499/Al-Gabry.webp",
          name: "شركة Modern Landmarks Foundation",
          desc: "",
          industry: "توزيع الجملة",
          destination: "جدة، المملكة العربية السعودية",
          info: ["مستورد وموزع", "جدة، المملكة العربية السعودية"],
          orderInfo: {
            date: "29 مايو 2025",
            value: "$7,537.50",
          },
        },
      },
    ];

const services = [
  {
    title: isEnglishVersion()
      ? "Generation Qualified Leads"
      : "توليد العملاء المؤهلين",
    desc: isEnglishVersion()
      ? "High-quality leads via strategic inbound and outbound marketing."
      : "عملاء بجودة عالية من خلال استراتيجيات تسويق داخلية وخارجية.",
    img: "./assets/services-icons/leads.webp",
    services: isEnglishVersion()
      ? [
          "Inbound Campaigns",
          "Outbound Prospecting",
          "CRM & Lead Scoring",
          "Webinars & Interactive Content",
        ]
      : [
          "العملاء المحتملين خارجيًا",
          "حملات التسويق الداخلي",
          "إدارة علاقات العملاء وتقييم جودتهم",
          "الندوات الرقمية",
        ],
    servicesInfo: isEnglishVersion()
      ? [
          `SEO, content, and ads to attract your ideal audience.`,
          `Targeted email, LinkedIn, and calls to reach qualified leads.`,
          `Track and prioritize leads with CRM and scoring tools`,
          `Engage prospects with webinars and interactive tools.`,
        ]
      : [
          `تحسين محركات البحث، المحتوى، والإعلانات لجذب الجمهور المناسب.`,
          `تواصل مخصص عبر البريد، لينكدإن، والمكالمات.`,
          `متابعة وتقييم العملاء باستخدام CRM وأدوات التقييم.`,
          `ندوات وتجارب تفاعلية لبناء الثقة وتحفيز العملاء.`,
        ],
  },
  {
    title: isEnglishVersion()
      ? "International Export Sales"
      : "دعم الصادرات الدولية",
    desc: isEnglishVersion()
      ? "Expand globally with market entry to deal closure support."
      : "التوسع العالمي من دخول السوق حتى إتمام الصفقات.",
    img: "./assets/services-icons/intl-sales.webp",
    services: isEnglishVersion()
      ? [
          "Market Entry Strategy",
          "Partner Development",
          "Compliance Support",
          "Sales Enablement",
        ]
      : [
          "استراتيجية دخول السوق",
          "تطوير الشراكات",
          "دعم الامتثال",
          "تمكين فرق المبيعات",
        ],
    servicesInfo: isEnglishVersion()
      ? [
          `Tailored market research and entry plans.`,
          `Find and onboard distributors and agents.`,
          `Ensure export regulations and certifications.`,
          `Equip teams with tools and training`,
        ]
      : [
          "أبحاث وخطط دخول مخصصة.",
          "تحديد وتطوير الشركاء والوكلاء.",
          "ضمان الامتثال للوائح والشهادات.",
          "تزويد الفرق بالأدوات والتدريب.",
        ],
  },
  {
    title: isEnglishVersion() ? "Marketing" : "التسويق ",
    desc: isEnglishVersion()
      ? "Boost visibility and leads via digital and offline channels."
      : "تعزيز الظهور والعملاء عبر القنوات الرقمية والميدانية.",

    img: "./assets/services-icons/marketing.webp",
    services: isEnglishVersion()
      ? [
          "Paid Digital Marketing",
          "Email & WhatsApp Campaigns",
          "Trade Missions",
          "Exhibitions & Events",
        ]
      : [
          "التسويق الرقمي المدفوع",
          "حملات البريد الإلكتروني والواتساب",
          "البعثات التجارية",
          "المعارض والفعاليات",
        ],
    servicesInfo: isEnglishVersion()
      ? [
          "Targeted ads on Meta, Google, etc.",
          "Personalized campaigns to nurture leads.",
          "B2B trips for market exploration.",
          "Showcase your brand at industry events.",
        ]
      : [
          "إعلانات مستهدفة على ميتا وجوجل.",
          "حملات مخصصة عبر البريد والواتساب.",
          "زيارات تجارية لاستكشاف الأسواق.",
          "عرض العلامة التجارية في المعارض والفعاليات.",
        ],
  },
  {
    title: isEnglishVersion() ? "Market Research" : "أبحاث السوق",
    desc: isEnglishVersion()
      ? "Data-driven insights to guide your strategy."
      : "تحليلات مدعومة بالبيانات لتوجيه استراتيجيتك.",

    img: "./assets/services-icons/research.webp",
    services: isEnglishVersion()
      ? [
          "Industry Reports",
          "Competitor Insights",
          "Customer Profiling",
          "Surveys & Focus Groups",
        ]
      : [
          "تقارير الصناعة",
          "رؤى حول المنافسين",
          "تحليل ملفات العملاء",
          "استبيانات ومجموعات التركيز",
        ],
    servicesInfo: isEnglishVersion()
      ? [
          "Trends and forecasts.",
          "Understand competition and positioning.",
          "Define target segments.",
          "Collect real customer feedback.",
        ]
      : [
          "اتجاهات وتوقعات السوق.",
          "تحليل المنافسين والموقع في السوق.",
          "تحديد الشرائح المستهدفة.",
          "جمع آراء العملاء.",
        ],
  },
  {
    title: isEnglishVersion() ? "Customer Service" : "خدمة العملاء",
    desc: isEnglishVersion()
      ? "Seamless support across all touchpoints."
      : "دعم متكامل وسريع عبر جميع القنوات.",

    img: "./assets/services-icons/cust-serv.webp",
    services: isEnglishVersion()
      ? [
          "Omnichannel Support",
          "Helpdesk & Ticketing",
          "Full Trading Cycle Support",
          "Feedback Management",
        ]
      : [
          "دعم متعدد القنوات",
          "مكتب المساعدة وإدارة التذاكر",
          "دعم كامل لدورة التجارة",
          "إدارة الملاحظات والتقييمات",
        ],
    servicesInfo: isEnglishVersion()
      ? [
          "Chat, email, phone, social media.",
          "Organized issue tracking.",
          "Assist from inquiry to delivery.",
          "Analyze and act on customer feedback.",
        ]
      : [
          "دعم عبر المحادثات، البريد، الهاتف، ووسائل التواصل.",
          "نظام تتبع المشكلات.",
          "دعم كامل من الطلب حتى التسليم.",
          "تحليل ملاحظات العملاء لتحسين الخدمة.",
        ],
  },
  {
    title: isEnglishVersion()
      ? "AI-Powerd Proposal Tool"
      : "أدوات الذكاء الاصطناعي",
    desc: isEnglishVersion()
      ? "Automate and analyze proposals to close deals faster."
      : "أتمتة وتحليل الاقتراحات لإتمام الصفقات بسرعة.",

    img: "./assets/services-icons/gear.webp",
    services: isEnglishVersion()
      ? [
          "Automated RFQs",
          "Required Export Documents",
          "Proposal Analytics",
          "Digital Sales Rooms",
        ]
      : [
          "طلبات عروض الأسعار المؤتمتة",
          "الوثائق المطلوبة للتصدير",
          "تحليلات العروض",
          "غرف مبيعات رقمية",
        ],
    servicesInfo: isEnglishVersion()
      ? [
          "Auto-generate and send RFQs.",
          "Prepare export documents automatically.",
          "Real-time tracking of proposal engagement.",
          "Secure spaces to share and collaborate.",
        ]
      : [
          "إنشاء وإرسال طلبات عروض الأسعار تلقائيًا.",
          "إعداد مستندات التصدير تلقائيًا.",
          "متابعة تفاعل الاقتراحات بشكل فوري.",
          "مساحات رقمية آمنة للتعاون مع العملاء.",
        ],
  },
];

const burgerIcon = document.querySelector("header .burger-icon");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const showAnswerButtons = document.querySelectorAll(".show-answer");
const langToggle = document.querySelector("#lang-toggle");
const langMenu = document.querySelector("#lang-menu");
const servicesContainer = document.querySelector("#servicesContainer");
// Mobile Nav Logic
burgerIcon?.addEventListener("click", () => {
  menu.classList.toggle("active-menu");
  document?.getElementById("page-header").classList.toggle("overflow-hidden");
  menu.classList.remove("-z-10");
  if (!menu.classList.contains("z-10")) {
    menu.classList.add("z-10");
  }
  document.body.style.overflow = "hidden";
});
close?.addEventListener("click", () => {
  menu.classList.remove("z-10");
  document?.getElementById("page-header").classList.toggle("overflow-hidden");
  if (!menu.classList.contains("-z-10")) {
    menu.classList.add("-z-10");
  }
  menu.classList.remove("active-menu");
  document.body.style.overflow = "auto";
});

// FAQs Logic
showAnswerButtons?.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (btn.nextElementSibling.classList.contains("active-answer")) {
      btn.querySelector("i").style.transform = "rotate(0deg)";
      btn.nextElementSibling.classList.toggle("active-answer");
    } else {
      btn.nextElementSibling.classList.toggle("active-answer");
      if (btn.querySelector("i").classList.contains("fa-chevron-right")) {
        btn.querySelector("i").style.transform = "rotate(90deg)";
      } else {
        btn.querySelector("i").style.transform = "rotate(-90deg)";
      }
      showAnswerButtons.forEach((btn, i) => {
        if (i != index) {
          btn.nextElementSibling.classList.remove("active-answer");
          btn.querySelector("i").style.transform = "rotate(0deg)";
        }
      });
    }
  });
});

// Pricing Plan Toggle
const annuallyButton = document.getElementById("annually");
const monthlyButton = document.getElementById("monthly");

const standardPrice = document.getElementById("standard-price");
const premiumPrice = document.getElementById("premium-price");

function isEnglishVersion() {
  return document.documentElement.getAttribute("dir") === "ltr";
}

const plansContent = {
  generateLeads: [
    {
      text: isEnglishVersion() ? "Generating Leads" : "توليد العملاء المؤهلين",
    },
    {
      text: isEnglishVersion()
        ? "Identifying Potential Buyers"
        : "تحديد المشترين المحتملين",
      info: "",
      gain: "8 / Month",
    },
    {
      text: isEnglishVersion()
        ? "Buyers from DataBase"
        : "خدمة العملاء للمشترين",
      info: "",
      gain: "6 / Month",
    },
    {
      text: isEnglishVersion()
        ? "International Export Consultant"
        : "دعم الصادرات الدولية",
      info: "",
      gain: "1 Sales",
    },
    {
      text: isEnglishVersion()
        ? "Trade Missions in target countries"
        : "بعثات تجارية مستهدفة",
      info: "",
      gain: true,
    },
  ],
  services: [
    {
      text: isEnglishVersion() ? "Services" : "الخدمات",
    },
    {
      text: isEnglishVersion()
        ? "Logistcs support for Door to Door"
        : "دعم لوجستي شامل",
      info: "",
      gain: true,
    },

    {
      text: isEnglishVersion() ? "Access to Fund" : "الحصول علي التمويل",
      info: "",
      gain: false,
    },
  ],
  marketing: [
    {
      text: isEnglishVersion() ? "Marketing" : "التسويق",
    },
    {
      text: isEnglishVersion() ? "Market Research" : "أبحاث السوق المخصصة",
      info: "",
      gain: "1 Time / Year",
    },
    {
      text: isEnglishVersion()
        ? "Paid Social Media Ads"
        : "إعلانات مدفوعة - ميتا وجوجل",
      info: "",
      gain: "1 Campaign / Month",
    },
    {
      text: isEnglishVersion()
        ? "WhatsApp and email Marketing"
        : "التسويق عبر واتساب والبريد الإلكتروني",
      info: "",
      gain: "1 Campaign / Month",
    },
    {
      text: isEnglishVersion()
        ? "Social Media Designs"
        : "تصميم الحملات الإعلانية",
      info: "",
      gain: "3 Designs / Month",
    },
    {
      text: isEnglishVersion()
        ? "Product Popup through SEO Support"
        : "دعم تحسين محركات البحث للمنتجات",
      info: "",
      gain: true,
    },
    {
      text: isEnglishVersion() ? "Ads in Home page" : "عرض في الصفحة الرئيسية",
      info: "",
      gain: false,
    },
  ],
  techFeatures: [
    {
      text: isEnglishVersion()
        ? "Platform & Technology Features"
        : "ميزات المنصة والتكنولوجيا",
    },
    {
      text: isEnglishVersion()
        ? "Landing Company Profile webpage on Tijarahub"
        : "صفحة ويب للشركة لدعم التصدير",
      info: "",
      gain: false,
    },
    {
      text: isEnglishVersion() ? "Platform Access" : "الوصول إلى المنصة",
      info: "",
      gain: true,
    },
    {
      text: isEnglishVersion()
        ? "Ai One click Proposal Calculator"
        : "حاسبة عروض الشحن الفورية",
      info: "",
      gain: true,
    },
    {
      text: isEnglishVersion()
        ? "Ai Search Optimization"
        : "تحسين البحث بالذكاء الاصطناعي",
      info: "",
      gain: true,
    },
    {
      text: isEnglishVersion() ? "Products Listing" : "إدراج المنتجات",
      info: "",
      gain: "Maximum 25",
    },
    {
      text: isEnglishVersion() ? "Images Per Product" : "صور للمنتج",
      info: "",
      gain: "Maximum 5",
    },
    {
      text: isEnglishVersion() ? "Videos" : "مقاطع فيديو",
      info: "",
      gain: true,
    },
  ],
  standard: {
    annually: {
      price: "$195",
      generateLeads: isEnglishVersion()
        ? ["", "8 / Month", "6 / Month", "1 Sales", true]
        : ["", "8 / شهر", "6 / شهر", "1 موظف مبيعات", true],
      services: isEnglishVersion()
        ? ["", true, "Up to 10M EGP"]
        : ["", true, "يصل الى 10 ملايين ج. م."],
      marketing: isEnglishVersion()
        ? [
            "",
            "1 Time / Year",
            "1 Campaign / Month",
            "1 Campaign / Month",
            "3 Designs / Month",
            true,
            false,
          ]
        : [
            "",
            "1 مرة / سنوياً",
            "1 حملة / شهريا",
            "1 حملة / شهريا",
            "3 تصاميم / شهريا",
            true,
            false,
          ],
      techFeatures: isEnglishVersion()
        ? ["", false, true, true, true, "Maximum 25", "Maximum 5", true]
        : ["", false, true, true, "كحد اقصى 25", "كحد اقصى 5", true, true],
    },
    monthly: {
      price: "$275",
      generateLeads: isEnglishVersion()
        ? ["", "5 / Month", "6 / Month", false, false]
        : ["", "5 / شهر", "6 / شهر", false, false],
      services: isEnglishVersion()
        ? ["", true, "Up to 10M EGP"]
        : ["", true, "يصل الى 10 ملايين ج. م."],
      marketing: isEnglishVersion()
        ? [
            "",
            "With Cost",
            "1 Campaign / Month",
            "1 Campaign / Month",
            "2 Designs / Month",
            true,
            false,
          ]
        : [
            "",
            "مع تكلفة",
            "1 حملة / شهريا",
            "1 حملة / شهريا",
            "2 تصاميم / شهريا",
            true,
            false,
          ],
      techFeatures: isEnglishVersion()
        ? ["", false, true, true, true, "Maximum 12", "Maximum 5", true]
        : ["", false, true, true, true, "كحد اقصى 12", "كحد اقصى 5", true],
    },
  },
  premium: {
    annually: {
      price: "$320",
      generateLeads: isEnglishVersion()
        ? ["", "15 / Month", "12 / Month", "2 Sales", true]
        : ["", "15 / شهر", "12 / شهر", "2 موظف مبيعات", true],
      services: isEnglishVersion()
        ? ["", true, "Up to 10M EGP"]
        : ["", true, "يصل الى 10 ملايين ج. م."],
      marketing: isEnglishVersion()
        ? [
            "",
            "2 Time / Year",
            "2 Campaign / Month",
            "2 Campaign / Month",
            "6 Designs / Month",
            true,
            true,
          ]
        : [
            "",
            "2 مرة / سنوياً",
            "1 حملة / شهريا",
            "1 حملة / شهريا",
            "6 تصاميم / شهريا",
            true,
            true,
          ],
      techFeatures: isEnglishVersion()
        ? ["", true, true, true, true, "Maximum 60", "Maximum 8", true]
        : ["", true, true, true, "كحد اقصى 60", "كحد اقصى 8", true, true],
    },
    monthly: {
      price: "$460",
      generateLeads: isEnglishVersion()
        ? ["", "12 / Month", "6 / Month", "1 Sales", false]
        : ["", "12 / شهر", "6 / شهر", , false],
      services: isEnglishVersion()
        ? ["", true, "Up to 10M EGP"]
        : ["", true, "يصل الى 10 ملايين ج. م."],
      marketing: isEnglishVersion()
        ? [
            "",
            "With Cost",
            "2 Campaign / Month",
            "2 Campaign / Month",
            "4 Designs / Month",
            true,
            true,
          ]
        : [
            "",
            "مع تكلفة",
            "2 حملة / شهريا",
            "2 حملة / شهريا",
            "4 تصاميم / شهريا",
            true,
            true,
          ],
      techFeatures: isEnglishVersion()
        ? ["", true, true, true, true, "Maximum 30", "Maximum 8", true]
        : ["", true, true, true, true, "كحد اقصى 30", "كحد اقصى 8", true],
    },
  },
};

const togglePlan = document.querySelector("#togglePlan");
const standardContent = document.querySelector("#standard-content");
const premiumContent = document.querySelector("#premium-content");
togglePlan?.addEventListener("click", (e) => {
  // initial variable
  let isAnnually = true;
  let isMonthly = false;
  if (e.target.id === "annually") {
    isAnnually = true;
    isMonthly = false;
  } else {
    isAnnually = false;
    isMonthly = true;
  }
  // add active to the current plan
  annuallyButton.classList.toggle("active", isAnnually);
  monthlyButton.classList.toggle("active", isMonthly);

  // empty all content
  standardContent.querySelectorAll("li").forEach((li) => li.remove());
  premiumContent.querySelectorAll("li").forEach((li) => li.remove());

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
    premiumLink.href = "https://tijarahub.com/vendor-registration/?plan_id=6";
    standardLink.href = "https://tijarahub.com/vendor-registration/?plan_id=5";

    //====== Standard Content ======//
    // Genertaing Leads Content
    plansContent.generateLeads.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.standard.annually.generateLeads[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.standard.annually.generateLeads[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.standard.annually.generateLeads[index]}</span>`
          }
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content);
    });
    // services Content
    plansContent.services.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.standard.annually.services[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.standard.annually.services[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.standard.annually.services[index]}</span>`
          }
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content);
    });
    // marketing Content
    plansContent.marketing.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.standard.annually.marketing[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.standard.annually.marketing[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.standard.annually.marketing[index]}</span>`
          } 
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content);
    });
    // Technology Featuers Content
    plansContent.techFeatures.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.standard.annually.techFeatures[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.standard.annually.techFeatures[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.standard.annually.techFeatures[index]}</span>`
          }
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content);
    });

    //====== Premium Content ======//
    // Genertaing Leads Content
    plansContent.generateLeads.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.premium.annually.generateLeads[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.premium.annually.generateLeads[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.premium.annually.generateLeads[index]}</span>`
          }
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content);
    });
    // services Content
    plansContent.services.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.premium.annually.services[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.premium.annually.services[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.premium.annually.services[index]}</span>`
          }
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content);
    });
    // marketing Content
    plansContent.marketing.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.premium.annually.marketing[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.premium.annually.marketing[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.premium.annually.marketing[index]}</span>`
          }
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content);
    });
    // Technology Featuers Content
    plansContent.techFeatures.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.premium.annually.techFeatures[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.premium.annually.techFeatures[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.premium.annually.techFeatures[index]}</span>`
          }
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content);
    });

    // toggle the annually per year price text
    yearlyCost.forEach((e) => {
      e.style.display = "block";
    });
  } else {
    premiumLink.href = "https://tijarahub.com/vendor-registration/?plan_id=4";
    standardLink.href = "https://tijarahub.com/vendor-registration/?plan_id=3";
    // Price
    standardPrice.textContent = plansContent.standard.monthly.price;
    premiumPrice.textContent = plansContent.premium.monthly.price;
    //====== Standard Content ======//
    // Generating Leads Content
    plansContent.generateLeads.map((service, index) => {
      const content =
        index !== 2
          ? // index !== 2 && index !== 5
            `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.standard.monthly.generateLeads[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.standard.monthly.generateLeads[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.standard.monthly.generateLeads[index]}</span>`
          }
        </li>
        `
          : "";

      standardContent.insertAdjacentHTML("beforeend", content);
    });
    // services Content
    plansContent.services.map((service, index) => {
      const content =
        index !== 6 && index !== 5
          ? `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.standard.monthly.services[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.standard.monthly.services[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.standard.monthly.services[index]}</span>`
          }
        </li>
        `
          : "";

      standardContent.insertAdjacentHTML("beforeend", content);
    });
    // marketing Content
    plansContent.marketing.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.standard.monthly.marketing[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.standard.monthly.marketing[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.standard.monthly.marketing[index]}</span>`
          }
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content);
    });
    // Technology Featuers Content
    plansContent.techFeatures.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.standard.monthly.techFeatures[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.standard.monthly.techFeatures[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.standard.monthly.techFeatures[index]}</span>`
          }
        </li>
        `;

      standardContent.insertAdjacentHTML("beforeend", content);
    });

    //====== Premium Content ======//
    // Genertaing Leads Content
    plansContent.generateLeads.map((service, index) => {
      const content =
        index !== 2
          ? `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.premium.monthly.generateLeads[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.premium.monthly.generateLeads[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.premium.monthly.generateLeads[index]}</span>`
          }
        </li>
        `
          : "";

      premiumContent.insertAdjacentHTML("beforeend", content);
    });
    // services Content
    plansContent.services.map((service, index) => {
      const content =
        index !== 6 && index !== 5
          ? `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.premium.monthly.services[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.premium.monthly.services[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.premium.monthly.services[index]}</span>`
          }
        </li>
        `
          : "";

      premiumContent.insertAdjacentHTML("beforeend", content);
    });
    // marketing Content
    plansContent.marketing.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.premium.monthly.marketing[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.premium.monthly.marketing[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.premium.monthly.marketing[index]}</span>`
          }
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content);
    });
    // Technology Featuers Content
    plansContent.techFeatures.map((service, index) => {
      const content = `
        <li class="flex items-center justify-between gap-2">
          <p class="flex items-center gap-0.5 xl:gap-4 ${
            index === 0 ? "h4 text-light-cyan pt-4" : ""
          }">
          
            ${service.text}
          </p>
          ${
            plansContent.premium.monthly.techFeatures[index] === true
              ? `<span class="text-dark-cyan"
            ><i class="fa-solid fa-check"></i></span>`
              : plansContent.premium.monthly.techFeatures[index] === false
              ? `<span class="text-red-500"
            ><i class="fa-solid fa-x"></i
            ></span>`
              : `<span class="text-end">${plansContent.premium.monthly.techFeatures[index]}</span>`
          }
        </li>
        `;

      premiumContent.insertAdjacentHTML("beforeend", content);
    });

    // toggle the annually per year price text
    yearlyCost.forEach((e) => {
      e.style.display = "none";
    });
  }
});

const annuallyPrices = {
  standard: "$195",
  premium: "$320",
};

const monthlyPrices = {
  standard: "$275",
  premium: "$460",
};

const monthlyDetails = {
  en: {
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
      "Maximum 12",
      "Up to 10M EGP",
    ],
    premium: [
      "12 / Month",
      "10 / Month",

      "2 Campaign / Month",
      ` <span class="text-red-500"
    ><i class="fa-solid fa-x"></i
    ></span>`,

      "1 Sales",
      "Maximum 30",
      "Up to 10M EGP",
    ],
  },
  ar: {
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
      "كحد اقصى 12",
      "يصل الى 10 ملايين ج. م.",
    ],
    premium: [
      "12 / شهريا",
      "10 / شهريا",

      "2 حملة / شهريا",
      `<span class="text-red-500"
    ><i class="fa-solid fa-x"></i
    ></span>`,
      ,
      "كحد اقصى 30",
      "يصل الى 10 ملايين ج. م.",
    ],
  },
};
const yearlyDetails = {
  en: {
    standard: [
      "8 / Month",
      "6 / Month",

      "1 Campaign / Month",
      ` <span class="text-dark-cyan"
    ><i class="fa-solid fa-check"></i></span>`,

      `1 Sales`,
      "Maximum 25",
      "Up to 10M EGP",
    ],
    premium: [
      "15 / Month",
      "12 / Month",

      "2 Campaign / Month",
      ` <span class="text-dark-cyan"
    ><i class="fa-solid fa-check"></i></span>`,

      "2 Sales",
      "Maximum 60",
      "Up to 10M EGP",
    ],
  },
  ar: {
    standard: [
      "8 / شهريا",
      "6 / شهريا",

      "1 حملة / شهريا",
      ` <span class="text-dark-cyan"
    ><i class="fa-solid fa-check"></i></span>`,

      `1 موظف مبيعات`,
      "كحد اقصى 25",
      "يصل الى 10 ملايين ج. م.",
    ],
    premium: [
      "15 / شهريا",
      "12 / شهريا",

      "2 حملة / شهريا",
      ` <span class="text-dark-cyan"
    ><i class="fa-solid fa-check"></i></span>`,
      "2 موظف مبيعات",
      "كحد اقصى 60",
      "يصل الى 10 ملايين ج. م.",
    ],
  },
};

function fillPlanContent(type, lang) {
  const planDetailsContent = ` <p class="h4">  ${
    lang == "en" ? "What you will get" : "ما ستحصل عليه"
  }</p>
                <ul class="flex flex-col gap-3 text-sm">
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${
                        lang == "en"
                          ? "Identifying Potential Buyers"
                          : "تحديد المشترين المحتملين"
                      }
                    </p>
                    <p class="text-end">
                    ${type[0]}
                    </p>
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${
                        lang == "en"
                          ? "Paid Social Media Marketing"
                          : "التسويق عبر وسائل التواصل الاجتماعي المدفوعة"
                      }
                    </p>
                    <p class="text-end">
                    ${type[2]}
                    </p>
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${
                        lang == "en"
                          ? "Trade Missions in target countries"
                          : "بعثات تجارية مستهدفة"
                      }
                    </p>
                    <p class="text-end">
                    ${type[3]}
                    </p>
                  </li>
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${
                        lang == "en"
                          ? "International Export Consultant"
                          : "دعم الصادرات الدولية"
                      }
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
                  <li class="flex items-center justify-between gap-2">
                    <p class="flex items-center gap-0.5 xl:gap-4">
                      ${lang == "en" ? "Access to Fund" : " الحصول علي التمويل"}
                    </p>
                    <p class="text-end">
                    ${type[6]}
                    </p>
                  </li>
                </ul>`;

  return planDetailsContent;
}
let premiumDetails = document.querySelector(".premium-details");
let standardDetails = document.querySelector(".standard-details");

document.querySelector(".togglePlan")?.addEventListener("click", (e) => {
  if (e.target.id === "annually" || e.target.id === "monthly") {
    annuallyButton.classList.toggle("active", e.target.id === "annually");
    monthlyButton.classList.toggle("active", e.target.id === "monthly");

    const standardButton = document.querySelector(".standard-button");
    const premiumButton = document.querySelector(".premium-button");
    const yearlyCost = document.querySelectorAll(".perYear");
    if (e.target.id === "annually") {
      if (premiumDetails.hasChildNodes() && standardDetails.hasChildNodes()) {
        premiumDetails.innerHTML = "";
        standardDetails.innerHTML = "";
      }

      if (document.dir == "ltr") {
        premiumDetails.insertAdjacentHTML(
          "beforeend",
          fillPlanContent(yearlyDetails.en.premium, "en")
        );
        standardDetails.insertAdjacentHTML(
          "beforeend",
          fillPlanContent(yearlyDetails.en.standard, "en")
        );
      } else {
        premiumDetails.insertAdjacentHTML(
          "beforeend",
          fillPlanContent(yearlyDetails.ar.premium, "ar")
        );
        standardDetails.insertAdjacentHTML(
          "beforeend",
          fillPlanContent(yearlyDetails.ar.standard, "ar")
        );
      }

      standardPrice.innerText = annuallyPrices.standard;
      premiumPrice.innerText = annuallyPrices.premium;
      standardButton.href =
        "https://tijarahub.com/vendor-registration/?plan_id=5";
      premiumButton.href =
        "https://tijarahub.com/vendor-registration/?plan_id=6";
      yearlyCost.forEach((e) => {
        e.style.display = "block";
      });
    } else if (e.target.id === "monthly") {
      standardPrice.innerText = monthlyPrices.standard;
      premiumPrice.innerText = monthlyPrices.premium;
      if (premiumDetails.hasChildNodes() && standardDetails.hasChildNodes()) {
        premiumDetails.innerHTML = "";
        standardDetails.innerHTML = "";
      }

      if (document.dir == "ltr") {
        premiumDetails.insertAdjacentHTML(
          "beforeend",
          fillPlanContent(monthlyDetails.en.premium, "en")
        );
        standardDetails.insertAdjacentHTML(
          "beforeend",
          fillPlanContent(monthlyDetails.en.standard, "en")
        );
      } else {
        premiumDetails.insertAdjacentHTML(
          "beforeend",
          fillPlanContent(monthlyDetails.ar.premium, "ar")
        );
        standardDetails.insertAdjacentHTML(
          "beforeend",
          fillPlanContent(monthlyDetails.ar.standard, "ar")
        );
      }

      standardButton.href =
        "https://tijarahub.com/vendor-registration/?plan_id=3";
      premiumButton.href =
        "https://tijarahub.com/vendor-registration/?plan_id=4";
      yearlyCost.forEach((e) => {
        e.style.display = "none";
      });
    }
  }
});

// Handle the lang options toggle
const handleLangOptions = () => {
  langMenu.classList.toggle("opacity-0");
  langMenu.classList.toggle("flex");
  langMenu.classList.toggle("hidden");
  document.getElementById("page-header").classList.toggle("overflow-hidden");
};

document.body.addEventListener("click", (e) => {
  if (
    e.target != document.querySelector(".lang-icon") &&
    e.target != langMenu
  ) {
    if (!langMenu.classList.contains("opacity-0")) {
      handleLangOptions();
    }
  }
});

langToggle.addEventListener("click", handleLangOptions);

// Handle Calc Modal

const modal = document.querySelector("#calc-modal");
const modalResult = document.querySelector("#calc-modal h4");
const closeModalBtn = document.querySelector("#close-calc-modal");
const calcSection = document.querySelector("#calc-section");

const closeCalcModal = () => {
  modal.classList.toggle("flex");
  modal.classList.toggle("hidden");
};

closeModalBtn?.addEventListener("click", () => {
  closeCalcModal();
});

// Calc Logic
const clacForm = document.querySelector("#calc-form");
const inputs = document.querySelectorAll("#calc-form select");

clacForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  closeCalcModal();

  let growthResult =
    inputs[0].value * 0.5 +
    inputs[1].value * 0.7 +
    inputs[2].value * 0.8 +
    inputs[3].value * 0.9 +
    inputs[4].value * 0.2 +
    20;
  modalResult.innerHTML = `Your Potential Growth is: ${growthResult}%`;
  window.scrollTo({
    top: window.scrollY + calcSection.getBoundingClientRect().top - 50,
    behavior: "smooth",
  });
});

// Carousel Arrows

const leftArrow = document.querySelector(".arrows .left-arrow");
const rightArrow = document.querySelector(".arrows .right-arrow");
const journeyCarousel = document.querySelector(".journey-carousel");
let slideWidth =
  +document.querySelector(".slide")?.getBoundingClientRect().width + 16; //slide + gap
window.addEventListener("resize", () => {
  slideWidth =
    +document.querySelector(".slide")?.getBoundingClientRect().width + 16;
});
if (document.dir == "rtl") slideWidth = -slideWidth;
let autoScrollInterval;
rightArrow?.addEventListener("click", () => {
  // journeyCarousel?.scrollBy({ left: slideWidth, behavior: "smooth" })
  journeyCarousel.scrollTo({
    left:
      Math.round((journeyCarousel.scrollLeft + slideWidth) / slideWidth) *
      slideWidth,
    behavior: "smooth",
  });
});
leftArrow?.addEventListener("click", () => {
  // journeyCarousel?.scrollBy({ left: -slideWidth, behavior: 'smooth' })
  journeyCarousel.scrollTo({
    left:
      Math.round((journeyCarousel.scrollLeft - slideWidth) / slideWidth) *
      slideWidth,
    behavior: "smooth",
  });
});

autoScroll = () => {
  autoScrollInterval = setInterval(() => {
    journeyCarousel?.scrollBy({ left: slideWidth, behavior: "smooth" });

    if (
      Math.abs(journeyCarousel?.scrollLeft) + journeyCarousel?.offsetWidth >=
      journeyCarousel?.scrollWidth
    ) {
      journeyCarousel?.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 3000);
};

autoScroll();
// Draging animation Handling
let startLocation = 0;
let holding = false;
let baseScrollLeft;

journeyCarousel?.addEventListener("touchstart", dragStart);
journeyCarousel?.addEventListener("touchmove", drag);
journeyCarousel?.addEventListener("touchend", dragEnd);

journeyCarousel?.addEventListener("mousedown", dragStart);
journeyCarousel?.addEventListener("mouseup", dragEnd);
journeyCarousel?.addEventListener("mouseleave", dragEnd);
journeyCarousel?.addEventListener("mousemove", drag);

function dragStart(e) {
  clearInterval(autoScrollInterval);
  journeyCarousel.style.cursor = "grabbing";
  holding = true;
  e.type == "touchstart"
    ? (startLocation = e.changedTouches[0].pageX)
    : (startLocation = e.pageX);

  baseScrollLeft = journeyCarousel.scrollLeft;
}
let translation = 0;
function drag(e) {
  if (!holding) {
    clearInterval(autoScrollInterval);
    return;
  }
  if (e.type == "touchmove") {
    journeyCarousel.scrollLeft =
      baseScrollLeft - (e.changedTouches[0].pageX - startLocation);
    return;
  }
  journeyCarousel.scrollLeft = baseScrollLeft - (e.pageX - startLocation);
}
function dragEnd() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(() => {
    journeyCarousel?.scrollBy({ left: slideWidth, behavior: "smooth" });
    if (
      journeyCarousel?.scrollLeft + journeyCarousel?.offsetWidth >=
      journeyCarousel?.scrollWidth
    ) {
      journeyCarousel?.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 3000);
  journeyCarousel.scrollTo({
    left: Math.round(journeyCarousel.scrollLeft / slideWidth) * slideWidth,
    behavior: "smooth",
  });
  journeyCarousel.style.cursor = "grab";
  holding = false;
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
          role="img" aria-label="${vendor.name}" title="${vendor.name}"
          src="${vendor.img}"
          alt="${vendor.name}"
          class="mx-auto rounded w-[200px]"
        />
      </div>
      <h4 class="h4 text-center">${
        vendor.name
      } <span class="block text-center text-gray-300 text-xs pt-1">${
    vendor.industry
  }</span></h4>
      <p class="p-2  capitalize text-center text-base leading-5">
        ${vendor.desc}
      </p>
      <div
        class="flex  flex-col flex-wrap items-center justify-center w-full gap-4 text-sm font-semibold md:flex-row"
      >
        ${vendor.info
          .map(
            (item) =>
              `<div class='stat-card !bg-black/40 min-w-1/3'><p>${item}</p></div>`
          )
          .join("")}
      </div>
    </div>`;

  // Case Study Content
  const caseStudyContent = ` <div
      data-aos="fade-up"
      class="flex flex-col items-center justify-around p-8 gap-5 text-secondary-100 bg-white/5 backdrop-blur-md rounded-3xl"
    >
      <h3 class="text-center capitalize h2">${
        isEnglishVersion() ? "Export Order" : "طلب تصدير رقم"
      } 
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
        <p>Order Date: <span class="text-gray-400 italic">${
          buyer.orderInfo.date
        }</span></p>
        </li>
        <li>
        <p>Shipping Date: <span class="text-gray-400 italic">${
          caseStudy.shippingInfo.date
        }</span></p>
        </li>
        <li>
        <p>Shipping Method:  <span class="text-gray-400 italic">${
          caseStudy.shippingInfo.method
        }</span></p>
        </li>
        </ul>
        <a
          rel="noreferrer noopener"
          href="./case-study${isEnglishVersion() ? "" : "ar"}.html?i=${index}"
          class="relative max-w-fit md:self-end flex items-center gap-2 px-4 py-2  rounded-full  bg-secondary-100 text-secondary"

        >
          <img role="img" aria-label="check icon" title="check icon" src="./assets/checkicon.svg" width="20" height="20" alt="icon" />
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
        role="img" aria-label="${buyer.name}" title="${buyer.name}"
          src="${buyer.img}"
          alt="${buyer.name}"
          class="mx-auto rounded w-[200px]"
        />
      </div>
      <h4 class="h4 text-center">${
        buyer.name
      } <span class="block text-center text-gray-300 text-xs pt-1">${
    buyer.industry
  }</span></h4>
      <p class="p-2  capitalize text-center text-base leading-5">
        ${buyer.desc}
      </p>
      <div
        class="flex  flex-col flex-wrap items-center justify-center w-full gap-4 text-sm font-semibold md:flex-row"
      >
      ${buyer.info
        .map(
          (item) =>
            `<div class='stat-card !bg-black/40 min-w-1/3'><p>${item}</p></div>`
        )
        .join("")}
        
      </div>
        </div>`;

  const content = `
    ${vendorContent}
    ${caseStudyContent}
    ${buyerContent}
  `;

  caseStudiesContainer?.insertAdjacentHTML("beforeend", content);
});

function addContentToPage(index) {
  const caseStudiesContainer = document.querySelector("#caseStudyContainer");

  let { id, vendor, caseStudy, buyer } = caseStudies[index];

  let storyContent = `
            <h2 class="h2 text-secondary-200 lg:text-3xl">${
              isEnglishVersion() ? "Export Order" : "طلب تصدير رقم"
            } ${caseStudy.orderNum}</h2>
            <p class="text-3xl font-black tracking-wide text-secondary-200">
              ${caseStudy.desc}
            </p>
            <div class="flex w-full flex-col  gap-5">
                <div class="flex flex-col lg:flex-row items-center gap-5 ">
                  <div class="flex items-center gap-2 lg:flex-row flex-col">
                    <img role="img" aria-label="${vendor.name}" title="${
    vendor.name
  }" src=${vendor.img} class="w-[100px]" alt=${vendor.name} />
                    <h3 class="h4">
                    ${vendor.name}
                    </h3>
                  </div>
                  <div class="flex items-center gap-2 lg:flex-row flex-col">
                    <img role="img" aria-label="${buyer.name}" title="${
    buyer.name
  }" src=${buyer.img} class="w-[100px]" alt=${buyer.name} />
                    <h3 class="h4">
                    ${buyer.name}
                    </h3>
                  </div>
                </div>
                <div class="flex flex-1 flex-col lg:flex-row lg:items-center gap-2 *:flex-1">
            ${vendor.brands
              .map(
                ({
                  name,
                  img,
                }) => `<div class='stat-card lg:max-w-[320px] !text-secondary !bg-white'>
                  <img role="img" aria-label="${name}" title="${name}" src="${img}" alt="${name} Image" class="h-10" />
                  <p>${name}</p>
                </div>`
              )
              .join("")}
              </div>
            </div>
          <div class="space-y-3 w-full">
            <h3 class="h3 text-light-cyan font-semibold">${
              isEnglishVersion() ? "Overview" : "نظرة عامة"
            }</h3>
            <ul class="flex flex-col gap-2 text-base">
              <li>
                <p>${
                  isEnglishVersion() ? "Manufacture" : "المُصنِّع"
                } : <span class="text-gray-300 italic">${vendor.name}</span></p>
              </li>
              <li>
                <p>${
                  isEnglishVersion() ? "Location" : "الموقع"
                } : <span class="text-gray-300 italic">${
    vendor.location
  }</span></p>
              </li>
              <li>
                <p>${
                  isEnglishVersion() ? "Buyer" : "المشتري"
                } : <span class="text - gray - 300 italic">${
    buyer.name
  }</span></p>
              </li >
              <li>
                <p>${
                  isEnglishVersion() ? "Destination" : "الوجهة"
                } : <span class="text-gray-300 italic">${
    buyer.destination
  }</span></p>
              </li>
              <li>
                <p>${
                  isEnglishVersion() ? "Order Date" : " تاريخ الطلب"
                } : <span class="text-gray-300 italic">${
    buyer.orderInfo.date
  }</span></p>
              </li>
              <li>
                <p>${
                  isEnglishVersion() ? "Shipping Method" : "طريقة الشحن"
                } :  <span class="text-gray-300 italic">${
    caseStudy.shippingInfo.method
  } ${
    caseStudy.shippingInfo.quantity !== ""
      ? `(${caseStudy.shippingInfo.quantity})`
      : ""
  }</span></p>
              </li>

              <li>
                <p>${
                  isEnglishVersion() ? "Shipping Date" : "تاريخ الشحن"
                } : <span class="text-gray-300 italic">${
    caseStudy.shippingInfo.date
  }</span></p>
              </li>
            </ul >
            <h3 class="h3 text-light-cyan font-semibold">${
              isEnglishVersion() ? "Products Ordered" : "المنتجات المطلوبة"
            }</h3>
            <div class="border w-full border-gray-500">
              <div class="flex *:flex-1 *:p-2 items-center border-b border-b-gray-500">
                <h6 class="${
                  isEnglishVersion() ? "border-r" : "border-l"
                } border-gray-500 font-semibold">${
    isEnglishVersion() ? "Brand" : "علامة تجارية"
  }</h6>
                <h6 class="font-semibold">${
                  isEnglishVersion() ? "Quantity" : " الكمية"
                }</h6>
              </div>
            ${caseStudy.productsOrder.brand
              .map(
                (brand, index) => `
              <div class="flex *:flex-1 *:p-2 items-center">
              <p class="${
                isEnglishVersion() ? "border-r" : "border-l"
              } border-gray-500 ${
                  index !== caseStudy.productsOrder.brand.length - 1
                    ? "border-b"
                    : ""
                }">${brand}</p>
              <p class="border-gray-500 ${
                index !== caseStudy.productsOrder.brand.length - 1
                  ? "border-b"
                  : ""
              }">${caseStudy.productsOrder.quantity[index]}</p>
              </div>    
                `
              )
              .join("")}
            </div>
            <div class="flex flex-wrap my-5 items-center gap-5 *:rounded-2xl">
                  ${caseStudy.preWorksImgs
                    .map(
                      (img) => `
        <img role="img" aria-label="${vendor.name}" title="${vendor.name}" src="${img}" 
            data-src="${img}" 
            alt="${caseStudy.orderNum}" 
            class="popup-img cursor-pointer max-w-[calc(100%_/_3-_1.25rem)]"/>
    `
                    )
                    .join("")}
            </div>
            <hr class="text-gray-500"/>

            <div class="flex flex-col items-center gap-5 md:gap-10 relative my-20">
          <h3 class="h3 max-sm:text-center text-light-cyan font-semibold">${
            isEnglishVersion() ? "Customer Feedback" : " آراء العملاء"
          }</h3>
          <h3
            class="h3 quote"
          >
          ${caseStudy.customerFeedback.text}
          </h3>
          <div class="flex flex-col gap-1 text-center">
            <h4 class="h4">${caseStudy.customerFeedback.author.name}</h4>
            <span class="text-gray-400">${
              caseStudy.customerFeedback.author.title
            }</span>
          </div>
          </div>
          <hr class="text-gray-500"/>
            <h3 class="h3 text-light-cyan font-semibold">${
              isEnglishVersion()
                ? "Outcome &amp; Value Delivered"
                : " النتائج والقيمة المقدّمة"
            }</h3>
            <ul class="flex flex-col gap-2 text-base">
              <li>
                <p>${
                  isEnglishVersion()
                    ? "On-Time Fulfillment"
                    : "الالتزام الزمني في تنفيذ الطلبات"
                } : <span class="text-gray-300 italic">${
    caseStudy.outcome.otf
  }</span></p>
              </li>
              <li>
                <p>${
                  isEnglishVersion()
                    ? "Compliance Guaranteed"
                    : "التزام تام بالجودة والمعايير التنظيمية"
                } : <span class="text-gray-300 italic">${
    caseStudy.outcome.cg
  }</span></p>
              </li>
              <li>
                <p>${
                  isEnglishVersion()
                    ? "Brand Visibility Enhanced"
                    : " تعزيز ظهور العلامة التجارية"
                } : <span class="text - gray - 300 italic">${
    caseStudy.outcome.bve
  }</span></p>
              </li >
    <li>
      <p>${
        isEnglishVersion()
          ? "Streamlined Trade Experience"
          : " تجربة تجارية سلسة"
      } : <span class="text-gray-300 italic">${caseStudy.outcome.ste}</span></p>
    </li>
            </ul >
            <hr class="text-gray-500"/>
            <h3 class="h3 text-light-cyan font-semibold">${
              isEnglishVersion()
                ? "TijaraHub in Action"
                : "قصص نجاح من TijaraHub على أرض الواقع"
            } </h3>
            <p class="h4 !leading-[1.5] max-w-[780px] font-bold">
              <q>${caseStudy.quote.text}</q>
              <br />
              <span class="italic flex font-normal text-gray-300">---${
                caseStudy.quote.by
              }</span>
            </p>

            <hr class="text-gray-500"/>
            <h3 class="h3 text-light-cyan font-semibold">${
              isEnglishVersion() ? "Trade Summary" : "ملخص العملية التجارية"
            } </h3>
            <p class="h4 !font-normal !leading-[1.5] max-w-[780px]">
                ${caseStudy.tradeSumm}
            </p>
            </div>
          `;
  caseStudiesContainer.innerHTML = "";
  caseStudiesContainer?.insertAdjacentHTML("beforeend", storyContent);
}

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.get("i")) {
  addContentToPage(searchParams.get("i"));
  // handle toggling lang on single case study page
  let arLink = document.getElementById("ar-lang-link");
  let enLink = document.getElementById("en-lang-link");
  arLink.href = `./case-studyar.html?i=${searchParams.get("i")}`;
  enLink.href = `./case-study.html?i=${searchParams.get("i")}`;
  // isEnglishVersion() ? document.head.querySelector("[rel='canonical']").href = `https://services.tijarahub.com/case-study.html?i=${searchParams.get("i")}` : document.head.querySelector("[rel='canonical']").href = `https://services.tijarahub.com/case-studyar.html?i=${searchParams.get("i")}`
}

services.forEach(({ title, img, services, servicesInfo, desc }, index) => {
  const colIndex = index % 3;

  const card = `
        <div
          data-aos="${
            colIndex === 0
              ? "fade-right"
              : colIndex === 1
              ? "fade-up"
              : "fade-left"
          }"
          class="flex flex-col gap-5 p-6 lg:gap-6 lg:p-10 ${
            colIndex === 1 ? "bg-white/5 backdrop-blur-md" : "ocean-gradient"
          } rounded-3xl"
        >
          <hgroup>
          <h3 class="text-4xl mb-2 max-lg:text-center font-bold capitalize">${title}</h3>
          <p class="max-lg:text-center">${desc}</p>
          </hgroup>
          <div class="py-5">
            <img
              role="img" aria-label="${title}" title="${title}"
              src="${img}"
              alt="${title}"
              class="mx-auto h-[200px]"
            />
          </div>
          <div class="flex-1">
            <div
              class="flex flex-wrap items-center justify-center h-full gap-4 body"
            >
            ${services
              .map(
                (text, i) => `<div class="flex-grow text-sm ${
                  colIndex !== 1 ? "!bg-black/20" : ""
                } stat-card basis-w-1/4">
                <p class="relative group size-full flex items-center justify-center">${text} <span class="absolute text-center duration-300 py-2 px-4 transition-all opacity-0 group-hover:opacity-100 ${
                  isEnglishVersion() ? "start-1/2" : "end-1/2"
                } -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:-translate-y-1/2 group-hover:-top-1/2  text-sm min-h-full w-full rounded-full  bg-dark-blue flex items-center justify-center ">${
                  servicesInfo[i]
                }</span></p>
              </div>`
              )
              .join("")}
              
            </div>
          </div>
        </div>
  
  `;

  servicesContainer?.insertAdjacentHTML("beforeend", card);
});

// Calculate
const planSelect = document.getElementById("plan");
const calculateBtn = document.getElementById("calculate-btn");
const customPlanForm = document.getElementById("custom-plan-form");
const customBuyers = document.getElementById("custom-buyers");
const customSales = document.getElementById("custom-sales");
const customResearch = document.getElementById("custom-research");
const customCampaigns = document.getElementById("custom-campaigns");
const customListings = document.getElementById("custom-listings");

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
    buyers: 12,
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
const traditionalCost = 50000;

let totalBuyersMinMaxTextContent = 10 + " to " + 15 + " / year";

function formatCurrency(amount) {
  return (
    "$" +
    amount.toLocaleString(undefined, {
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
    baseFee + buyersCost + salesCost + campaignsCost + listingsCost / 12;
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
      minOrderValue =
        (minLeadsAvg + minRetetionBuyers + prevRetcount.min) * 5000;
      maxOrderValue =
        (maxLeadsAvg + maxRetetionBuyers + prevRetcount.max) * 50000;
      minRetetionBuyers += prevRetcount.min;
      maxRetetionBuyers += prevRetcount.max;
    }
  }

  return {
    minLeadsAvg,
    maxLeadsAvg,
    minOrderValue,
    maxOrderValue,
    minRetetionBuyers,
    maxRetetionBuyers,
  };
}

function getAllQuarters(planData) {
  let q1 = quarterCalculationByLeads(planData.buyers, true);

  let q2 = quarterCalculationByLeads(planData.buyers, false, {
    min: q1.minRetetionBuyers,
    max: q1.maxRetetionBuyers,
  });

  let q3 = quarterCalculationByLeads(planData.buyers, false, {
    min: q2.minRetetionBuyers,
    max: q2.maxRetetionBuyers,
  });

  let q4 = quarterCalculationByLeads(planData.buyers, false, {
    min: q3.minRetetionBuyers,
    max: q3.maxRetetionBuyers,
  });

  const minCalcObj = {
    q1: Math.ceil(q1.minRetetionBuyers + q1.minLeadsAvg),
    q2: Math.ceil(q2.minRetetionBuyers + q2.minLeadsAvg),
    q3: Math.ceil(q3.minRetetionBuyers + q3.minLeadsAvg),
    q4: Math.ceil(q4.minRetetionBuyers + q4.minLeadsAvg),
  };
  const maxCalcObj = {
    q1: Math.ceil(q1.maxRetetionBuyers + q1.maxLeadsAvg),
    q2: Math.ceil(q2.maxRetetionBuyers + q2.maxLeadsAvg),
    q3: Math.ceil(q3.maxRetetionBuyers + q3.maxLeadsAvg),
    q4: Math.ceil(q4.maxRetetionBuyers + q4.maxLeadsAvg),
  };

  const minTotalBuyers =
    minCalcObj.q1 + minCalcObj.q2 + minCalcObj.q3 + minCalcObj.q4;
  const maxTotalBuyers =
    maxCalcObj.q1 + maxCalcObj.q2 + maxCalcObj.q3 + maxCalcObj.q4;

  let minTotal =
    q1.minOrderValue + q2.minOrderValue + q3.minOrderValue + q4.minOrderValue;
  let maxTotal =
    q1.maxOrderValue + q2.maxOrderValue + q3.maxOrderValue + q4.maxOrderValue;

  //Col Bars
  let q1Col = q1.maxOrderValue;
  let q2Col = q2.maxOrderValue + q2.minOrderValue + q1Col + q1.minOrderValue;
  let q3Col = q3.maxOrderValue + q3.minOrderValue + q2Col;
  let q4Col = q4.maxOrderValue + q4.minOrderValue + q3Col;

  return {
    q1,
    q2,
    q3,
    q4,
    minTotalBuyers,
    maxTotalBuyers,
    minTotal,
    maxTotal,
    q1Col,
    q2Col,
    q3Col,
    q4Col,
  };
}

function updateGrowthChart(planData) {
  if (growthChart) {
    growthChart.destroy();
  }
  const { q1, q2, q3, q4, minTotal, maxTotal, q1Col, q2Col, q3Col, q4Col } =
    getAllQuarters(planData);
  const quarters = isEnglishVersion()
    ? ["Q1", "Q2", "Q3", "Q4"]
    : ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"];
  if (
    window.location.href.includes("index.html") ||
    window.location.href.includes("indexar.html") ||
    window.location.pathname == "/"
  ) {
    growthChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: quarters,
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
            type: "line",
            fill: false,
            borderColor: "rgba(11, 156, 49, 0.7)",
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: "rgba(11, 156, 49, 1)",
            yAxisID: "y1",
            order: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: {
              color: "#f5f5f5",
              display: false,
            },
            position: "right",
            beginAtZero: true,
            title: {
              display: true,
              text: isEnglishVersion() ? "Total Revenue" : "إجمالي الإيرادات",
              color: "#f5f5f5",
            },
            min: minTotal,
            max: maxTotal * 1.1,
            ticks: {
              color: "#f5f5f5",
              callback: (value) => {
                return value.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                });
              },
            },
          },
          y1: {
            beginAtZero: true,
            display: false,
            title: {
              display: true,
              text: "Revenue ($)",
              color: "#f5f5f5",
            },
            grid: {
              drawOnChartArea: false,
              display: false,
            },
            ticks: {
              color: "#f5f5f5", // Set x-axis tick labels color
            },
            min: minTotal,
            max: maxTotal * 1.1,
          },
          x: {
            ticks: {
              color: "#f5f5f5", // Set x-axis tick labels color
            },
            grid: {
              color: "#f5f5f5",
              display: false,
            },
          },
        },
        plugins: {
          title: {
            text: "Annually Growth Rate for " + planData.name,
            font: {
              size: 20,
            },
            color: "#f5f5f5",
          },
          legend: {
            position: "top",
            labels: {
              color: "red",
            },
            display: false,
          },
          tooltip: {
            callbacks: {
              label: () => {
                return "";
              },

              afterBody: function (context) {
                const index = context[0].dataIndex;
                let quarters = [q1, q2, q3, q4];

                return [
                  isEnglishVersion()
                    ? `Min Total Revenue: ${quarters[
                        index
                      ].minOrderValue.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })}`
                    : `الحد الأدنى لإجمالي الإيرادات: ${quarters[
                        index
                      ].minOrderValue.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })}`,
                  isEnglishVersion()
                    ? `Max Total Revenue: ${quarters[
                        index
                      ].maxOrderValue.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })}`
                    : `الحد الأقصى لإجمالي الإيرادات: ${quarters[
                        index
                      ].maxOrderValue.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })}`,
                  isEnglishVersion()
                    ? `Total Buyers: Min: ${Math.ceil(
                        quarters[index].minLeadsAvg +
                          quarters[index].minRetetionBuyers
                      )} Max: ${Math.ceil(
                        quarters[index].maxRetetionBuyers +
                          quarters[index].maxLeadsAvg
                      )}`
                    : `إجمالي المشترين
: الحد الأدنى: ${Math.ceil(
                        quarters[index].minLeadsAvg +
                          quarters[index].minRetetionBuyers
                      )} الحد الأقصى: ${Math.ceil(
                        quarters[index].maxRetetionBuyers +
                          quarters[index].maxLeadsAvg
                      )}`,
                ];
              },
            },
          },
        },
      },
    });
  }
}
const selectedPlan = planSelect?.value;
let planData = { ...plans[selectedPlan] };

updateGrowthChart(planData);

function updateFeaturesDisplay(planData) {
  // Update features display
  document.getElementById("buyers-value").textContent = isEnglishVersion()
    ? planData.buyers + " buyers/month"
    : planData.buyers + " مشترين /شهريًا";

  document.getElementById("sales-value").textContent = isEnglishVersion()
    ? planData.sales + " sale" + (planData.sales !== 1 ? "s" : "") + "/month"
    : planData.sales + " " + "موظف مبيعات /شهريًا";
  document.getElementById("research-value").textContent = isEnglishVersion()
    ? planData.research + " /year"
    : planData.research + " /سنويًا";
  document.getElementById("campaigns-value").textContent = isEnglishVersion()
    ? planData.campaigns + " /month"
    : planData.campaigns + " /شهريًا";
  document.getElementById("listings-value").textContent = isEnglishVersion()
    ? planData.listings + " products"
    : planData.listings + " منتجًا";
}

function updateCostDisplay(planData) {
  // Update cost display
  document.getElementById("monthly-cost").textContent = formatCurrency(
    planData.monthlyCost
  );
  document.getElementById("annual-cost").textContent = formatCurrency(
    planData.annualCost
  );
}
// Event listeners
calculateBtn?.addEventListener("click", () => {
  let annualsavings = document.getElementById("savings-box");
  const selectedPlan = planSelect.value;
  // Clone plan data
  let planData = { ...plans[selectedPlan] };

  // Update features display
  updateFeaturesDisplay(planData);

  // Update cost display
  updateCostDisplay(planData);

  // Check for Custom Plan
  if (customPlanForm.classList.contains("container-active")) {
    planData = { ...planData, ...calculateCustomPlanCost() };
    updateCostDisplay(planData);
  } else {
    annualsavings.style.display = "block";
  }
  // Calculate savings
  const savings = traditionalCost - planData.annualCost;

  //Update Leads/Buyers Table
  const { minTotalBuyers, maxTotalBuyers } = getAllQuarters(planData);
  const totalLeadsTextContent = isEnglishVersion()
    ? planData.buyers * 12 + " / year"
    : planData.buyers * 12 + " / سنويًا";
  totalBuyersMinMaxTextContent = "";
  totalBuyersMinMaxTextContent = isEnglishVersion()
    ? minTotalBuyers + " to " + maxTotalBuyers + " / year"
    : minTotalBuyers + " إلى " + maxTotalBuyers + " / سنويًا";
  document.getElementById("Potential-Leeds").textContent =
    totalLeadsTextContent;
  document.getElementById("savings").textContent = formatCurrency(savings);
  document.getElementById("total-an-buyers").textContent =
    totalBuyersMinMaxTextContent;

  updateGrowthChart(planData);
});
planSelect?.addEventListener("change", (e) => {
  const selectedPlan = e.target.value;
  let planData = { ...plans[selectedPlan] };

  updateFeaturesDisplay(planData);
  let features_table = document.querySelector(".features-table");
  let features_title = document.querySelector(".features-title");
  let annualsavings = document.getElementById("savings-box");
  // Show Hide Custom Plan Select
  if (e.currentTarget.value === "custom") {
    customPlanForm.classList.add("container-active");
    features_title.style.display = "none";
    features_table.style.display = "none";
    annualsavings.style.display = "none";
    planData = { ...planData, ...calculateCustomPlanCost() };
  } else {
    customPlanForm.classList.remove("container-active");
    features_title.style.display = "flex";
    features_table.style.display = "flex";
  }
});

// Listen to custom plan input changes
customBuyers?.addEventListener("change", function (e) {
  planData = { ...planData, ...calculateCustomPlanCost() };
});

const imgModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeModal");

// Bind click events to all popup images
document?.querySelectorAll(".popup-img").forEach((img) => {
  img.addEventListener("click", () => {
    const src = img.getAttribute("data-src");
    modalImage.src = src;
    imgModal.classList.remove("hidden");
    imgModal.classList.add("flex");
    modalImage.role = "img";
    modalImage.ariaLabel = isEnglishVersion() ? "goods" : "البضائع";
    modalImage.title = isEnglishVersion() ? "products" : "المنتجات";
    document.body.style.overflowY = "hidden";
  });
});

// Close logic
closeBtn?.addEventListener("click", () => {
  imgModal.classList.add("hidden");
  imgModal.classList.remove("flex");
  document.body.style.overflowY = "auto";
});

imgModal?.addEventListener("click", (e) => {
  if (e.target === imgModal) {
    imgModal.classList.add("hidden");
    imgModal.classList.remove("flex");
    document.body.style.overflowY = "auto";
  }
});

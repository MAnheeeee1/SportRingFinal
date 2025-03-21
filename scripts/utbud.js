const erbjudandeData = {
  hockey: {
    title: "Hockey Utrustning",
    description:
      "Upptäck vårt breda sortiment av hockeyutrustning från ledande märken. Vi erbjuder allt från skridskor till klubbor och skydd, perfekt för både nybörjare och erfarna spelare. Med fokus på kvalitet och prestanda har vi noggrant valt ut produkter som möter kraven för både träning och match.",
    image: "../img/utbud/hockey.jpg",
    erbjudande: {
      product: "CCM Super Tacks",
      productInfo:
        "Toppmodell av hockeyskridskor med avancerat värmeanpassat passformssystem, kolfiberkomposit konstruktion och SpeedBlade XS-hållare för maximal kraftöverföring och rörlighet på isen. Perfekt för elitspelare som söker premium prestanda.",
      previousPrice: 3500,
      salePrice: 2499,
      productImg: "../img/utbud/hockeyKlubba.jpg",
    },
    stats: {
      products: "150+",
      brands: "12",
      discount: "Upp till 40%",
    },
  },
  running: {
    title: "Löpning & Jogging",
    description:
      "Hitta den perfekta utrustningen för din löpning. Vi har ett stort utbud av skor, kläder och tillbehör som hjälper dig att nå dina träningsmål. Från lätta tävlingsskor till stabila träningsskor, och från andningsbar löparklädsel till smarta tillbehör - allt för att optimera din löpupplevelse.",
    image: "../img/utbud/löpning.jpg",
    erbjudande: {
      product: "Nike Air Zoom Pegasus",
      productInfo:
        "Legendariska löparskor med React skumteknologi för responsiv stötdämpning, andningsbart meshmaterial och Zoom Air-enheter i framfot och häl. Mångsidiga nog för daglig träning och långdistanslöpning, med utmärkt hållbarhet och komfort.",
      previousPrice: 1200,
      salePrice: 899,
      productImg: "../img/utbud/pegasusNike.jpg",
    },
    stats: {
      products: "200+",
      brands: "15",
      discount: "Upp till 30%",
    },
  },
  swimming: {
    title: "Simning",
    description:
      "Dyk in i vårt sortiment av simutrustning. Från tävlingsdräkter till träningsaccessoarer, vi har allt du behöver för att förbättra din simning. Vi erbjuder högkvalitativ utrustning för både motionssimmare och tävlingsatleter, med fokus på prestanda och hållbarhet i vattnet.",
    image: "../img/utbud/simning.jpg",
    erbjudande: {
      product: "Speedo Fastskin",
      productInfo:
        "Elit-tävlingsdräkt utvecklad med avancerad kompressionsteknologi och vattenavvisande material. Har anatomisk passform, reducerad vattenmotståndsdesign och klortåligt material. Godkänd för FINA-tävlingar och perfekt för seriösa simmare som söker optimal prestanda.",
      previousPrice: 800,
      salePrice: 599,
      productImg: "../img/utbud/speedo.jpg",
    },
    stats: {
      products: "100+",
      brands: "8",
      discount: "Upp till 25%",
    },
  },
  hiking: {
    title: "Vandring & Outdoor",
    description:
      "Utforska naturen med rätt utrustning. Vi erbjuder kvalitetsprodukter för alla typer av äventyr, från dagsvandringar till längre expeditioner. Vårt sortiment omfattar vattentäta kängor, tekniska kläder, och praktisk utrustning som ryggsäckar och vandringsstavar - allt du behöver för en säker och bekväm naturupplevelse.",
    image: "../img/utbud/vandring.jpg",
    erbjudande: {
      product: "Salomon X Ultra 3",
      productInfo:
        "Avancerade vandringsskor som kombinerar löparskonas smidighet med vandringskängans stöd. Utrustade med Gore-Tex vattentätt skydd, SensiFit system för precis passform, Contagrip® yttersula för överlägset grepp på varierande terräng, och skyddande tåhätta. Perfekt för teknisk vandring och heldagskomfort.",
      previousPrice: 1500,
      salePrice: 1199,
      productImg: "../img/utbud/salomon.jpg",
    },
    stats: {
      products: "180+",
      brands: "10",
      discount: "Upp till 35%",
    },
  },
};

const erbjudandeKontent = document.querySelector(".deals-content");
const kategoriKnappar = document.querySelectorAll(".category-btn");

function showDeals(category) {
  kategoriKnappar.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  erbjudandeKontent.classList.remove("visible");

  setTimeout(() => {
    erbjudandeKontent.innerHTML = "";

    const categoryData = erbjudandeData[category];
    const section = document.createElement("div");
    section.className = "category-section";

    // Calculate discount percentage
    const discountPercentage = Math.round(
      ((categoryData.erbjudande.previousPrice -
        categoryData.erbjudande.salePrice) /
        categoryData.erbjudande.previousPrice) *
        100
    );

    section.innerHTML = `
          <div class="category-info">
            <h2>${categoryData.title}</h2>
            <p>${categoryData.description}</p>
            <div class="category-stats">
              <div class="stat-item">
                <h4>${categoryData.stats.products}</h4>
                <p>Produkter</p>
              </div>
              <div class="stat-item">
                <h4>${categoryData.stats.brands}</h4>
                <p>Varumärken</p>
              </div>
              <div class="stat-item">
                <h4>${categoryData.stats.discount}</h4>
                <p>Rabatt</p>
              </div>
            </div>
          </div>
          <div class="utbudErbjudande">
              <div class="discount-badge">-${discountPercentage}%</div>
              <h1>Crazy Deal</h1>
              <h2>${categoryData.erbjudande.product}</h2>
              <img class="utbudErbjudande-img" src="${categoryData.erbjudande.productImg}" alt="${categoryData.erbjudande.product}">    
              <p>${categoryData.erbjudande.productInfo}</p>
              <div class="utbudErjbudande-Priser">
                <h3 class="line-through">${categoryData.erbjudande.previousPrice} kr</h3>
                <h3>${categoryData.erbjudande.salePrice} kr</h3>
              </div>   
          </div>
      `;

    erbjudandeKontent.appendChild(section);

    erbjudandeKontent.classList.add("visible");
  }, 300);
}

kategoriKnappar.forEach((button) => {
  button.addEventListener("click", (e) => {
    showDeals(e.target.dataset.category);
  });
});

showDeals("hockey");

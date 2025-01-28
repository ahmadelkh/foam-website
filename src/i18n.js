import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to FomaLux!",
      tagline: "Premium Foam Solutions.",
      subtitle: "Your Comfort, Our Priority!",
      subsubtitle: "Experience the ultimate blend of comfort and innovation.",
      explore: "Explore Now",
      catalogue: "Catalogue",
      contactUs: "Contact Us",
      foamziAI: "FOAMZI AI",
      // Popular Products Section
      popularProducts: "Popular Products",
      exploreFoamSolutions: "Explore Our Foam Solutions",
      luxuryFoamMattresses: "Luxury Foam Mattresses",
      comfortDurabilitySupport: "Comfort | Durability | Support",
      mattressesDescription:
        "Our foam mattresses provide unparalleled support, ensuring a restful and refreshing sleep experience.",
      foamForSofas: "Foam for Sofas",
      customSizesSoftnessQuality: "Custom Sizes | Softness | Quality",
      sofasDescription:
        "Enhance the comfort of your living room with our premium sofa foam, tailored to meet your needs.",
      adaptabilityPressureRelief: "Adaptability | Pressure Relief",
      memoryFoamBenefits:
        "Discover the benefits of memory foam with its unique ability to adapt and provide unmatched comfort.",
      // About Us Section
      ourJourneyToComfort: "OUR JOURNEY TO COMFORT",
      aboutUs: "About Us",
      yourComfortPriority:"yourComfortPriority",
      aboutUsDescription1:
        "FomaLux is dedicated to redefining comfort and quality. With a passion for innovative foam solutions, we aim to provide products that enhance the way you relax and sleep. Every step of our journey is driven by a commitment to craftsmanship, sustainability, and creating experiences that exceed customer expectations.",
      aboutUsDescription2:
        "At FomaLux, your satisfaction is at the heart of everything we do. We meticulously design our foam products to meet the highest standards of durability, comfort, and style. From luxurious mattresses to tailored foam solutions, your comfort is our ultimate goal.",
      ourTeamOfExperts: "Our Team of Experts",
      teamDescription:
        "Our team is composed of skilled professionals who bring years of expertise to create innovative foam solutions. Together, we are driven by a shared mission to deliver excellence and redefine relaxation for our customers worldwide.",
      // Counters Section
      happyClients: "Happy Clients",
      yearsOfExperience: "Years of Experience",
      ordersCompleted: "Orders Completed",
      ourBranches: "Our Branches",
      footerDescription:
      "Blending innovation and craftsmanship to redefine comfort, FomaLux delivers premium foam solutions tailored to enhance your lifestyle. From luxurious mattresses to custom foam designs, we prioritize quality and sustainability to provide products that support, comfort, and inspire. At FomaLux, your relaxation is our innovation.",
    
    email: "Email",
    phone: "Phone",
    address: "Address",
    allRightsReserved: "All Rights Reserved.",
    memoryFoamProducts: "memoryFoamProducts",
    industries_subtitle: "INDUSTRIES WE SERVE",
    industries_title: "Redefining Comfort Across Domains",
    industries_description:
      "At FomaLux, we deliver premium foam solutions tailored for diverse industries, ensuring comfort, durability, and innovation in every product.",
    mattress: "Mattress Manufacturing",
    furniture: "Furniture Upholstery",
    construction: "Construction & Insulation",
    logistics: "Logistics & Packaging",
    eco_friendly: "Eco-Friendly Solutions",
    warehouse: "Warehouse Storage",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue chez FomaLux!",
      tagline: "Leger comme une plume.",
      subtitle: "Votre confort, notre priorité!",
      subsubtitle:"Découvrez le parfait mélange de confort et d'innovation.",
      explore: "Explorer maintenant",
      catalogue: "Catalogue",
      contactUs: "Nous contacter",
      foamziAI: "FOAMZI AI",
      // Popular Products Section
      popularProducts: "Produits populaires",
      exploreFoamSolutions: "Découvrez nos solutions en mousse",
      luxuryFoamMattresses: "Matelas en mousse de luxe",
      comfortDurabilitySupport: "Confort | Durabilité | Soutien",
      mattressesDescription:
        "Nos matelas en mousse offrent un soutien inégalé, garantissant une expérience de sommeil reposante et rafraîchissante.",
      foamForSofas: "Mousse pour canapés",
      customSizesSoftnessQuality: "Tailles personnalisées | Douceur | Qualité",
      sofasDescription:
        "Améliorez le confort de votre salon avec notre mousse de canapé premium, adaptée à vos besoins.",
      adaptabilityPressureRelief: "Adaptabilité | Soulagement de la pression",
      memoryFoamBenefits:
        "Découvrez les avantages de la mousse à mémoire avec sa capacité unique à s'adapter et à offrir un confort inégalé.",
      // About Us Section
      ourJourneyToComfort: "NOTRE PARCOURS VERS LE CONFORT",
      aboutUs: "À propos de nous",
      yourComfortPriority: "Votre Confort notre priorité",
      aboutUsDescription1:
        "FoamLux est dédié à redéfinir le confort et la qualité. Avec une passion pour les solutions en mousse innovantes, nous visons à offrir des produits qui améliorent la façon dont vous vous détendez et dormez. Chaque étape de notre parcours est guidée par un engagement envers l'artisanat, la durabilité et la création d'expériences qui dépassent les attentes des clients.",
      aboutUsDescription2:
        "Chez FoamLux, votre satisfaction est au cœur de tout ce que nous faisons. Nous concevons méticuleusement nos produits en mousse pour répondre aux normes les plus élevées de durabilité, de confort et de style. Des matelas luxueux aux solutions en mousse sur mesure, votre confort est notre objectif ultime.",
      ourTeamOfExperts: "Notre équipe d'experts",
      teamDescription:
        "Notre équipe est composée de professionnels qualifiés qui apportent des années d'expertise pour créer des solutions en mousse innovantes. Ensemble, nous sommes animés par une mission commune : offrir l'excellence et redéfinir la relaxation pour nos clients dans le monde entier.",
      // Counters Section
      happyClients: "Clients satisfaits",
      yearsOfExperience: "Années d'expérience",
      ordersCompleted: "Commandes terminées",
      ourBranches: "Nos succursales",
      footerDescription:
      "Fusionnant innovation et savoir-faire pour redéfinir le confort, FoamLux propose des solutions en mousse premium adaptées à votre style de vie. Des matelas luxueux aux conceptions sur mesure, nous priorisons la qualité et la durabilité pour offrir des produits qui soutiennent, confortent et inspirent. Chez FoamLux, votre relaxation est notre innovation.",
      email: "E-mail",
      phone: "Téléphone",
      address: "Adresse",
      allRightsReserved: "Tous droits réservés.",
      industries_subtitle: "LES INDUSTRIES QUE NOUS SERVONS",
        industries_title: "Redéfinir le confort à travers les domaines",
        industries_description:
          "Chez FomaLux, nous proposons des solutions en mousse de qualité supérieure adaptées à diverses industries, garantissant confort, durabilité et innovation dans chaque produit.",
        mattress: "Fabrication de matelas",
        furniture: "Rembourrage de meubles",
        construction: "Construction & Isolation",
        logistics: "Logistique & Emballage",
        eco_friendly: "Solutions Écologiques",
        warehouse: "Stockage en Entrepôt",
     
     },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;

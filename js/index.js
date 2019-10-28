const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//NAV STUFF
let nav = document.getElementsByTagName('a');
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

// Call to action Stuff
let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];
let ctaButt = document.querySelector(".cta-text button");
ctaButt.textContent = siteContent["cta"]["button"];

//CTA image
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])


//Main Content

//Top Content
let featuresh4 = document.querySelector('.top-content .text-content h4');
featuresh4.textContent = siteContent["main-content"]["features-h4"];
let featuresp = document.querySelector('.top-content .text-content p');
featuresp.textContent = siteContent["main-content"]["features-content"];
let abouth4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
abouth4.textContent = siteContent["main-content"]["about-h4"];
let aboutp = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutp.textContent = siteContent["main-content"]["about-content"];



// Main content middle banner image
let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Bottom content
let servicesh4 = document.querySelector('.bottom-content .text-content h4');
servicesh4.textContent = siteContent["main-content"]["services-h4"];
let servicesp = document.querySelector('.bottom-content .text-content p');
servicesp.textContent = siteContent["main-content"]["services-content"];
let producth4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
producth4.textContent = siteContent["main-content"]["product-h4"];
let productp = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productp.textContent = siteContent["main-content"]["product-content"];
let visionh4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionh4.textContent = siteContent["main-content"]["vision-h4"];
let visionp = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionp.textContent = siteContent["main-content"]["vision-content"];


//contact section
let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent["contact"]["contact-h4"];

let contactp1 = document.querySelector('.contact p:nth-of-type(1)');
contactp1.textContent = siteContent["contact"]["address"];
let contactp2 = document.querySelector('.contact p:nth-of-type(2)');
contactp2.textContent = siteContent["contact"]["phone"];
let contactp3 = document.querySelector('.contact p:nth-of-type(3)');
contactp3.textContent = siteContent["contact"]["email"];

//footer section
let footerp = document.querySelector('footer p');
footerp.textContent = siteContent["footer"]["copyright"];




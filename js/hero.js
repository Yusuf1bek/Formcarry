let elHero = document.querySelector(".hero-section")

let elContainerHero = document.createElement("div")
elContainerHero.classList.add("container")

let elHeroContent = document.createElement("div");
elHeroContent.classList.add("hero-content");

let elSpanTitle = document.createElement("span")
elSpanTitle.classList.add("hero-span-title")
elSpanTitle.textContent = "COLLECT FORM SUBMISSIONS"

let elHeroTitle = document.createElement("h1");
elHeroTitle.classList.add("hero-title");
elHeroTitle.textContent = "Get emails and messages from your HTML form";

let elHeroText = document.createElement("p");
elHeroText.classList.add("hero-text");
elHeroText.textContent = "Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps.";

let elBtns = document.createElement("div");
elBtns.classList.add("hero-buttons-wrapper");

let elHeroBtn1 = document.createElement("a");
elHeroBtn1.classList.add("hero-try-btn");
elHeroBtn1.href = "/";
elHeroBtn1.textContent = "Get Started";





elHero.appendChild(elContainerHero);
elContainerHero.appendChild(elHeroContent);
elHeroContent.append(elSpanTitle, elHeroTitle, elHeroText, elBtns);
elBtns.appendChild(elHeroBtn1);
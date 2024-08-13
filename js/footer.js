let elFooter = document.querySelector(".site-footer")

let elContainerFooter = document.createElement("div")
let elFooterInner = document.createElement("div")

let elFooterStrongWrapper =document.createElement("div")
let elFooterStrongFirst = document.createElement("strong")  
let elFooterStrongSecond = document.createElement("strong")
let elFooterStrongThird = document.createElement("strong")

let elFooterIconWrapper = document.createElement("div")
let elFooterIconFirst = document.createElement("img")
let elFooterIconSecond = document.createElement("img")
let elFooterIconThird = document.createElement("img")

elContainerFooter.classList.add("container")
elFooterInner.classList.add("footer")

elFooterStrongWrapper.classList.add("footer__strong-warpper")

elFooterStrongFirst.classList.add("footer__strong")
elFooterStrongFirst.textContent = "formcarry. all rights reserved"

elFooterStrongSecond.classList.add("footer__strong")
elFooterStrongSecond.textContent = "Terms of Service"

elFooterStrongThird.classList.add("footer__strong")
elFooterStrongThird.textContent = "Privacy Policy"


elFooterIconWrapper.classList.add("footer__icon-wrapper")

elFooterIconFirst.classList.add("footer__icon-first")
elFooterIconFirst.src = "./images/icon-first.svg"
elFooterIconFirst.width = "32"
elFooterIconFirst.height = "32"
elFooterIconFirst.alt = "Footer - Icon"

elFooterIconSecond.classList.add("footer__icon-second")
elFooterIconSecond.src = "./images/icon-second.svg"
elFooterIconSecond.width = "32"
elFooterIconSecond.height = "32"
elFooterIconSecond.alt = "Footer - Icon"

elFooterIconThird.classList.add("footer__icon-third")
elFooterIconThird.src = "./images/icon-third.svg"
elFooterIconThird.width = "32"
elFooterIconThird.height = "32"
elFooterIconThird.alt = "Footer - Icon"


elFooter.appendChild(elContainerFooter)
elContainerFooter.append(elFooterInner)
elFooterInner.appendChild(elFooterStrongWrapper)
elFooterStrongWrapper.append(elFooterStrongFirst,elFooterStrongSecond,elFooterStrongThird,elFooterIconWrapper)
elFooterIconWrapper.append(elFooterIconFirst,elFooterIconSecond,elFooterIconThird)

    
let navbarItems = [ "FAQ", "Docs", "Integrations", "Pricing",]


let elHeader = document.querySelector(".site-header")
let elContainer = document.createElement("div")
let elHeaderInner = document.createElement("div")
let elLogoLink = document.createElement("a")
let elLogoImg = document.createElement("img")

let elHeaderList = document.createElement("ul")
let elHeaderBtnWrapper = document.createElement("div")
let elLoginBtn = document.createElement("a")
let elSignUpnBtn = document.createElement("a")


elContainer.classList.add("container")
elHeaderInner.classList.add("header")

elLogoLink.classList.add("header__logo-link")
elLogoLink.href = "/"

elLogoImg.classList.add("header__logo-img")
elLogoImg.src = "./images/formcarry..svg"
elLogoImg.width = "157"
elLogoImg.height = "24"
elLogoImg.alt = "Site Logo"

elHeaderList.classList.add("header__list")

elHeaderBtnWrapper.classList.add("header__btn-wrapper")
elLoginBtn.classList.add("header__login-btn")
elLoginBtn.href = "/"
elLoginBtn.textContent = "Login"

elSignUpnBtn.classList.add("header__sign-up-btn")
elSignUpnBtn.href = "/"
elSignUpnBtn.textContent = "Sign up"

navbarItems.forEach(item => {
        let elHeaderItem = document.createElement("li")
    let elHeaderItemLink = document.createElement("a")

    elHeaderItem.classList.add("header__item")
    elHeaderItemLink.classList.add("header__item-link")
    elHeaderItemLink.href = "/"
    elHeaderItemLink.textContent = item

    elHeaderList.appendChild(elHeaderItem)
    elHeaderItem.appendChild(elHeaderItemLink)
})

elHeader.appendChild(elContainer)
elContainer.appendChild(elHeaderInner)
elHeaderInner.append(elLogoLink,elHeaderList,elHeaderBtnWrapper)
elHeaderBtnWrapper.append(elLoginBtn,elSignUpnBtn)
elLogoLink.appendChild(elLogoImg)
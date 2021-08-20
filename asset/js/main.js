import { OPENING } from "./literal.js"

function changeFadeTarget(fadeImgs){
  fadeImgs.some((img, idx) => {
    if (img.classList.contains('active')) {
      const target = idx === fadeImgs.length - 1 ? 0 : idx + 1

      img.classList.remove('active');
      fadeImgs[target].classList.add('active')
      return true
    }
  })
}

function fadeOpeningBackground(){
  setInterval(() => {
    const fadeImgs = Array.from(document.querySelectorAll('.fade-img'))
    changeFadeTarget(fadeImgs)
  }, 3500);
}

function tpyingOpeingDescription(chars){
  const description = document.querySelector(".title-container .description")
  const ch = chars.shift();
  description.innerHTML += ch.charCodeAt() === 10 ? '<br/>' : ch
}

function typingOpeingTitle(){
  const boldDesc = document.querySelector(".title-container .blod-description");
  boldDesc.innerText = OPENING.STRONG;
  boldDesc.classList.add('show');

  const title = document.querySelector(".title-container .title");
  title.innerText = OPENING.TITLE;
  title.classList.add('toBig');
}

function playOpeingText(){
  const text = OPENING.DESCRIPTION;
  const chars = text.split("");

  const intervalID = setInterval(() => {
    if (chars.length > 0) {
      tpyingOpeingDescription(chars)
    } else {
      clearInterval(intervalID);
      
      typingOpeingTitle()
      playArrow()
    }
  }, 80);
}

function playArrow(){
  setTimeout(() => {
    document.querySelector(".title-arrow").style.display = "block";
  }, 1000);
}

// HEADER MENU
function clickHeader(){
  const header = document.querySelector('.sticky-header');
  const menus = document.querySelectorAll('.menu')

  header.addEventListener('click', (e) => {
    menus.forEach(menu => menu.classList.remove('click'))
    e.target.parentNode.classList.toggle('click')
  })
}

// scroll contact
function scrollToggleContact(){
  document.addEventListener("scroll", () => {
    const contact = document.querySelector(".contact-container");
    window.scrollY > 200 ? showContact(contact) : hideContact(contact)
  });  
}

function showContact(contact){
  contact.classList.remove('hidden')
  contact.classList.add('show')
}

function hideContact(contact){
  if(contact.classList.contains('show')){
    contact.classList.remove('show')
    contact.classList.add('hidden')
  }
}

function clickInfoGrid(){
  const infoGird = document.querySelector('.info-grid')

  infoGird.addEventListener('click', ({target})=> {
    if(target.classList.contains("info-grid")) return;
    
    const {dataset : { col }} = target.nodeName === 'H2' ? target.parentNode : target
    showPopup(col)
  })
}

function showPopup(targetId){
  const popUpSection = document.querySelector('.section-popup')
  popUpSection.style.display = 'block';

  const popupContent = document.querySelectorAll('.popup-content')[targetId - 1]
  popupContent.classList.remove('none')
}

function closePopup(){
  const popUpSection = document.querySelector('.section-popup')
  const popUpClose = document.querySelector('.popup-close')
  const answers = document.querySelectorAll('.answer')

  popUpClose.addEventListener('click', (e) => {    
    answers.forEach(answer => answer.className = 'answer none')

    const popupContent = document.querySelector('[class="popup-content"]')
    popupContent.classList.add('none')

    popUpSection.style.display = 'none';
    
  })
}

function rollupQuestion(){
  const questionBoxes = document.querySelectorAll('.question-box')
  const answers = document.querySelectorAll('.answer')
  
  questionBoxes.forEach((questionBox) => {
    questionBox.addEventListener('click', (e) => {
      answers.forEach(answer => answer.classList.add('rollup'))
      answers[e.currentTarget.dataset.idx].classList.remove('none')
      answers[e.currentTarget.dataset.idx].classList.remove('rollup')
      answers[e.currentTarget.dataset.idx].classList.add('rolldown')
    })
  })
}

export { playOpeingText, fadeOpeningBackground, playArrow, clickHeader, scrollToggleContact, clickInfoGrid, closePopup, rollupQuestion }
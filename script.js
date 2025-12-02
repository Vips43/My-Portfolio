import { projectsData } from "./data.js";

let hireMeBtn = document.querySelector('.hire-me')
let alertMsg = document.querySelector('.alert-msg')
hireMeBtn.addEventListener('click', () => {
  alertMsg.style.opacity = '1'
  setTimeout(() => {
    alertMsg.style.opacity = '0'
  }, 2000);
})

//adding scroll animation
const about1 = document.querySelector('.about:nth-child(1)')
const about2 = document.querySelector('.about:nth-child(2)')
const skills = document.querySelectorAll(".skills .skill");
const contactsMeP = document.querySelector('.contacts-me p')
const contactsMeH2 = document.querySelector('.contacts-me h2')
const contactMe = document.querySelector('.contact-me')
const number = document.querySelector('.number')
const aboutImg = document.querySelector('.about-img')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove("show")
    }

  })
}, {
  rootMargin: '-80px',
  threshold: 0
})

skills.forEach(e => observer.observe(e))

const arr = [contactsMeP, contactsMeH2, contactMe, number, aboutImg, about1, about2]
arr.forEach(e => observer.observe(e))

const projectLi = document.querySelectorAll('.project-li')
projectLi.forEach(el => observer.observe(el))


// projects section

const projectsUl = document.querySelector('.projects-ul')
document.addEventListener("DOMContentLoaded", () => {
  addProjects()
})
function addProjects() {
  projectsData.forEach((data) => {
    const li = document.createElement('li')
    li.classList.add('project-li')
    li.innerHTML = `
          <span>${data.name} </span>
          <ul class="child-ul">
              <li class="child-li">
                  ${data.desc}
              </li>
              <li class="child-li img">
                  <img src=${data.img} alt="">
              </li>
              <li class="child-li button">
                  <button><a href="${data.github}">Github</a></button>
                  <button><a href="${data.demo}" target="_blank">Use
                          Demo</a></button>
              </li>
          </ul>
                `
    projectsUl.append(li)
    observer.observe(li)

  })
}
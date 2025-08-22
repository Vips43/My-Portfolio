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
  rootMargin: '-80px'
})

skills.forEach(e => observer.observe(e))

const arr = [contactsMeP, contactsMeH2, contactMe, number, aboutImg, about1, about2]
arr.forEach(e => observer.observe(e))

const projectLi = document.querySelectorAll('.project-li')
projectLi.forEach(el => observer.observe(el))

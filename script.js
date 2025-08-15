let hireMeBtn = document.querySelector('.hire-me')
let alertMsg = document.querySelector('.alert-msg')
let about = document.querySelector('.about')

hireMeBtn.addEventListener('click',()=>{
    alertMsg.style.opacity = '1'
    setTimeout(() => {
        alertMsg.style.opacity = '0'
    }, 2000);

    
})

// skills section design

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".skills .skill");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
    }, { threshold: 0.1 });
    cards.forEach(c => io.observe(c));
  });

// design about-us section

// gsap.from('.subtitle',{
//     y:-50,
//     scale:0,
//     opacity:0,
//     duration:1,
// })
// gsap.from('.title-span',{
//     x:50,
//     color:"grey",
//     duration:2,
// })
gsap.from('.skills-container .skills', {
    scale: 0,
    opacity:0,
    y: -30,
    delay: .5,
    markers: true,
    // start: 'top 55%',
    // end: 'bottom 40px',
    duration: 1,
    scrollTrigger: {
        trigger: '.skills-container .skills',
        scroller: 'body',
        start: 'top 55%',
        end: 'top 40%',
        scrub: 2,
        pin:true
    }
})
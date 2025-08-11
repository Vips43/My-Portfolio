let hireMeBtn = document.querySelector('.hire-me')

hireMeBtn.addEventListener('click',()=>{
    let span = document.createElement('span')
    span.textContent = `Sent massage to VIPUL GEHLOT Thanks for Giving Opportunity`
    hireMeBtn.appendChild(span)
    setTimeout(() => {
        span.remove()
    }, 2000);
})
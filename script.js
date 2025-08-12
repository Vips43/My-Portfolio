let hireMeBtn = document.querySelector('.hire-me')
let alertMsg = document.querySelector('.alert-msg')
let about = document.querySelector('.about')

hireMeBtn.addEventListener('click',()=>{
    alertMsg.style.opacity = '1'
    setTimeout(() => {
        alertMsg.style.opacity = '0'
    }, 2000);

    
})

// design about-us section


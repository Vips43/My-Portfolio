let hireMeBtn = document.querySelector('.hire-me')
let alertMsg = document.querySelector('.alert-msg')

hireMeBtn.addEventListener('click',()=>{
    alertMsg.style.opacity = '1'
    setTimeout(() => {
        alertMsg.style.opacity = '0'
    }, 2000);

    
})

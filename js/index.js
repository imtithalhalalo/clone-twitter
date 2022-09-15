const popup_sign_up = this.document.getElementById('pop-sign-up')

const open_sign_up = this.document.getElementById('open-sign-up')

const close_sign_up = this.document.getElementById('close-sign-up')

const container = this.document.getElementById('con')
const openPopupSignUp = () => {
    popup_sign_up.classList.add('open-popup')
    container.classList.add('grey-fade-over')
}

open_sign_up.addEventListener('click', openPopupSignUp)


const closePopupSignUp = () => {
        popup_sign_up.classList.remove('open-popup')
        container.classList.remove('grey-fade-over')
}

close_sign_up.addEventListener('click', closePopupSignUp)

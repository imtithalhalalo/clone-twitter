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

var month_box = document.getElementById('month_box')
var days_box = document.getElementById('days_box')
var years_box = document.getElementById('years_box')

//months dropdown
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

for (var i = 0; i < month.length; i++){
    month_box.options.add(new Option(month[i]))
}

//days dropdown
for (var i = 1; i <= 31; i++){
    days_box.options.add(new Option(i))
} 

//years dropdown
for (var i = 2022; i >= 1902 ; i--){
    years_box.options.add(new Option(i))
} 

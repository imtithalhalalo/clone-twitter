const popup_sign_up = this.document.getElementById('pop-sign-up')
const popup_sign_in = this.document.getElementById('pop-sign-in')

const open_sign_up = this.document.getElementById('open-sign-up')
const open_sign_in = this.document.getElementById('open-sign-in')

const close_sign_up = this.document.getElementById('close-sign-up')
const close_sign_in = this.document.getElementById('close-sign-in')

const container = this.document.getElementById('con')

// open popup sign up & sign in
const openPopupSignUp = () => {
    popup_sign_up.classList.add('open-popup')
    container.classList.add('grey-fade-over')
}

const openPopupSignIn = () => {
    popup_sign_in.classList.add('open-popup')
    container.classList.add('grey-fade-over')
}
open_sign_up.addEventListener('click', openPopupSignUp)
open_sign_in .addEventListener('click', openPopupSignIn)


//close popup sign up & sign in
const closePopupSignUp = () => {
    popup_sign_up.classList.remove('open-popup')
    container.classList.remove('grey-fade-over')
}

const closePopupSignIn = () => {
    popup_sign_in.classList.remove('open-popup')
    container.classList.remove('grey-fade-over')
}

close_sign_up.addEventListener('click', closePopupSignUp)
close_sign_in.addEventListener('click', closePopupSignIn)


const month_box = document.getElementById('month_box')
const days_box = document.getElementById('days_box')
const years_box = document.getElementById('years_box')

//months dropdown
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

for (let i of month){
    month_box.options.add(new Option(i))
}

//days dropdown
for (let i = 1; i <= 31; i++){
    days_box.options.add(new Option(i))
} 

//years dropdown
for (let i = 2022; i >= 1902 ; i--){
    years_box.options.add(new Option(i))
} 

const createBtn=document.getElementById("close");
const fullname=document.getElementById("name");
const password=document.getElementById("password");
const email=document.getElementById("email");
const genderSelect =document.querySelectorAll('input[name="gender"]');      
let gender;


const getGender = () => { 
    for(i = 0; i < genderSelect.length; i++) {
        if(genderSelect[i].checked){
            gender=genderSelect[i];
        }
    }
}

const signUp=(e)=>{
    getGender();
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", fullname.value);
    formData.append("password", password.value);
    formData.append("email", email.value);
    formData.append("month", month_box.value);
    formData.append("date", days_box.value);
    formData.append("year", years_box.value);
    formData.append("gender", gender.value);
    fetch(`http://localhost/clone-twitter/backend/signup.php `, {
        method: 'POST',
        body: formData
    });
    popup_sign_up.classList.remove('open-popup')
}
createBtn.addEventListener("click",signUp);


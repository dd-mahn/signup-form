const pwd = document.querySelector('#pwd')
const cf_pwd = document.querySelector('#cf-pwd')
const Fname = document.querySelector('#first-name')
const Lname = document.querySelector('#last-name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const inputS = document.querySelectorAll('input')
const messageS = document.querySelectorAll('input+span')

cf_pwd.addEventListener('keyup', () => {
if(cf_pwd.value === pwd.value){
    console.log('match')
}else{
    console.log('not match')
} 
})

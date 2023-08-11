let username = document.getElementById('username')
let password = document.getElementById('password')
let userMax = document.getElementById('username-max')
let passMax = document.getElementById('password-max')

// functions can every line called but arrow functions must above called line to work
check = () => {
  username.value.length >= 6 ? userMax.innerText = "نمی توانید بیشتر از 5 حرف وارد کنید !" :
    userMax.innerText = ""
}
username.addEventListener("keyup", check)
password.onkeyup = () => {
  password.value.length >= 6 ? passMax.innerText = "نمی توانید بیشتر از 5 حرف وارد کنید !" :
    passMax.innerText = ""
}

const username =document.getElementById('usename')
const password =document.getElementById('password')
const button =document.getElementById('button')   

button.addEventListener('click',(e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value 
    }

    console.log(data)
} )
//Validación de formulario
let form = document.querySelector('#form')
let nameInput = document.querySelector('#nameInput')
let emailInput = document.querySelector('#mailInput')
let phoneInput =document.querySelector('#phoneInput')
let checkInput =document.querySelector('#acepto')
let comments = document.querySelector('#FormControlTextarea1')
const formValidation =(e) =>{
    e.preventDefault()
    if (!nameInput.value){
        alert('Introduce tu nombre')
        nameInput.focus()
        return
    }
    if(!emailInput.value.includes('@')){
        alert('Este correo no es valido')
        emailInput.focus()
        return
    }
    if(!emailInput.value.includes('gmail.com' || 'hotmail.com' || 'outlook.com')){
        alert('Este correo no es valido')
        emailInput.focus()
        return
    }
    if(!(phoneInput.value*1)){
        alert('El telefono ingresado no es valido')
        phoneInput.focus()
        return
    }
if(phoneInput.value.length>0 &&phoneInput.value.length<9 ){
        alert('El telefono ingresado no es valido')
        phoneInput.focus()
        return
    }
    if(!comments.value){
        alert('Escribe por favor tus comentarios, tu opinión es muy importante para nosotros')
        comments.focus()
        return
    }
    if(!checkInput.checked){
        alert('Debes aceptar los terminos y condiciones')
        return
    }
    
}
form.addEventListener('submit', formValidation)
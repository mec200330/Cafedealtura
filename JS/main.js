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

// //Carrito de compra

// let allProducts = document.querySelector('#home')
// let containerBuyCart = document.querySelector('.carItems')
// let priceTotal = document.querySelector('.totalPrice')
// let countCar = document.querySelector('#countCar');


// let buy = JSON.parse(localStorage.getItem("carrito")) || []
// let total = 0
// let countProducts = 0





// load();
// function load(){
//     allProducts.addEventListener('click', addProduct)
//     containerBuyCart.addEventListener('click', deleteProduct)

// }

// function addProduct (e){
//     e.preventDefault();
//     if(e.target.classList.contains('bottom4')){
//         const selectProduct = e.target.parentElement
//         readContent(selectProduct)
//         console.log(selectProduct);
//     }    
// }

// function deleteProduct(e){
    
//     if (e.target.classList.contains('deleteProduct')){
//         const deleteId = e.target.getAttribute('data-id')
//          buy.forEach(value => {
//             if(value.id == deleteId){
//                 let priceReduce = parseFloat(value.price)*parseFloat(value.amount)
//                 total = total - priceReduce
//                 total = total.toFixed(2)
                
//             }
//          })
//          buy=buy.filter(product => product.id !==deleteId)
//          countProducts --
//     }
//     if (buy.length === 0) {
//         priceTotal.innerHTML = 0;
//         countCar.innerHTML = 0; 
//     }
//     saveLocal()
//     loadHtml();

// }

// function readContent (product){
   
//     const infoProduct = {
//         image: product.querySelector('img').src, 
//         title: product.querySelector('a').textContent,
//         price: product.querySelector('p').textContent,
//         id: product.querySelector('a').getAttribute('data-id'),
//         amount: 1
//     }

//     total = parseFloat(total) + parseFloat(infoProduct.price);
//     total = total.toFixed(2);

//     const exist = buy.some(product => product.id ===infoProduct.id)
// if(exist){
//     const pro = buy.map(product=>{
//         if(product.id ===infoProduct.id){
//             product.amount++
//             return product
//         }else {
//             return product
//         }
//     })
//     buy = [...pro]

// }else{
//      buy =[...buy, infoProduct]
//      countProducts++
     
// }
   
//     loadHtml()
    
// }

// function loadHtml(){
//     clearHtml()
//     buy.forEach(product => {
//         const {image, title, price, amount, id} = product
//         const row = document.createElement('article')
//         row.classList.add('item')
//         row.innerHTML = `
//         <img src= "${image}">
//         <div class="item-content">
//         <a id="nameCaffe" class="bottom3" href="#">${title}</a>
//         <p id="priceCr">${price}</p>
//         <span class="restar">-</span>
//         <h3>Cantidad: ${amount}</h3>
//         <span class="sumar">+</span>
//         </div>
//         <span class="deleteProduct" data-id="${id}">X</span>  
//         `;
//         let restar =row.querySelector(".restar")
//         restar.addEventListener("click", () =>{
//             product.amount--
            
            
            
//         })

//         let sumar =row.querySelector(".sumar")
//         sumar.addEventListener("click", () =>{
//             product.amount++
            
            
//         })

//       containerBuyCart.appendChild(row);
//       priceTotal.innerHTML = total
//       countCar.innerHTML=countProducts
//       saveLocal()
      
//     });

   
// }
// function clearHtml(){
//     containerBuyCart.innerHTML = '';
// }




// function showCart(){
//     document.getElementById("carProductsId").style.display = "block";
// }
// function closeBtn(){
//      document.getElementById("carProductsId").style.display = "none";
// }

// //set item
// const saveLocal=()=>{
//     localStorage.setItem("carrito", JSON.stringify(buy))
// }


//get item

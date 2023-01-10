  axios
    .get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {
        const productsCaffe = response.data.products
        console.log(productsCaffe);
        for(let i=0; i<productsCaffe.length; i++){

           let caffeArticle = document.createElement('article')
           caffeArticle.classList.add('col', 'test1')
           let img = document.createElement('img')
           let nombre = document.createElement('a')
           let precio = document.createElement('p')
           let añadir = document.createElement('a')
           let avaliable = document.createElement('p')

            caffeArticle.appendChild(img)
            caffeArticle.appendChild(nombre)
            caffeArticle.appendChild(precio)
            caffeArticle.appendChild(añadir)
            

            img.setAttribute('src', productsCaffe[i].img_url)
            
            nombre.innerText=`${productsCaffe[i].brand}`
            nombre.setAttribute('href', '#')
            nombre.setAttribute('style', 'font-family: outfit')
            nombre.classList.add('bottom3')
            precio.innerText=`${productsCaffe[i].price},00 €`
            precio.setAttribute('style', 'font-family: outfit')
            añadir.innerText= "Añadir"
            añadir.setAttribute('href', '#')
            añadir.classList.add('bottom4')
            avaliable.innerText=`${productsCaffe[i].available}`
            if (productsCaffe[i].available === false){
              caffeArticle.classList.add('col', 'test6')
              añadir.innerText="Agotado"
              
                 }
            document.querySelector('.bagcoffe').appendChild(caffeArticle)
            //Carrito compra
            añadir.addEventListener("click", ()=>{
                const repeat = carrito.some((repeatProduct)=> repeatProduct.id === productsCaffe[i]._id)
                console.log(repeat);
                if(repeat){
                 carrito.map((prod)=>{
                     if(prod.id===productsCaffe[i]._id){
                         prod.cantidad++
                     }
                 })
                }else{
                  carrito.push({
                  img: `${productsCaffe[i].img_url}`,
                  nombre: `${productsCaffe[i].brand}`,
                  precio:`${productsCaffe[i].price}`*1,
                  id: `${productsCaffe[i]._id}`,
                  cantidad: `1`
                 })
                 saveLocal()
             }
             
             })
        }
        
    })
    
    const verCarrito = document.getElementById("carBuy")
    const shopContent = document.getElementById("carProductsId")
    const modalContainer = document.getElementById("modal-container")
    const cantidadCarrito = document.getElementById("cantidadCarrito")
    
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []
    
       
    
    
        
       
    const pintarCarrito = () =>{
        modalContainer.innerHTML=""
        modalContainer.style.display = "flex"
        const modalHeader = document.createElement("div")
         modalHeader.className = "carItems"
         modalHeader.innerHTML =`
          <h3 class="carItems">Carrito</h3>
     `
     modalContainer.append(modalHeader)
    
     const modalButton = document.createElement("h1")
     modalButton.innerText="X"
     modalButton.className="carItems"
    
     modalHeader.append(modalButton)
    
     modalButton.addEventListener("click", ()=>{
        modalContainer.style.display="none"
     
     })

     
    
     carrito.forEach((product)=>{
           
        let carritoContent = document.createElement("article")
        carritoContent.innerHTML =`
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio},00 €</p>
        <span class="restar">-</span>
        <span class="sumar">+</span>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total:  ${product.cantidad*product.precio}, 00€</p>
        `
        modalContainer.append(carritoContent)
    
        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", ()=>{
            if(product.cantidad >1){
                product.cantidad--
            }
              saveLocal()
              pintarCarrito()
         })
             let sumar = carritoContent.querySelector(".sumar")
        
              sumar.addEventListener("click", ()=>{
            
                product.cantidad++
            
              saveLocal()
              pintarCarrito()
         })
    
         let eliminar = document.createElement("span")
         console.log(carrito.length);
          eliminar.innerText="x"
          eliminar.className="delete-product"
          carritoContent.append(eliminar)
    
          eliminar.addEventListener("click", eliminarProducto)
           })
    
         
          const total = carrito.reduce((acc, el) => acc + el.precio *el.cantidad, 0)
          const totalBuying = document.createElement("div")
          totalBuying.className="total-content"
          totalBuying.innerHTML = `Total a pagar:${total},00 €` 
          console.log(total);
          modalContainer.append(totalBuying)
        }
        
    
        verCarrito.addEventListener("click",pintarCarrito)
        const eliminarProducto =()=>{
        const foundId = carrito.find((element)=> element.id)
        carrito = carrito.filter((carritoId)=>{
            return carritoId !==foundId
        })
        saveLocal()
        pintarCarrito()
    
    }
    //set item
    const saveLocal = ()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    



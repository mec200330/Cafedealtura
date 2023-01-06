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
        }
    
        
        

        
        
        
    })
    



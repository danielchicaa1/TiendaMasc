 export function pintarProductos(productos){
    productos.forEach(function (producto) {

        //creando columnas para alojar los productos
        let columna = document.createElement("div")
        columna.classList.add("col")
     
        //crear una tarjeta para almacenar la info del producto
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "h-100", "shadow")
     
        // crear una imagen
        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid", "w-100")
        imagen.src = producto.fotos[0]
     
        //Crear un titulo
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
     
        // Crear un precio
        let precio = document.createElement("h5")
        precio.classList.add("text-center", "text-success", "fw-bold")
        precio.textContent="usd " + producto.precio

        // Crear una descripción
        let descripcion=document.createElement("descripcion")
        descripcion.classList.add("text-center","d-none")
        descripcion.textContent=producto.descripcion
        

        //Detectando evento
        tarjeta.addEventListener("mouseover",function(){
            imagen.src = producto.fotos[1]
        })

        tarjeta.addEventListener("mouseleave",function(){
            imagen.src = producto.fotos[0]
        })
     
        //padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        
     
     })
     
     
     
}
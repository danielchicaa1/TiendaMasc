// Llamo a la memoria para acceder a los datos guardados
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto);
let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let nombre=document.getElementById("titulo")
titulo.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion
/*
function ConvertirMoneda(tasa){
    let precioUSD=infoProducto.precio * tasa
    console.log(precioUSD);
}

//API

async function cambioTasa(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '074f02bb28msh1bbc96dbaa0f511p144e97jsn6913cd3a583f',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };
    
    let response = await fetch('https://alpha-vantage.p.rapidapi.com/query?to_currency=USD&function=CURRENCY_EXCHANGE_RATE&from_currency=COP', options)
    let datos = await response.json()
    let tasa = datos ['Realtime Currency Exchange Rate']['5. Exchange Rate']

}
*/


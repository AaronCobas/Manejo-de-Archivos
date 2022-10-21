const Manager = require("./manager");
const manager = new Manager();


//Propiedades del nuevo producto que se quiera guardar
let product ={
    title: "Heladera",
    price: 50000,
    thumbnail:"https://electroluxar.vtexassets.com/arquivos/ids/159945/heladera-no-frost-electrolux-dfn3000p-plata-265lts-_Detalhe1.png?v=637541009901930000",
}

//Guardar un nuevo producto
// manager.save(product).then((response) =>{
//     console.log(response)
// })

//Eliminar un producto por su ID
// manager.deleteById(1).then((response) => {
//     console.log(response);
//     });

//Mostrar un producto por su ID
// manager.getById(2).then((response) =>{
//     console.log(response);
//     })

//Mostrar TODOS los produtcos
// manager.getAll().then((response) =>{
//     console.log(response)
// })

//Eliminar TODOS los productos
// manager.deleteAll()
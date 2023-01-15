let productos = [
    {
        id: 1,
        categoria: 'Verduras',
        nombre: 'Lechuga',
        precio: 500,
        Stock: 10,
    },
    {
        id: 2,
        categoria: 'Verduras',
        nombre: 'Tomate',
        precio: 400,
        Stock: 15,
    },
    {
        id: 3,
        categoria: 'Verduras',
        nombre: 'Zapallo',
        precio: 300,
        Stock: 20,
    },
    {
        id: 4,
        categoria: 'Frutas',
        nombre: 'Frutilla',
        precio: 550,
        Stock: 5,
    },
    {
        id: 5,
        categoria: 'Frutas',
        nombre: 'Banana',
        precio: 450,
        Stock: 8
    },
    {
        id: 6,
        categoria: 'Frutas',
        nombre: 'Manzana',
        precio: 390,
        Stock: 10,
    },
    {
        id: 7,
        categoria: 'Limpieza',
        nombre: 'Jabon',
        precio: 100,
        Stock: 20,
    },
    {
        id: 8,
        categoria: 'Limpieza',
        nombre: 'Detergente',
        precio: 200,
        Stock: 10,
    },
    {
        id: 9,
        categoria: 'Limpieza',
        nombre: 'Lavandina',
        precio: 300,
        Stock: 5,
    },
    {
        id: 10,
        categoria: 'Limpieza',
        nombre: 'Alcohol',
        precio: 280,
        Stock: 0,
    },
    {
        id: 11,
        categoria: 'Limpieza',
        nombre: 'Desinfectante',
        precio: 440,
        Stock: 5,
    },
    {
        id: 12,
        categoria: 'Limpieza',
        nombre: 'Cepillo',
        precio: 320,
        Stock: 11,
    },
    {
        id: 13,
        categoria: 'Electrodomesticos',
        nombre: 'Licuadora',
        precio: 5000,
        Stock: 2,
    },
    {
        id: 14,
        categoria: 'Electrodomesticos',
        nombre: 'Cafetera',
        precio: 4000,
        Stock: 1,
    },
    {
        id: 15,
        categoria: 'Electrodomesticos',
        nombre: 'Microondas',
        precio: 8999,
        Stock: 0,
    },
    {
        id: 16,
        categoria: 'Electrodomesticos',
        nombre: 'Batidora',
        precio: 6000,
        Stock: 3,
    },
    {
        id: 17,
        categoria: 'Electrodomesticos',
        nombre: 'Horno',
        precio: 15000,
        Stock: 2,
    },
    {
        id: 18,
        categoria: 'Despensa',
        nombre: 'Arroz',
        precio: 500,
        Stock: 20,
    },
    {
        id: 19,
        categoria: 'Despensa',
        nombre: 'Fideos',
        precio: 400,
        Stock: 30,
    },
    {
        id: 20,
        categoria: 'Despensa',
        nombre: 'Harina',
        precio: 300,
        Stock: 40,
    },
    {
        id: 21,
        categoria: 'Despensa',
        nombre: 'Azucar',
        precio: 550,
        Stock: 21,
    },
    {
        id: 22,
        categoria: 'Despensa',
        nombre: 'Sal',
        precio: 450,
        Stock: 15,
    },
    {
        id: 23,
        categoria: 'Despensa',
        nombre: 'Aceite',
        precio: 390,
        Stock: 10,
    },
    {
        id: 24,
        categoria: 'Despensa',
        nombre: 'Mermelada',
        precio: 500,
        Stock: 0,
    }
]

// Variables
let opcion = 0
let opcion2 = 0
let opcion3 = 0
let opcion4 = 0
let opcion5 = 0
let total = 0
let categorias = []
let carrito = []
let saludo = true

// Categorias
for (const producto of productos) {
    if (!categorias.includes(producto.categoria)) {
        categorias.push(producto.categoria)
    }
}


// Funciones
const menu = () => {
    seguir2 = true
    if (saludo) {
        console.log('Bienvenido a nuestra tienda online')
        saludo = false
    }
    console.log('Seleccione la opción deseada \n1. Comprar \n2. Ver carrito \n3. Salir')
    console.log('-----------------------------')
    opcion = parseInt(prompt('Ingrese una opcion'))
    while (opcion != 1 && opcion != 2 && opcion != 3) {
        opcion = parseInt(prompt('Opcion invalida. Ingrese una opcion válida.'))
    }
}

const menuComprar = () => {
    seguir3 = true
    console.log('-----------------------------')
    console.log('Seleccione la opción deseada \n1. Comprar por nombre \n2. Comprar por categoría \n3. Volver al menu principal')
    console.log('-----------------------------')
    opcion2 = parseInt(prompt('Ingrese una opcion'))
    while (opcion2 != 1 && opcion2 != 2 && opcion2 != 3) {
        opcion2 = parseInt(prompt('Opcion invalida. Ingrese una opcion válida.'))
    }
}

const comprarPorCategoria = () => {
    console.log('-----------------------------')
    console.log('Por favor seleccione una categoria para comenzar a comprar o cero para volver al menu de Compras \n')
    console.log('0. Volver al menu principal')
    categorias.forEach((categoria, index) => {
        console.log(`${index + 1}. ${categoria}`)
    })
    console.log('-----------------------------')
    opcion3 = parseInt(prompt('Ingrese una opcion'))
    while (opcion3 < 0 || opcion3 > categorias.length + 1) {
        opcion3 = parseInt(prompt('Opcion invalida. Ingrese una opcion válida.'))
    }
    if (opcion3 !== 0) {
        console.log('La categoria seleccionada es: ' + categorias[opcion3 - 1] + '\n' + 'El listado de productos es: \n')
        let cont = 1
        console.log('0. Volver al menu anterior')
        let productosFiltrados = productos.filter(producto => producto.categoria == categorias[opcion3 - 1])
        productosFiltrados.forEach(producto => {
            console.log(`${cont}. ${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.Stock}`)
            cont++
        })
        console.log('-----------------------------')
        let opcion4 = parseInt(prompt('Ingrese el numero del producto que desea comprar o cero para volver al menu anterior'))
        while (opcion4 < 0 || opcion4 > productosFiltrados.length + 1) {
            opcion4 = parseInt(prompt('Opcion invalida. Ingrese una opcion válida.'))
        }
        if (opcion4 !== 0) {
            console.log(`Nombre: ${productosFiltrados[opcion4 - 1].nombre} - Precio: ${productosFiltrados[opcion4 - 1].precio} - Stock: ${productosFiltrados[opcion4 - 1].Stock}`)
            let cantidad = unidades()
            let producto = productosFiltrados[opcion4 - 1].nombre.toLowerCase()
            chequearStock(producto, cantidad)
            console.log('Producto agregado al carrito')
            seguirComprando()
        }
    } else {
        seguir3 = false
    }
}

const comprarPorNombre = () => {
    console.log('-----------------------------')
    console.log('El listado de productos es: \n')
    mostrarItems(productos)
    console.log('-----------------------------')
    opcion5 = prompt('Ingrese el nombre del producto que desea comprar o escriba salir para volver al menu de Compras').toLowerCase()
    if (opcion5 == 'salir') {
        seguir3 = false
    } else {
        let productoParaComprar = productos.find(producto => producto.nombre.toLowerCase() == opcion5)
        if (productoParaComprar) {
            console.log(`Nombre: ${productoParaComprar.nombre} - Precio: ${productoParaComprar.precio} - Stock: ${productoParaComprar.Stock}`)
            let cantidad = unidades()
            chequearStock(productoParaComprar.nombre.toLowerCase(), cantidad)
            console.log('Producto agregado al carrito')
            console.log(productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == opcion5)].Stock)
        } else {
            console.log('Producto no encontrado. \n')
        }
        seguirComprando()
    }
}

//Funcion que recibe el id de un producto y devuelve un array con los items de esa categoria

let productosId = (id) => {
    let items = productos.filter((producto) => producto.id == id)
    return items
}

//Funcion que recibe un array y muestre los items por consola

let mostrarItems = (array) => {
    array.forEach((producto) => {
        console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.Stock}`)
    })
}


//Funcion que pregunta al usuario si desea seguir comprando

const seguirComprando = () => {
    let respuesta = prompt('Desea seguir comprando? Si/No').toLowerCase()
    while (respuesta != 'si' && respuesta != 'no') {
        respuesta = prompt('Opcion invalida.\n\n Desea seguir comprando? Si/No').toLowerCase()
    }
    if (respuesta == 'no') {
        seguir3 = seguir2 = false
    }
}

//Funcion para chequear si hay stock

const chequearStock = (nombre, cantidad) => {
    if (productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].Stock < cantidad) {
        console.log('No hay stock suficiente. El stock actual es de ' + productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].Stock + ' unidades')
        while (productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].Stock < cantidad) {
            cantidad = prompt('Ingrese una cantidad menor o igual al stock actual o ingrese 0 para salir')
        }
        if (cantidad !== 0) {
            chequearStock(nombre, cantidad)
        }
    } else if (cantidad > 0 && productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].Stock >= cantidad) {
        productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].Stock = productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].Stock - cantidad
        console.log(productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].Stock)
        if (carrito.find((producto) => producto.nombre.toLowerCase() == nombre) == undefined) {
            carrito.push(productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == nombre)])
            carrito[carrito.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].cantidad = cantidad
            delete carrito[carrito.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].Stock
            console.log(carrito)
        } else {
            carrito[carrito.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].cantidad = carrito[carrito.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].cantidad + cantidad
        }
    }
}


//Pregunta cuantas unidades del item seleccionado desea comprar y se resta al stock del item en el array de objetos

const unidades = () => {
    let cantidad = parseInt(prompt('Ingrese la cantidad de unidades que desea comprar.'))
    while (isNaN(cantidad)) {
        cantidad = parseInt(prompt('Opcion invalida. \n\n Ingrese la cantidad de unidades que desea comprar.'))
    }
    return cantidad
}

//Funcion que recibe el nombre del item y la cantidad de unidades y devuelve el precio total de la compra

const precioTotal = (nombre, cantidad) => {
    total = total + cantidad * productos.find((producto) => producto.nombre.toLowerCase() == nombre).precio
}

//Funcion que recibe el nombre del item y la cantidad de unidades y resta al stock del item en el array de objetos

const restarStock = (nombre, cantidad) => {
    productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].Stock = productos[productos.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].Stock - cantidad
}


// Codigo
let seguir = true
let seguir2 = true
let seguir3 = true

while (seguir) {
    menu()
    if (opcion == 1) {
        while (seguir2) {
            menuComprar()
            if (opcion2 == 1) {
                while (seguir3) {
                    comprarPorNombre()
                }
            } else if (opcion2 == 2) {
                while (seguir3) {
                    comprarPorCategoria()
                }
            } else if (opcion2 == 3) {
                seguir2 = false
            }
        }
    } else if (opcion == 2) {
        console.log('El carrito contiene: \n')
        mostrarItems(carrito)
        let nombre = prompt('Ingrese el nombre del producto que desea eliminar del carrito o "ninguno" para salir').toLowerCase()
        while (nombre != 'ninguno' && carrito.find((producto) => producto.nombre.toLowerCase() == nombre) == undefined) {
            nombre = prompt('Opcion invalida. Ingrese una opcion válida.').toLowerCase()
        }
        if (nombre !== 'ninguno') {
            restarStock(nombre, (-1) * carrito[carrito.findIndex((producto) => producto.nombre.toLowerCase() == nombre)].cantidad)
            console.log('Producto eliminado del carrito')
        }
    }
    else if (opcion == 3) {
        seguir = false
    }
}

console.log('Gracias por su compra. \n\n El total de su compra es: $' + total)
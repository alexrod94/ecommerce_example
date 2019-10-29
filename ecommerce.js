let phone = {}
let carrito = []
function getPrice(number) {
    switch(number) {
        case "1":
            phone = {
                name: "Xiaomi Redmi Note 7", 
                price: "400$"
            }
            document.getElementById("modal-body").innerHTML = "<p>El precio del Xiaomi Redmi Note 7 es de 400$. ¿Quieres comprarlo?</p>";
        break;
        case "2":
            phone = {
                name: "OnePlus 7 Pro", 
                price: "350$"
            }
            document.getElementById("modal-body").innerHTML = "<p>El precio del OnePlus 7 Pro es de 350$. ¿Quieres comprarlo?</p>";
        break;
        case "3":
            phone = {
                name: "iPhone X", 
                price: "1000$"
            }
            document.getElementById("modal-body").innerHTML = "<p>El precio del iPhone X es de 1000$. ¿Quieres comprarlo?</p>";
        break;
        case "4":
            phone = {
                name: "Samsung Galaxy S10", 
                price: "950$"
            }
            document.getElementById("modal-body").innerHTML = "<p>El precio del Samsung Galaxy S10 es de 950$. ¿Quieres comprarlo?</p>";
        break;
        case "5":
            phone = {
                name: "Huawei P30 Pro", 
                price: "600$"
            }
            document.getElementById("modal-body").innerHTML = "<p>El precio del Huawei P30 Pro es de 600$. ¿Quieres comprarlo?</p>";
        break;
        case "6":
            phone = {
                name: "Meizu M6 Note", 
                price: "330$"
            }
            document.getElementById("modal-body").innerHTML = "<p>El precio del Meizu M6 Note es de 330$. ¿Quieres comprarlo?</p>";
        break;
        case "7":
            phone = {
                name: "Motorola One", 
                price: "450$"
            }
            document.getElementById("modal-body").innerHTML = "<p>El precio del Motorola One es de 450$. ¿Quieres comprarlo?</p>";
        break;
        case "8":
            phone = {
                name: "Sony Xperia XA", 
                price: "500$"
            }
            document.getElementById("modal-body").innerHTML = "<p>El precio del Sony Xperia XA es de 500$. ¿Quieres comprarlo?</p>";
        break;
        case "9":
            phone = {
                name: "BQ Aquaris", 
                price: "470$"
            }
            document.getElementById("modal-body").innerHTML = "<p>El precio del Xiaomi Redmi Note 7 es de 400$. ¿Quieres comprarlo?</p>";
        break;
            
        default:
            phone = {
                name: "No hay ningún elemento en el carrito"
            }
        break;
    }
    console.log(phone)
}

function addToCart() {
    carrito.push(phone);
    console.log(carrito);
}

function comprar() {
    document.getElementById("carrito-body").innerHTML = `<p>Elementos en tu carrito: \n</p>`
    for (let i=0; i < carrito.length; i++) {
        document.getElementById("carrito-body").innerHTML += `<p>Móvil: ${carrito[i].name}. Precio: ${carrito[i].price} \n`
    }
}
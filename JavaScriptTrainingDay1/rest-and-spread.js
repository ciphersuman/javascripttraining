function holidayDeclaration(){
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        console.log(element);
        
    }

    
}

// Rest parameter rest of parameter 
function holidayDeclaration1(...cities)
{
    console.log(cities);
}
const RAIN_CITIES = ["Pune","Mumbai","Kohlapur"]
holidayDeclaration("kokata");
// spread operator  spreading the elements of array  by comma separation 
holidayDeclaration1(...RAIN_CITIES);

const PizzaOrder={
    orderId:2738,
    customerId:892,
    orderDate: new Date(),
    status : "Order received successfully "
}
const PizzaInOven={
    ...PizzaOrder,
    status : "Pizza is getting baked "
}
const PizzaOutForDelivery={
    ...PizzaInOven , status: "Pizza is out for delivery  "
}

console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaOutForDelivery);

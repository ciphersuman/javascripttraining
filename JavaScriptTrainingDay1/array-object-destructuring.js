const Mobiles =["Apple Next ","Samsung Galaxy  ","Nokia 8.2 "];

// assign each elemt to diff variable 

// array destructuring 
var  [m1 , m2 ,m3] =Mobiles;
console.log(m1);
var  [m1 , ,m3] =Mobiles;
console.log(m3);
var [m1,...mobis]=Mobiles;
console.log(mobis);


const Order = {
    orderId:2389,
    orderDate:new Date(),
    qty:90,
    unitPrice:12.90
}
var {orderId,orderDate,qty,price}=Order;
console.log(`order is ${orderId} Quantity is ${qty} Price is unit ${price}`);

var oid , odate,qty,prce ;
({orderId:oid,orderDate:odate,qty:qty,unitPrice=prce}=Order);
console.log(`order ia ${oid}  quantity is ${qty} unit price is ${prce}  and date of order is ${odate}`);



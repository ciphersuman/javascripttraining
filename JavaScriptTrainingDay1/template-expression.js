const CUSTOMER ={
    customerId:3488,
    contactName:"Suman GHosh",
    city:"pune"
}

// print customer information using console.log()

//console.log("Customer id is %s Name is %s  city is %s",CUSTOMER.customerId,CUSTOMER.contactName,CUSTOMER.city);


console.log(`Customer is is ${CUSTOMER.customerId} and having contact name is ${CUSTOMER.contactName} and city lives is ${CUSTOMER.city}`);

// declare a function which will return customer information 



function getCustomer() 
{
   
    return `Customer is is ${CUSTOMER.customerId}
     and having contact name is ${CUSTOMER.contactName} and 
     city lives is ${CUSTOMER.city}`;



    
}

console.log(getCustomer());

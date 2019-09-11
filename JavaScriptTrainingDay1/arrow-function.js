const EMPLOYEE ={

    employeeId:3489,
    employeeName:"SUman Ghosh",
    city:"pune",
    printEmplyeeInfo:function (){
        // this aliases
        //var emp=this
       // setTimeout(function(){
         //   console.log(`Emplyee name is ${emp.employeeName}  who lives in city ${emp.city}`)

        //},2000)

//using bind 

        // setTimeout(function(){
        //     console.log(`Emplyee name is ${this.employeeName}  who lives in city ${this.city}`)
        // }.bind(this),2000)
        setTimeout(()=> {
            console.log(`Emplyee name is ${this.employeeName}  who lives in city ${this.city}`)

        })
    }
}

//EMPLOYEE.printEmplyeeInfo();

let masg1 = () =>  console.log("welcome to Synechron ");

masg1();
let sqaure = (num) =>  num* num;

console.log(sqaure(4));
let salesNetProfit = (cogs,expense,actualSales,gst=0) => {
    let gstamount= actualSales*gst/100;
    return actualSales-(gstamount+cogs+expense);

}

console.log(`sales net profile is ${salesNetProfit(12000,13000,150000,10)}`);

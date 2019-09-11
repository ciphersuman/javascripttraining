
let defautGstPercentage=5;
function getGovtGstValue(category)
{
    switch (category) {
        case "IT":
            return 18;
            break;
            case "FOOD":
            return 5;
            break;
    
        default:
        return 0;
            break;
    }
}
function salesNetProfit(cogs=12000, expense, actualSales,gst=getGovtGstValue("IT"))
{
    var gstAmount=0;
  
    
        gstAmount=actualSales*gst/100;

    
    return actualSales-(cogs+expense+gstAmount);



}
console.log(`Sales net profit - without GST  -INR ${salesNetProfit(13000,150000)}`);
console.log(`Sales net profit - with GST  -INR ${salesNetProfit(12000,13000,150000,18)}`);
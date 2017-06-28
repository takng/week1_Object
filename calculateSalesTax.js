var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumCompany(salesData) {
  var result = {};

  for (var i = 0; i < salesData.length; i++) {
    var name = salesData[i].name;
    var province = salesData[i].province;
    var eachSalesValue = salesData[i].sales;

//console.log(name, eachSalesValue);
//console.log(name );
//console.log(eachSalesValue );
//console.log(typeof(eachSalesValue ));
//console.log(eachSalesValue instanceof Array);
    for (var j = 0; j < eachSalesValue.length; j++) {
//      console.log(eachSalesValue[j]);
        if (!result[name]) {
          result[name] = {
            totalSales: eachSalesValue[j],
            totalTax: eachSalesValue[j] * salesTaxRates[province]
          }
        } else {
          result[name].totalSales += eachSalesValue[j];
          result[name].totalTax += eachSalesValue[j] * salesTaxRates[province];
        }
    }

  }
  return result;
}

console.log(sumCompany(companySalesData));


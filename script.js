// 1.Compare Two Json have the same Properties Without Order
    let obj1 = {name : "Person 1", age : 5};
    let obj2 = {age : 5 , name : "Person 1", };
    console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
    // console.log(isEqual(obj1, obj2));





// 2.Display All the Countries Flag in console

var country = new XMLHttpRequest();
country.open("GET","https://restcountries.com/v3.1/all",true)
country.send();
country.onload = function(){
    var data = country.response;
    var result1 = JSON.parse(data)
    // console.log(result1)
    for(var i = 0; i < result1.length ; i++){
        console.log(result1[i].flags.png)
    }
   
}




// 3.Display  Countries Names, regions, SubRegion , Population
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result1 = JSON.parse(data)
    // console.log(result1)
    for(var i = 0; i < result1.length ; i++){
        console.log(result1[i].name.common , result1[i].region,result1[i].subregion , result1[i].population )
    }
   
}



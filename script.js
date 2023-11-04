
//Get all the countries from the Asia continent /region using the Filter function
var request1= new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all","true");
request1.send();
request1.onload=function(){
    var data=request1.response;
    var result=JSON.parse(data)
    //console.log(result)

const res=result.filter((countries)=>{
    return countries.region=="Asia"
})
console.log(res)
}




//Get all the countries with a population of less than 2 lakhs using Filter function
var request2= new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all","true");
request2.send();
request2.onload=function(){
    var data=request2.response;
    var result2=JSON.parse(data)
    const pop = result2.filter((element)=>{
        return element.population<200000;
    })
console.log(pop)

   
}


//c.Print the following details name, capital, flag using forEach function
var request3= new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all","true");
request3.send();
request3.onload=function(){
    var data=request3.response;
    var result3=JSON.parse(data)
    const name = result3.forEach((element)=>{
        console.log(element.name)
        console.log(element.capital)
        console.log(element.flag)
    })

   
}


//Print the total population of countries using reduce function
var request4= new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all","true");
request4.send();
request4.onload=function(){
    var data=request4.response;
    var result4=JSON.parse(data)
    const result=result4.reduce((acc,cv)=>{
        return acc+cv.population
    },0)
    console.log(result)
}


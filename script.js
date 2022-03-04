//step 01:create an XHR object
var request=new XMLHttpRequest();
//step 02: request a connection
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// step 03: once the data connection request
request.send();
//step 04: once the data sucessfully received
//from the server(200)
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    // Display the author name, Book, ISBN, No of pages & Publisher    
     let res=data.filter((ele)=>ele.region==="Asia"); 
    console.log(res);
    //extract country names which asia region
    for(var i=0;i<res.length;i++){
        console.log(res[i].name);
    }
}
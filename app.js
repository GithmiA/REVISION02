// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
   
// let productContainner = document.getElementById("productItem");
// let body = "";
// data.forEach(element => {
//     body += `
//         <div class="col">
//                     <div class="card shadow-sm">
//                     <img src="${element.image}" alt="" class="card-img-top">
//                         <div class="card-body">
//                         <h3>${element.title}</h3>
//                             <p class="card-text">${element.description}</p>
//                             <div class="d-flex justify-content-between align-items-center">
//                                 <div class="btn-group"> <button type="button"
//                                         class="btn btn-sm btn-outline-secondary">${"Buy Now "}${element.price}</button> <button type="button"
//                                         class="btn btn-sm btn-outline-secondary">${element.rating.rate}</button> </div> <small
//                                     class="text-body-secondary">9 mins</small>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//     `
// });
// productContainner.innerHTML = body;
// })
// let customer = {
//     name: "John Doe",
//     age:21,
//     city: "New York"
// };
// localStorage.setItem("customer",JSON.stringify(customer));
// console.log(JSON.parse(localStorage.getItem("customer")));
// console.log(customer.age);

// const customerList = [];

// function btnAddCustomerOnAction(){
//    let customer = {
//     id:document.getElementById("txtCustomerId").value,
//     name:document.getElementById("txtCustomerName").value,
//     city:document.getElementById("txtCustomerCity").value,
//     salary:document.getElementById("txtCustomerSalary").value
//    }
//    customerList.push(customer);
//    localStorage.setItem("customer",JSON.stringify(customerList));
//    console.log(JSON.parse(localStorage.getItem("customer")));

   
// }

// function btnSearchCustomerOnAction(){
//     let customerList = JSON.parse(localStorage.getItem("customer"));

//     let customer = customerList.find(customer => {
//         return customer.id === document.getElementById("txtCustomerId").value
//     });

//     document.getElementById("txtCustomerName").value = customer.name;
//     document.getElementById("txtCustomerCity").value = customer.city;
//     document.getElementById("txtCustomerSalary").value = customer.salary;
// }
// function btnDeleteCustomerOnAction(){
//     let customerList = JSON.parse(localStorage.getItem("customer"));

//     let customer = customerList.findIndex(customer => {
//         return customer.id === document.getElementById("txtCustomerId").value
//     });

//     console.log(customer);
//     customerList.splice(customer, 1);
//     localStorage.setItem("customer",JSON.stringify(customerList));
//     console.log(customerList);
    
// }
// function btnUpdateCustomerOnAction(){
    
// }
// function btnClearStorageOnAction(){
//     localStorage.clear("customer");
// }
// function btnLoadTablerOnAction(){
    
// }



function btnGetWeatherOnAction(){
const apikey = "f66783e9bf0e43c29b070720262507";
const baseUrl = "http://api.weatherapi.com/v1";

    let loction = document.getElementById("txtLocation").value;
fetch(`${baseUrl}/current.json?key=${apikey}&q=${loction}`).then(res=>res.json()).then(data=>{
    //console.log(data)

document.getElementById("weatherInfo").innerHTML =`
           <h2>${data.location.name}</h2>
           <img src="${data.current.condition.icon}" alt="">
           <p>${data.current.condition.text}°C</p>
           <p>${data.current.temp_c}°C</p>

`
})
}
navigator.geolocation.getCurrentPosition((position=>{
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}))
console.log();


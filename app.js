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
let customer = {
    name: "John Doe",
    age:21,
    city: "New York"
};
localStorage.setItem("customer",JSON.stringify(customer));
console.log(JSON.parse(localStorage.getItem("customer")));
console.log(customer.age);
const products = [
    {name:"Laptop", category:"Electronics", price:50000},
    {name:"Mobile", category:"Electronics", price:20000},
    {name:"Shirt", category:"Clothing", price:1000},
    {name:"Jeans", category:"Clothing", price:1500}
];

function displayProducts(data){
    const container = document.getElementById("products");

    container.innerHTML = "";

    data.forEach(product=>{
        container.innerHTML += `
        <div class="card">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>₹${product.price}</p>
        </div>`;
    });
}

function filterProducts(){
    const value = document.getElementById("filter").value;

    if(value === "all"){
        displayProducts(products);
    }else{
        displayProducts(
            products.filter(p=>p.category===value)
        );
    }
}

function sortProducts(){
    const value = document.getElementById("sort").value;

    let sorted = [...products];

    if(value==="low"){
        sorted.sort((a,b)=>a.price-b.price);
    }

    if(value==="high"){
        sorted.sort((a,b)=>b.price-a.price);
    }

    displayProducts(sorted);
}

displayProducts(products);
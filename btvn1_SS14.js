const products = [
{ id: 1, name: "Bánh Chưng", price: 150000 },
{ id: 2, name: "Giò Lua", price: 180000 },
{ id: 3, name: "Cành Đào", price: 500000 },
{ id: 4, name: "Mứt Tet", price: 120000 },
{ id: 5, name: "Bao Li Xì", price: 25000 },
{ id: 6, name: "Dưa Hau Tết", price: 80000 },
];

let productsList = document.getElementById('product-list');
for(let i = 0;i< products.length;i++){
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<p>${products[i].name}: ${products[i].price}</p>`
    productsList.appendChild(div);
}

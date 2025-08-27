// Создайте массив объектов `products`, где каждый объект описывает товар и содержит следующие 
// свойства: `name` (строка), `price` (число), и `inStock` (булево значение). 
// Напишите функцию `listAvailableProducts`, которая принимает этот массив и выводит названия товаров, 
// которые есть в наличии.

interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

const products: Product[] = [
  { name: "Ноутбук", price: 50000, inStock: true },
  { name: "Мышь", price: 1500, inStock: false },
  { name: "Клавиатура", price: 3000, inStock: true },
  { name: "Монитор", price: 12000, inStock: false }
];

function listAvailableProducts(products: Product[]): void {
   const availableproducts = products.filter(product => product.inStock)
    availableproducts.forEach(product => console.log(`Продукты в наличии: ${product.name}`))
}

listAvailableProducts(products);


// function listAvailableProducts(items: Product[]): void {
//   console.log("Товары в наличии:");
//   for (const product of items) {
//     if (product.inStock) {
//       console.log(`- ${product.name}`);
//     }
//   }
// }
// task 1 Типизация функции с несколькими параметрами
function calculateTotal(price: number, quantity: number, discount: number = 0): number {
  const total = price * quantity;
  const discountedTotal = total - total * discount;
  return discountedTotal;
}

console.log(calculateTotal(100, 3));      
console.log(calculateTotal(100, 3, 0.1));       


// task 2 - Использование Union типов
let id: string | number;

function displayId(id: string | number): void {
  if (typeof id === "string") {
    console.log("ID (строка):", id.toUpperCase());
  } else {
    console.log("ID (число × 10):", id * 10);
  }
}

id = "hello, world";
displayId(id);   

id = 42;
displayId(id);  


// task 3 - Объявление и типизация массивов объектов
type OrderStatus = "pending" | "shipped" | "delivered";

type Order = {
  orderId: string;
  amount: number;
  status: OrderStatus;
};

const orders: Order[] = [
  { orderId: "A1", amount: 500, status: "pending" },
  { orderId: "B2", amount: 750, status: "shipped" },
  { orderId: "C3", amount: 300, status: "delivered" },
  { orderId: "D4", amount: 450, status: "pending" }
];

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
  return orders.filter(order => order.status === status);
}

console.log(filterOrdersByStatus(orders, "pending"));


// task 4 - Работа с кортежами и объектами

// Кортеж: [название товара, цена, количество]
const productInfo: [string, number, number] = ['Мышь', 1200, 5];

// Объект склада: название → количество
const inventory: { [key: string]: number } = {
  'Мышь': 10,
  'Клавиатура': 15
};

// Функция обновления склада
function updateStock(
  inventory: { [key: string]: number },
  productInfo: [string, number, number]
): void {
  const [name, , quantity] = productInfo;

  if (inventory[name]) {
    inventory[name] += quantity; // прибавляем к существующему
  } else {
    inventory[name] = quantity;  // если товара не было — добавляем
  }

  console.log(`Обновлённый склад:`, inventory);
}

updateStock(inventory, productInfo);




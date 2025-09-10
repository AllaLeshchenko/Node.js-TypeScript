// Обработка ошибки в асинхронной функции
// 1. Напишите асинхронную функцию, которая пытается получить данные из API (используйте фейковый URL.
// 2. Если запрос завершается ошибкой, обработайте её с помощью блока `try/catch` и выведите сообщение об ошибке.
function getUrl(): string {
  const arrUrls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/poss', // намеренно некорректный
  ];
  const randomIndex = Math.floor(Math.random() * arrUrls.length);
  return arrUrls[randomIndex];
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchData1(): Promise<void> {
  try {
    const url = getUrl();
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: status ${response.status}`);
    }

    const getData = (await response.json()) as Post[];
    console.log('Data successfully received:', getData);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error while receiving data:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
}

fetchData1();
// async function fetchData1(): Promise<void> {
//   try {
//     const url = getUrl();
//     const response: Response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Error: status ${response.status}`);
//     }

//     const getData = await response.json() as Post[];
//     console.log('Data successfully received:', getData);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error('Error while receiving data:', error.message);
//     } else {
//       console.error('Unknown error:', error);
//     }
//   }
// }


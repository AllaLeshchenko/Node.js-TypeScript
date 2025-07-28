const axios = require('axios');

axios
.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error)
});


async function fetchTodo() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response.data)
    }
    catch (error) {
        console.error(error)
    }
}

fetchTodo()
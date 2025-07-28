const axios = require('axios');
const fs = require('fs');

const URL = 'https://jsonplaceholder.typicode.com/posts'

axios
.get(URL)
.then(response => {
    const posts = response.data

    const text = JSON.stringify(posts, null, 2)

    fs.writeFile('posts.txt', text, 'utf8', (err) => {
        if(err) {
            console.error('Ошибка при записи файла: ', err)
            return
        }
        console.log('Файл успешно создан')

        fs.readFile('posts.txt', 'utf8', (err, data) => {
            if(err) {
                console.error('Ошибка при чтении файла:', err)
                return
            }
            console.log('Файл успешно прочитан:' , data)
        })
    })
})
.catch(err => {
    console.error('Ошибка при получении данных:', err)
})



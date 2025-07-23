const fs = require('fs');

fs.writeFile('example2.txt', "Hello Node.js", (err) => {
    if (err) {
        console.error(err)
        return
    }

    console.log('Файл успешно создан')
})

fs.readFile('example2.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error(err)
        return
    }

    console.log(data)
})

fs.unlink('example2.txt', (err) => {
    if(err) {
        console.error(err)
        return
    }

    console.log('Файл успешно удал')
})
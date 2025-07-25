const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(`Произошла ошибка: ${err}`);
    }
    console.log(`File contents: ${data}`)

    fs.writeFile('output.txt', data, 'utf8', (err) => {
       if(err) {
           console.error(`Произошла ошибка: ${err}`);
       }
       console.log('The file is recorded')
    });
});

console.log('test')

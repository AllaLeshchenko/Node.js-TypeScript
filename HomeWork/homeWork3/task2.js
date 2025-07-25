const fs = require('fs');

fs.writeFile('info.txt', 'Node.js is awesome!','utf-8', (error) => {
    if(error) {
        console.error('Error: ', err)
        return
    }
    console.log('File created and info recorded');
});

fs.readFile('info.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error('Error: ', err);
        return
    }
    console.log('The file contains information: ', data)
});
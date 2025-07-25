const fs = require('fs');

fs.mkdir('myFolder', (error) => {
    if(error) {
        console.error('Error ', error);
        return
    }
    console.log('The folder was created successfully');

    fs.rmdir('myFolder', (err) => {
        if(err) {
            console.error('Error: ', err);
            return
        }
        console.log('The folder was deleted successfully')
    });
});
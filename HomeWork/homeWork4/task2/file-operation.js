const fs = require('fs');
const dotenv = require('dotenv')
dotenv.config();

const fileName = process.env.FILENAME;
const content = 'Hallo! This is a test write to a file.';


fs.writeFile(fileName, content, (err) => {
    if(err) {
        console.error('Error: ', err)
        return
    }
    console.log(`File "${fileName}" created successfully`);


  fs.readFile(fileName, 'utf8', (err, data) => {
      if(err) {
          console.error('Error: ', err)
          return
      }
      console.log('File contents: ', data)
  });
});
const fs = require('fs');

try{
    const content = fs.readFileSync('input2.txt', 'utf8');
    console.log('Data from file input.txt: ', content );
    fs.writeFileSync('output.txt', content, 'utf8');
    console.log('The file is recorded');
}catch(err){
    console.error(err);
}
console.log('test');
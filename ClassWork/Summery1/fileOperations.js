const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.jpg');
const renameFilePath = path.join(__dirname, 'renameExample.jpg');
const copyFilePath = path.join(__dirname, copyOfExample.jpg)

fs.rename(filePath, renameFilePath, (renameError)=> {
    if(renameError){
        console.log("Ошибка при переименование и при перемещение", err)
    return;
    }
console.log('Успешно переименовали и переместили файл')

fs.copyFile(renameFilePath, copyFilePath, (copyError) => {
  if (copyError) {
    console.error('Ошибка при копировании файла: ' + error)
    return;
  };

  console.log('Файл успешно скопирован как copyOfExample.jpg')

  fs.unlink(renameFilePath, error => {
    if(error) {
        console.error(error);
        return;
    }
    console.log('File was deleted')
})
});
});

// // 1. Импорт необходимых модулей
// const fs = require('fs');
// const path = require('path');

// // 2. Определение пути к исходному файлу
// const sourceFile = path.join(__dirname, 'example.jpg');

// // 3. Новый путь и имя для файла
// const destinationFile = path.join(__dirname, 'renamedExample.jpg');

// // 4. Перемещение и переименование файла
// fs.rename(sourceFile, destinationFile, (err) => {
//   if (err) {
//     console.error('Произошла ошибка при переименовании файла:', err);
//     return;
//   }

//   console.log('Файл успешно перемещён и переименован.');

//   // Здесь можно выполнить дополнительные действия после успешного переименования
//   // Например, проверить, существует ли новый файл
//   fs.access(destinationFile, fs.constants.F_OK, (err) => {
//     if (err) {
//       console.error('Не удалось найти файл после переименования.');
//     } else {
//       console.log('Файл доступен по новому пути:', destinationFile);
//     }
//   });
// });
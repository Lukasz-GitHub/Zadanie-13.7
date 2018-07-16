'use strict';

var fs = require('fs');

fs.readdir('../Zadanie 13.7', function (err, data) {
    var textData = data.join(', ');
    console.log('Zawartość folderu Zadania 13.7:\n', data);
    fs.writeFile('./Zadanie.txt', textData, function (err) {
        if (err) throw err;
        console.log('Zawartość folderu Zadania 13.7 została zapisana w pliku Zadanie.txt.\n');
        fs.readFile('./Zadanie.txt', 'utf-8', function (err, data){
            console.log('Zawartość pliku Zadania.txt: ' + data);
        });
    });
});



/*In terminal */
/*type nodewrite.js in terminal to get fullname*/
/*type node index to run the file*/

/*readFile/writeFile*/ 
const fs = require('fs');
var setting = {
      flag : 'r'  ,
      encoding : 'utf8'
};
/* läser in för och efternamn */
fs.readFile('firstName.txt', setting, (err1, data1) => {
    fs.readFile('lastName.txt', setting, (err2, data2) => {
        if (err1 || err2) {
            console.error(err1 || err2)
        }

        /* Filen skapas och uppdateras */
        var data = data1 + ' ' + data2;
        fs.writeFile('fullName.txt', data, (err) => {
           console.log('Export successfull !')
        });
    }); 
});

// Initialization
document.addEventListener('DOMContentLoaded', function() {

    setLang('en');

    // TO DO Something here...
});

//=========================================================================================

function setLang(lang) {
    
    const fs = require('fs');
    let fname = '';

    switch(lang) {
        case 'en':
            fname = 'en-us.json';
        break;
        case 'fr-fr':
            fname = 'fr-fr.json';
        break;
        case 'ko-kr':
            fname = 'ko-kr.json';
        break;
        default:
            fname = 'en-us.json';
        break;
    }

    fs.readFile(fname, 'utf8', (error, data) => {

        if (error) {
          console.error('Error reading the file:', err);
          return;
        }
      
        const json = JSON.parse(data);
        
      });

}

//=========================================================================================
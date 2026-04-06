const fs = require('fs');

const paths = ['../sudanbi.html', 'public/sudanbi.html'];

paths.forEach(p => {
    if(!fs.existsSync(p)) return;
    let txt = fs.readFileSync(p, 'utf8');

    const oldBlock = `          if(sdMagMode === 'crop5') {
              sdMagImg.style.transformOrigin = "50% 12%";
              sdMagImg.style.transform = "scale(2.2)";
          } else if (sdMagMode === 'crop6') {
              sdMagImg.style.transformOrigin = "50% 55%";
              sdMagImg.style.transform = "scale(2.2)";
          } else if (sdMagMode === 'theme7') {`;

    const newBlock = `          if(sdMagMode === 'crop5') {
              sdMagImg.style.transformOrigin = "50% 9%";
              sdMagImg.style.transform = "scale(2.4)";
          } else if (sdMagMode === 'crop6') {
              sdMagImg.style.transformOrigin = "50% 67%";
              sdMagImg.style.transform = "scale(2.4)";
          } else if (sdMagMode === 'theme7') {`;

    if(txt.includes(oldBlock)) {
        txt = txt.replace(oldBlock, newBlock);
        fs.writeFileSync(p, txt, 'utf8');
        console.log('Successfully adjusted crop points in', p);
    } else {
        console.log('Could not find the target block in', p);
        
        // Let's try replacing individually just in case
        if(txt.includes("sdMagImg.style.transformOrigin = \"50% 12%\";")) {
             txt = txt.replace(/sdMagImg\.style\.transformOrigin = "50% 12%";/g, 'sdMagImg.style.transformOrigin = "50% 9%";');
             txt = txt.replace(/sdMagImg\.style\.transformOrigin = "50% 55%";/g, 'sdMagImg.style.transformOrigin = "50% 67%";');
             fs.writeFileSync(p, txt, 'utf8');
             console.log('Falling back to individual replacements in', p);
        }
    }
});

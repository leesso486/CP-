const fs = require('fs');

let path = '../apply_sudanbi.js';
let txt = fs.readFileSync(path, 'utf8');

const oldBlock = `          if(sdMagMode === 'crop5') {
              sdMagContainer.style.aspectRatio = "16/10";
              sdMagImg.style.height = "100%";
              sdMagImg.style.objectFit = "cover";
              sdMagImg.style.objectPosition = "center 5%"; 
              sdMagImg.style.transform = "none";
          } else if (sdMagMode === 'crop6') {
              sdMagContainer.style.aspectRatio = "16/10";
              sdMagImg.style.height = "100%";
              sdMagImg.style.objectFit = "cover";
              sdMagImg.style.objectPosition = "center 77%"; 
              sdMagImg.style.transform = "none";
          }`;

const newBlock = `          if(sdMagMode === 'crop5') {
              sdMagContainer.style.aspectRatio = "1/1";
              sdMagImg.style.height = "100%";
              sdMagImg.style.objectFit = "cover";
              sdMagImg.style.objectPosition = "center 2%"; 
              sdMagImg.style.transform = "none";
          } else if (sdMagMode === 'crop6') {
              sdMagContainer.style.aspectRatio = "1.1/1";
              sdMagImg.style.height = "100%";
              sdMagImg.style.objectFit = "cover";
              sdMagImg.style.objectPosition = "center 88%"; 
              sdMagImg.style.transform = "none";
          }`;

if(txt.includes(oldBlock)) {
    txt = txt.replace(oldBlock, newBlock);
    fs.writeFileSync(path, txt, 'utf8');
    console.log('Replaced successfully');
} else {
    console.log('Block not found');
}

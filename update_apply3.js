const fs = require('fs');

let path = '../apply_sudanbi.js';
let txt = fs.readFileSync(path, 'utf8');

const oldBlock = `          if(sdMagMode === 'crop5') {
              sdMagContainer.style.aspectRatio = "16/11";
              sdMagImg.style.height = "100%";
              sdMagImg.style.objectFit = "cover";
              sdMagImg.style.objectPosition = "center 0%"; // 맨 위로
              sdMagImg.style.transformOrigin = "top center";
              sdMagImg.style.transform = "scale(1.4) translateY(2%)"; // 더 확대하고 비율을 납작하게 만들어 F를 완전히 자름
          } else if (sdMagMode === 'crop6') {
              sdMagContainer.style.aspectRatio = "16/11";
              sdMagImg.style.height = "100%";
              sdMagImg.style.objectFit = "cover";
              sdMagImg.style.objectPosition = "center 100%"; // 맨 아래로
              sdMagImg.style.transformOrigin = "bottom center";
              sdMagImg.style.transform = "scale(1.4) translateY(-2%)"; // E를 완전히 자름
          }`;

const newBlock = `          if(sdMagMode === 'crop5') {
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

if(txt.includes(oldBlock)) {
    txt = txt.replace(oldBlock, newBlock);
    fs.writeFileSync(path, txt, 'utf8');
    console.log('Replaced successfully');
} else {
    console.log('Block not found');
}

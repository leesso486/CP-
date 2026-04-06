const fs = require('fs');

let path = '../apply_sudanbi.js';
if(!fs.existsSync(path)) {
    console.log('Not found');
    process.exit();
}

let txt = fs.readFileSync(path, 'utf8');

const oldBlock = `          if(sdMagMode === 'crop5') {
              sdMagContainer.style.aspectRatio = "4/3";
              sdMagImg.style.height = "100%";
              sdMagImg.style.objectFit = "cover";
              sdMagImg.style.objectPosition = "center 13%";
              sdMagImg.style.transform = "none";
          } else if (sdMagMode === 'crop6') {
              sdMagContainer.style.aspectRatio = "4/3";
              sdMagImg.style.height = "100%";
              sdMagImg.style.objectFit = "cover";
              sdMagImg.style.objectPosition = "center 63%";
              sdMagImg.style.transform = "none";
          }`;

const newBlock = `          if(sdMagMode === 'crop5') {
              sdMagContainer.style.aspectRatio = "4/3";
              sdMagImg.style.height = "100%";
              sdMagImg.style.objectFit = "cover";
              sdMagImg.style.objectPosition = "center 8%"; // E번까지만 보이도록 위로 끌어올림
              sdMagImg.style.transform = "scale(1.2)"; // 좀 더 크게 확대해서 아래쪽(F)이 잘리도록
          } else if (sdMagMode === 'crop6') {
              sdMagContainer.style.aspectRatio = "4/3";
              sdMagImg.style.height = "100%";
              sdMagImg.style.objectFit = "cover";
              sdMagImg.style.objectPosition = "center 80%"; // F번부터 보이도록 확 내림
              sdMagImg.style.transform = "scale(1.2)"; // 확대해서 위쪽(E)이 잘리도록
          }`;

if(txt.includes(oldBlock)) {
    txt = txt.replace(oldBlock, newBlock);
    fs.writeFileSync(path, txt, 'utf8');
    console.log('Replaced successfully');
} else {
    // maybe parts?
    txt = txt.replace(/objectPosition = "center 13%"/g, 'objectPosition = "center 8%"');
    txt = txt.replace(/objectPosition = "center 63%"/g, 'objectPosition = "center 80%"');
    fs.writeFileSync(path, txt, 'utf8');
    console.log('Replaced by regex');
}

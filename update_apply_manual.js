const fs = require('fs');

let path = '../apply_sudanbi.js';
let txt = fs.readFileSync(path, 'utf8');

const oldBlock = `          if(sdMagMode === 'crop5') {
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

const newBlock = `          if(sdMagMode === 'crop5') {
              sdMagContainer.style.aspectRatio = "1.6/1"; // 박스 높이를 정확히 E영역만큼만
              sdMagImg.style.width = "100%";
              sdMagImg.style.height = "auto";
              sdMagImg.style.objectFit = "unset";
              sdMagImg.style.objectPosition = "unset";
              sdMagImg.style.transform = "translateY(-6%)"; // E영역 위로 끌어올리기 (F는 박스 밖으로 짤림)
          } else if (sdMagMode === 'crop6') {
              sdMagContainer.style.aspectRatio = "1.5/1"; // F영역 높이 (27번 보임)
              sdMagImg.style.width = "100%";
              sdMagImg.style.height = "auto";
              sdMagImg.style.objectFit = "unset";
              sdMagImg.style.objectPosition = "unset";
              sdMagImg.style.transform = "translateY(-50%)"; // 정확히 F 시작점까지 끌어올리기 (E는 박스 위로 짤림)
          }`;

if(txt.includes(oldBlock)) {
    txt = txt.replace(oldBlock, newBlock);
    fs.writeFileSync(path, txt, 'utf8');
    console.log('Replaced successfully');
} else {
    console.log('Block not found');
}

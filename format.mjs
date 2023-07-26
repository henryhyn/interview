// 参考: https://github.com/vinta/pangu.js/blob/master/src/shared/core.js
import fs from 'fs';

// const CJK = '\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30fa\u30fc-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff';
// const CJK_ANS = new RegExp(`([${CJK}])([A-Za-z][A-Za-z0-9])`, 'g');
// const ANS_CJK = new RegExp(`([A-Za-z][A-Za-z0-9])([${CJK}])`, 'g');
const CRLF_LF = /[ ]*\r?\n/g;
const CJK_ANS = /(\p{Unified_Ideograph})(\w)/gui;
const ANS_CJK = /(\w%?)(\p{Unified_Ideograph})/gui;
const BRACKET = /（([^\p{Unified_Ideograph}]+?)）/gui;
const CJK_BRACKET = /(\p{Unified_Ideograph})(\()/gui;
const BRACKET_CJK = /(\))(\p{Unified_Ideograph})/gui;
const spacing = function (text) {
  let newText = (text || '').trim();
  newText = newText.replace(CRLF_LF, '\n');
  newText = newText.replace(CJK_ANS, '$1 $2');
  newText = newText.replace(ANS_CJK, '$1 $2');
  newText = newText.replace(BRACKET, '($1)');
  newText = newText.replace(CJK_BRACKET, '$1 $2');
  newText = newText.replace(BRACKET_CJK, '$1 $2');
  return newText + '\n';
};
const convert = function (symbols) {
  return symbols
    .replace(/， */g, ', ')
    .replace(/； */g, '; ')
    .replace(/： */g, ': ');
};

const args = process.argv.slice(2);
args.forEach(file => {
  const data = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, spacing(data), { encoding: 'utf8' });
  console.log(`${file} 转换完毕!`);
});

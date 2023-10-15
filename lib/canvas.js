const fs = require('fs')
const chalk = require('chalk')
const ling = require('knights-canvas')

async function Jb1(jb) {
const image = await new ling.Jb1()
    .setName(jb)
    .toAttachment();
  
  tot = image.toBuffer();
  await fs.writeFileSync('./canvas/Jb1.png', tot)
}

async function Jb2(jb, tt) {
const image = await new ling.Jb2()
    .setText1(jb)
    .setText2(tt)
    .toAttachment();
  
  tot = image.toBuffer();
  await fs.writeFileSync('./canvas/Jb2.png', tot)
}

async function Jb3(jb, bb, cc, dd) {
const image = await new ling.Jb3()
    .setAvatar(jb)
    .setText1(bb)
    .setText2(cc)
    .setText3(dd)
    .toAttachment();
  
  tot = image.toBuffer();
  await fs.writeFileSync('./canvas/Jb3.png', tot)
}

async function Jb4(jb, bb, cc, dd) {
const image = await new ling.Jb4()
    .setAvatar(jb)
    .setText1(bb)
    .setText2(cc)
    .setText3(dd)
    .toAttachment();
  
  tot = image.toBuffer();
  await fs.writeFileSync('./canvas/Jb4.png', tot)
}

async function OnePiece(jb, tt) {
const image = await new ling.OnePiece()
    .setText1(jb)
    .setText2(tt)
    .toAttachment();
  
  tot = image.toBuffer();
  await fs.writeFileSync('./canvas/OnePiece.png', tot)
}

module.exports = {
    Jb1,
    Jb2,
    Jb3,
    Jb4,
    OnePiece
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
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

module.exports = {
    Jb1
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝐑𝐞𝐲𝐳𝐗𝐩𝐥𝐨𝐢𝐭"
global.dana = "-"
global.qris = "-"


// GLOBAL SETTING
global.owner = "6285758402601"
global.namabot = "𝐑𝐞𝐲𝐳𝐗𝐩𝐥𝐨𝐢𝐭"
global.nomorbot = "6285758402601"
global.namaCreator = "𝐑𝐳𝐱𝐲𝐗𝐒𝐞𝐧𝐭𝐫𝐲"
global.linkyt = "https://youtube.com/@rzxyydev"
global.autoJoin = false
global.antilink = false
global.versisc = '5.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://d.top4top.io/p_3204fjdy99.jpg'
global.isLink = 'https://whatsapp.com/channel/0029ValbDPt6WaKwXIRaHM0P'
global.packname = "Bugs"
global.author = "𝐑𝐞𝐲𝐳𝐱"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
const fs = require('fs')
console.log((process.hrtime()[0]/60).toFixed(5))
console.log('Antes da leitura do arquivo')

const data = fs.readFile('arquivo.txt', (err, data) => {
    if (err) {
        throw err
    }
    console.log('Executando a leitura do arquivo')
})

console.log('Depois da leitura do arquivo')
console.log((process.hrtime()[0]/60).toFixed(5))
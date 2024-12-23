const http = require('node:http')

const {findAvailablePort} = require('./free-port.js')

const desirePort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hola mundo')
})

findAvailablePort(desirePort).then(port => {
    server.listen(port, () => {
        // al poner el 0 como puerto, se le indica que en cuentre uno que este disponible
        console.log(`server listening o port http://localhost:${server.address().port}`)
    })
})

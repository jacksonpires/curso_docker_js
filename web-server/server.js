const http = require('http')
const port = 3000
const ip = '0.0.0.0' // localhost
 
const server = http.createServer((req, res) => {
  res.end('<h1>Hello!</h1>')
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
})